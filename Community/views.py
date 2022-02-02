from django.shortcuts import render, redirect

def main(request, *args, **kwargs):
    if request.method == 'POST':
        pass
    return redirect('User:main')