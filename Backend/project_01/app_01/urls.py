from django.contrib import admin
from django.urls import path , include
from app_01 import views

urlpatterns = [
    path('login/',views.login_user,name = "login"),
    path('', views.login_user, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('logout/', views.logout_user, name='logout'),
]
