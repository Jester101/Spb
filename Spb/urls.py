"""Spb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from django.conf import settings
from information import urls as inf_urls
from task import urls as task_urls
from contact import urls as contact_urls
from .view import render_main_page, free_map, people, source

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', render_main_page),
    url(r'^map/', free_map),
    url(r'^people/', people),
    url(r'^source/', source),
    url(r'^task/', include(task_urls)),
    url(r'^info/', include(inf_urls)),
    url(r'^contact/', include(contact_urls)),
]
