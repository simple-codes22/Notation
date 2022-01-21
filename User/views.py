from django.shortcuts import render

def main(request, *args, **kwargs):
    return render(request, 'Main_index.html')
# Create your views here.
