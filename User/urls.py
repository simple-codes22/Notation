from django.urls import re_path
from .views import main

app_name = 'User'

urlpatterns = [
    re_path(r'.*', main, name="main")
]