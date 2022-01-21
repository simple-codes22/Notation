"""
    The base url for the Notation app. 
    The include module connects the smaller sections together while routing takes place
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('User.urls')), # The main app for all users
    path('admin/', admin.site.urls), # The master app for the admin
    path('contribute/', include('Contributor.urls')), # The contributors app for setting questions
    path('community/', include('Community.urls')), # The Community app for asking questions or issues
    path('merch/', include('Merchandise.urls')), # The E-Commerce section for purchasing Notation merches (If that's a word 😂)

]
