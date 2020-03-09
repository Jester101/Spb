from django.db import models


class Place(models.Model):
    title = models.CharField(max_length=60)
    text = models.TextField(blank=False)
    help = models.ImageField(upload_to='help/', blank=False)


class Task(models.Model):
    question = models.TextField()
    key = models.ForeignKey('Place', on_delete=models.CASCADE, related_name='tasks')
    answer = models.CharField(max_length=40)
