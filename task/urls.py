from django.conf.urls import include, url

from .views import load_task, task, update

urlpatterns = [
    url(r'^$',task),
    url(r'^upload/',update),
    url(r'^ajax/task/', load_task),
]
