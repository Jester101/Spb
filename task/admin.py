from django.contrib import admin

from .models import Task, Place


class TaskUnit(admin.StackedInline):
    model = Task


class PlaceItemAdmin(admin.ModelAdmin):
    list_display = ('title',)
    inlines = [TaskUnit]
    fieldsets = (
    (None, {
        'fields': (
            'title',
            'text',
            'help',),}
    ),)


admin.site.register(Place, PlaceItemAdmin)
