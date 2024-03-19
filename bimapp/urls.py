from django.contrib import admin
from django.urls import path , include
from . import views 
urlpatterns = [
    
    path('' , views.home, name="home"),
    
    
    path('engineer' , views.engineer, name="engineer"),
    path('reports_engineer' , views.reports_engineer, name="reports_engineer"),
    path('change_password_engineer' , views.change_password_engineer, name="change_password_engineer"),
    path('add_report_engineer' , views.add_report_engineer, name="add_report_engineer"),
    path('view_and_edit_engineer' , views.view_and_edit_engineer, name="view_and_edit_engineer"),
    
    
    path('supervisor' , views.supervisor, name="supervisor"),
    path('view_reports_supervisor' , views.view_reports_supervisor, name="view_reports_supervisor"),
    path('change_password_supervisor' , views.change_password_supervisor, name="change_password_supervisor"),
    path('add_report_supervisor' , views.add_report_supervisor, name="add_report_supervisor"),
    path('view_reports_exact_supervisor' , views.view_reports_exact_supervisor, name="view_reports_exact_supervisor"),
    

    
    path('master' , views.master, name="master"),
    path('user_management' , views.user_management, name="user_management"),
    path('see_master_report' , views.see_master_report, name="see_master_report"),
    path('see_exact_master_report' , views.see_exact_master_report, name="see_exact_master_report"),
    path('change_password_master' , views.change_password_master, name="change_password_master"),
    path('ban_user' , views.ban_user, name="ban_user"),
    path('create_user' , views.create_user, name="create_user"),
    path('check_password' , views.check_password, name="check_password"),
    
]