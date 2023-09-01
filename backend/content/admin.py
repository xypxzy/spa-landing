from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from content.models import AddressContact, PhoneContact, EmailContact, Employee, Project

admin.site.site_header = "Myticket"

admin.site.register(AddressContact)
admin.site.register(PhoneContact)
admin.site.register(EmailContact)
admin.site.register(Project)


class EmployeeAdmin(TranslationAdmin):
    list_display = ('id', 'first_name', 'last_name', 'position', 'is_visible',)
    list_display_links = ('first_name', 'last_name', 'position',)
    list_editable = ('is_visible',)
    ordering = ('is_active', 'id',)
    search_fields = ('first_name', 'last_name', 'position',
                     'first_name_ru', 'last_name_ru', 'position_ru',
                     'first_name_en', 'last_name_en', 'position_en',
                     'first_name_ky', 'last_name', 'position_ky')
    actions = ('make_visible', 'make_invisible',)

    @admin.action(description="Отобразить на сайте")
    def make_visible(self, request, queryset):
        updated = queryset.update(is_visible=True)
        self.message_user(request, f'Обновлено {updated} записей.')

    @admin.action(description="Скрыть на сайте")
    def make_invisible(self, request, queryset):
        queryset.update(is_visible=False)

admin.site.register(Employee, EmployeeAdmin)
