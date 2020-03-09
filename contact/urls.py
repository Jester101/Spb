from django.conf.urls import include, url

from .views import render_form
urlpatterns = [
    url(r'^$', render_form),
]
