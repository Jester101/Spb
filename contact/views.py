from django.shortcuts import render


def render_form(request):
    return render(request, "contact.html")


