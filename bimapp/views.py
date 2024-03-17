from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings
from .models import Engineer,Supervisor, Master, Manufactory_report , Master_report
from django.shortcuts import render, get_object_or_404
# Create your views here.


def home(request):
    if request.method == 'POST' :
        username = request.POST.get('nationalCode')
        password = request.POST.get('password')
        
        engineer_user = Engineer.objects.filter(username=username, password=password).first()    
        supervisor_user = Supervisor.objects.filter(username=username, password=password).first()
        master_user = Master.objects.filter(username=username, password=password).first()
        
        if master_user is not None :
            request.session['user_data'] = {'username': username, 'password': password}
            return redirect('master')
        
        if supervisor_user is not None :
            request.session['user_data'] = {'username': username, 'password': password}
            return redirect('supervisor')
        
        if engineer_user is not None :
            request.session['user_data'] = {'username': username, 'password': password}
            return redirect('engineer')
         
    return render(request, "login.html")

  
  
  


# ------------------------------------ ENGINEER ---------------------------------------------------------------------------------

def engineer(request):
    user_data = request.session.get('user_data', {})
    return render(request, "engineerPanel.html", {'user_data': user_data})



def reports_engineer(request):
    user_data = request.session.get('user_data', {})
    engineer_report = Manufactory_report.objects.filter(writer_username=user_data['username'])
    data = {
        'engineer_report' : engineer_report ,
        'user_data': user_data
    }
    if request.method == 'POST':
        current_report = request.POST.get('data_from_p', None)
        print(current_report)
        request.session['report_data'] = {'current_report': current_report}
    return render(request, "reportsEngineerPanel.html", data)



def change_password_engineer(request):
    user_data = request.session.get('user_data', {})
    engineer_user = Engineer.objects.filter(username=user_data['username']).first()
    
    current_password = request.POST.get('currentPassword')
    new_password = request.POST.get('newPassword')
    new_password_again = request.POST.get('newPasswordAgain')
    
    if engineer_user.password == current_password :
        if new_password == new_password_again :
            engineer_user.password = new_password
            engineer_user.save()
            return redirect('engineer')
    return render(request, "changePasswordPage.html", {'user_data': user_data})



def add_report_engineer(request):
    user_data = request.session.get('user_data', {})
    if request.method == 'POST':
        report_data = request.POST.get('editor')
        user = Engineer.objects.get(username = user_data['username'])
        new_report = Manufactory_report()
        new_report.report = report_data
        new_report.writer_username = user_data['username']
        new_report.title = 'Title'
        new_report.save()
    return render(request, "addReportEngineerPanel.html", {'user_data': user_data})




def view_and_edit_engineer(request):
    user_data = request.session.get('user_data', {})
    current_report = request.session.get('report_data', {})
    print(current_report)
    report = current_report['current_report']  
    data = {
        'current_report' : report ,
        'user_data': user_data
    }    
    if request.method == 'POST':
        report_data = request.POST.get('new_report')
        new_report = Manufactory_report.objects.get(report= report)
        new_report.report = report_data
        new_report.save()
    return render(request, "viewAndEditPageEngineer.html", data)





# ------------------------------------ SUPERVISOR ------------------------------------------------------------------------------

def supervisor(request):
    user_data = request.session.get('user_data', {})
    return render(request, "superviserPanel.html", {'user_data': user_data})
    
    
def view_reports_supervisor(request):
    user_data = request.session.get('user_data', {})
    all_reports = Manufactory_report.objects.all()
    data = {
        'all_reports' : all_reports ,
        'user_data': user_data
    }
    if request.method == 'POST':
        current_report = request.POST.get('data_from_p')
        request.session['report_data'] = {'current_report': current_report}
    
    return render(request, "seeReportSuperviser.html", data)



def change_password_supervisor(request):
    user_data = request.session.get('user_data', {})
    supervisor_user = Supervisor.objects.filter(username=user_data['username']).first()
    
    current_password = request.POST.get('currentPassword')
    new_password = request.POST.get('newPassword')
    new_password_again = request.POST.get('newPasswordAgain')
    
    if supervisor_user.password == current_password :
        if new_password == new_password_again :
            supervisor_user.password = new_password
            supervisor_user.save()
            return redirect('supervisor')
    return render(request, "changePasswordPageSuperviser.html", {'user_data': user_data})



def add_report_supervisor(request):
    user_data = request.session.get('user_data', {})
    if request.method == 'POST':
        report_data = request.POST.get('editor')
        user = Supervisor.objects.get(username = user_data['username'])
        new_report = Master_report()
        new_report.report = report_data
        new_report.writer_username = user_data['username']
        new_report.title = 'Title'
        new_report.save()
    return render(request, "addMasterReport.html", {'user_data': user_data})



def view_reports_exact_supervisor(request):
    user_data = request.session.get('user_data', {})
    current_report = request.session.get('report_data', {})
    report = current_report['current_report']  
    data = {
        'current_report' : report ,
        'user_data': user_data
    }    
        
    return render(request, "viewReportSuperviser.html", data)








# ------------------------------------ MASTER ----------------------------------------------------------------------------------

def master(request):
    user_data = request.session.get('user_data', {})
    return render(request, "MasterPanel.html", {'user_data': user_data})



def see_master_report(request):
    user_data = request.session.get('user_data', {})
    all_reports = Master_report.objects.all()
    data = {
        'all_reports' : all_reports ,
        'user_data': user_data
    }
    if request.method == 'POST':
        current_report = request.POST.get('data_from_p')
        request.session['report_data'] = {'current_report': current_report}
    
    return render(request, "seeReportMasterPanel.html", data)


def user_management(request):
    user_data = request.session.get('user_data', {})
    return render(request, "userManagementMaster.html", {'user_data': user_data})


def change_password_master(request):
    user_data = request.session.get('user_data', {})
    master_user = Master.objects.filter(username=user_data['username']).first()
    
    current_password = request.POST.get('currentPassword')
    new_password = request.POST.get('newPassword')
    new_password_again = request.POST.get('newPasswordAgain')
    
    if master_user.password == current_password :
        if new_password == new_password_again :
            master_user.password = new_password
            master_user.save()
            return redirect('master')
    return render(request, "changePasswordPageMaster.html", {'user_data': user_data})


def ban_user(request):
    user_data = request.session.get('user_data', {})
    return render(request, "banUsersMaster.html", {'user_data': user_data})


def create_user(request):
    user_data = request.session.get('user_data', {})
    return render(request, "createNewUserByMaster.html", {'user_data': user_data})


def check_password(request):
    user_data = request.session.get('user_data', {})
    return render(request, "checkPasswordrwecoveryMaster.html", {'user_data': user_data})





def user_logout(request):
    user_data = request.session.get('user_data', {})
    logout(request)
    return redirect('home')