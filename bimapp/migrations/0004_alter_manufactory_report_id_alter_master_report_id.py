# Generated by Django 5.0.1 on 2024-03-19 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bimapp', '0003_alter_manufactory_report_id_alter_master_report_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manufactory_report',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='master_report',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
