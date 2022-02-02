from django.urls import path
from .views import main

app_name = 'Contributors'

urlpatterns = [
    path('', main, name='main')
]