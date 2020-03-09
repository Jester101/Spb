from django.contrib import admin

from .models import Info, InfoUnit, Task, History


class InfoUnitInline(admin.StackedInline):
    model = InfoUnit


class HistoryUnit(admin.StackedInline):
    model = History


class TaskUnit(admin.StackedInline):
    model = Task


class InfoItemAdmin(admin.ModelAdmin):
    list_display = ('title',)
    inlines = [InfoUnitInline, HistoryUnit, TaskUnit,]
    fieldsets = (
    (None, {
        'fields': (
            'title',
            'image',
        ),
    }),
    )


admin.site.register(Info, InfoItemAdmin)
