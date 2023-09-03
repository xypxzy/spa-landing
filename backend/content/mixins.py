from django.contrib import admin, messages
from django.utils.safestring import mark_safe

class ContentActionAdminMixin:

    @admin.action(description="Отобразить на сайте")
    def make_visible(self, request, queryset):
        updated = queryset.update(is_visible=True)
        self.message_user(request, f'Обновлено записей: {updated}.', level=messages.SUCCESS)

    @admin.action(description="Скрыть на сайте")
    def make_invisible(self, request, queryset):
        updated = queryset.update(is_visible=False)
        self.message_user(request, f'Обновлено записей: {updated}.', level=messages.SUCCESS)

    def get_little_image(self, object):
        if object.image:
            return mark_safe(f"<img src='{object.image.url}' width=50>")
    
    get_little_image.short_description = "Картинка"
