from django.shortcuts import render

def main(request, *args, **kwargs):
    return render(request, 'User_index.html')
# Create your views here.
