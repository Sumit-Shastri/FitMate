from django.shortcuts import render

# Create your views here.
def signin_signup(request):
    return render(request, 'users/01_signin_signup_page.html')