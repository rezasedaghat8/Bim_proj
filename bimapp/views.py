from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings
# Create your views here.


def home(request):
    return render(request, "login.html")
    

def signup(request):
    if request.method == "POST":
        
        username = request.POST.get('username')
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
    
        myuser = User.objects.create_user(username)
        myuser.first_name = firstname
        myuser.last_name = lastname 
        
        myuser.save()
        
        messages.success(request, "Your account has been successfully created")
        
        return redirect('signin')
    
    return render(request, "signup.html")

def signin(request):
    
    if request.method == "POST" :
    
    
        username = request.POST.get('username')
        password = request.POST.get('password')
    
        user = authenticate(username=username, password=password)
        
        if user is not None:
            login(request, user)
            firstname = user.firstname
            return render(request, "bimapp/index.html", {'firstname':firstname })
        else:
            messages.error(request, "Bad Credentials!")
            return redirect('home')
    return render(request, "bimapp/signin.html")

def signout(request):
    return render(request, "bimapp/signout.html")

