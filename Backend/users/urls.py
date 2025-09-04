from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.signin_signup, name='signin_signup'),
]
