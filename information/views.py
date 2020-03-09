from django.shortcuts import render
from .models import Info, History, Task, InfoUnit
from django.views.generic import DetailView, ListView


class InfoItemDetailView(DetailView):
    model = Info
    context_object_name = 'info_item'
    template_name = 'info_detail.html'


class InfoItemListView(ListView):
    model = Info
    queryset = Info.objects.order_by('title')
    context_object_name = 'info'
    template_name = 'info_list.html'


def get_view(request):
    print(request.GET)
    image_data = open(request.GET, "rb").read()
    return HttpResponse(image_data, contenttype='application/pdf')
