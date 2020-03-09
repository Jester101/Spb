from django.conf.urls import include, url

from .views import InfoItemDetailView, InfoItemListView, get_view

urlpatterns = [
    url(r'^$', InfoItemListView.as_view()),
    url(r'^(?P<pk>\d+)/$', InfoItemDetailView.as_view()),
    url(r'^(?P<pk>\d+)/history/', get_view),
]
