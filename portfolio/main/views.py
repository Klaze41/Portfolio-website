from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def project(request):
    return render(request, 'project.html')

def ja(request):
    return render(request,'ja.html')

def jaAbout(request):
    return render(request,'jaAbout.html')
