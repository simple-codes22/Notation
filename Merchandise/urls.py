from django.urls import path
from .views import main

app_name = 'Merch'

urlpatterns = [
    path('', main, name='main'),
]