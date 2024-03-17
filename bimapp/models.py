from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Engineer(models.Model):
    username = models.CharField(max_length=8)
    password = models.CharField(max_length=8)
    name = models.CharField(max_length=20)

    
class Supervisor(models.Model):
    username = models.CharField(max_length=8)
    password = models.CharField(max_length=8)
    name = models.CharField(max_length=20)
    

class Master(models.Model):
    username = models.CharField(max_length=8)
    password = models.CharField(max_length=8)
    name = models.CharField(max_length=20)
    
    
class Manufactory_report(models.Model):
    writer_username = models.CharField(max_length=8)
    title = models.CharField(max_length=8)
    report = models.CharField(max_length=500)
    id_number = models.IntegerField(default=0)
    
    def __str__(self):
        return str(self.id_number)
    
    
    
class Master_report(models.Model):
    writer_username = models.CharField(max_length=8)
    title = models.CharField(max_length=8)
    report = models.CharField(max_length=500)
    id_number = models.IntegerField(default=0)
    
    def __str__(self):
        return str(self.id_number)

    
  
class Meta:
        app_label = 'bimapp'
    
