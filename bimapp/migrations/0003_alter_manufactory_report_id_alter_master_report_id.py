# Generated by Django 5.0.1 on 2024-03-19 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bimapp', '0002_delete_master_report2_manufactory_report_id_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='manufactory_report',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='master_report',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
