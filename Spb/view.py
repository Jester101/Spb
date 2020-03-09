from django.shortcuts import render


def render_main_page(request):
    return render(request, 'main.html')

def free_map(request):
    return render(request, 'freemap.html')

def people(request):
    return render(request, 'people.html')

def source(request):
    return render(request, 'source.html')

