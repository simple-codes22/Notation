from django.urls import path
from .views import main

app_name = 'User'

urlpatterns = [
    path('', main, name="main")
]