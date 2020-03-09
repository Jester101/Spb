from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Task, Place
import random
import json


def task(request):
    return render(request, 'task.html')



def update(request):
    id = request.GET['id']
    place = Place.objects.filter(pk=id)[0]
    tasks = place.tasks.all()
    print(place.pk)
    task = tasks[random.randint(0, len(tasks)-1)]
    response = {}
    response['task'] = place.text
    response['question'] = task.question
    response['help'] = place.help.url
    response['number_place'] = id
    response['number_task'] = task.pk
    return HttpResponse(json.dumps(response), content_type='application/json')



def load_task(request):
    id = int(request.GET['id'])
    count = len(Place.objects.all())
    task_number = int(request.GET['task_id'])
    task = Task.objects.get(pk=task_number)
    response = {}
    if "answer" in request.GET:
        if task.answer == request.GET['answer']:
            response['result'] = True
            if id >= count:
                response['solved'] = True
                response['photo'] = "/media/cert.jpg"
            else:
                id += 1
                place = Place.objects.filter(pk=id)[0]
                tasks = place.tasks.all()
                task = tasks[random.randint(0, len(tasks)-1)]
                response['task'] = place.text
                response['question'] = task.question
                response['help'] = place.help.url
                response['number_place'] = id
                response['number_task'] = task.pk
        else:
            response['result'] = False
    return HttpResponse(json.dumps(response), content_type='application/json')

