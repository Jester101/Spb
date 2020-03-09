from django.db import models

# Create your models here.
class Info(models.Model):
    title = models.CharField(max_length=25)
    image = models.CharField(max_length=30)


class InfoUnit(models.Model):
    title = models.CharField(max_length = 60)
    file = models.FileField(upload_to='files')
    view_file = models.FileField(upload_to='files', blank=True)
    key = models.ForeignKey('Info', on_delete=models.CASCADE, related_name='units')


class Task(models.Model):
    title = models.CharField(max_length = 60)
    file = models.FileField(upload_to='files')
    view_file = models.FileField(upload_to='files', blank=True)
    key = models.ForeignKey('Info', on_delete=models.CASCADE, related_name='task')


class History(models.Model):
    title = models.CharField(max_length = 60)
    file = models.FileField(upload_to='files')
    view_file = models.FileField(upload_to='files', blank=True)
    key = models.ForeignKey('Info', on_delete=models.CASCADE, related_name='history')