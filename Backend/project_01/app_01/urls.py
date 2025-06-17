from django.contrib import admin
from django.urls import path , include
from app_01 import views

urlpatterns = [
    path('login/',views.login_user,name = "login_user"),
    path('', views.login_user, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('logout/', views.logout_user, name='logout'),
    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('reset_password/<uidb64>/<token>/', views.reset_password, name='reset_password'),
    path('password_reset_success/', views.password_reset_success, name='password_reset_success'),
    path('signup/', views.signup_user , name = "signup_user"),

]
