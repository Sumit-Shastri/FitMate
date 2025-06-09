from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login ,logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from django.contrib.auth.tokens import default_token_generator
from django.conf import settings
from django.urls import reverse
from django.http import HttpResponse
from django.utils.http import urlsafe_base64_decode
# Create your views here.

def login_user(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username= username,password = password)

        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            messages.error(request, "Invalid username or password")
            return render(request,'login.html')
        
    return render(request, 'login.html')

def dashboard(request):
    return render(request, 'dashboard.html')

def logout_user(request):
    logout(request)
    return redirect('login')


def forgot_password(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            messages.error(request, "No account found with this email.")
            return render(request, 'forgot_password.html')

        # Generate UID and token
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = default_token_generator.make_token(user)

        # Create password reset URL
        reset_link = f"http://127.0.0.1:8000/reset_password/{uid}/{token}/"

        # Send email
        subject = "Password Reset Request"
        message = f"Hi {user.username},\nClick the link below to reset your password:\n{reset_link}"
        from_email = None
        recipient_list = [email]

        send_mail(subject, message, from_email, recipient_list)
        messages.success(request, "Password reset link has been sent to your email.")
        return redirect('login')

    return render(request, 'forgot_password.html')


def reset_password(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and default_token_generator.check_token(user, token):
        if request.method == 'POST':
            new_password = request.POST.get('new_password')
            confirm_password = request.POST.get('confirm_password')

            if new_password != confirm_password:
                messages.error(request, "Passwords do not match.")
                return render(request, 'reset_password.html')

            user.set_password(new_password)
            user.save()
            messages.success(request, "Password reset successful. Please login with your new password.")
            return render(request, 'password_reset_success.html')

        return render(request, 'reset_password.html')
    else:
        messages.error(request, "The password reset link is invalid or has expired.")
        return redirect('forgot_password')