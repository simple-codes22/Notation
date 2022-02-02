from django.urls import path
from .views import main

app_name = 'Community'

urlpatterns = [
    path('', main, name='main'),
]