from django.contrib import admin

class ContentAdminMixin:

    @admin.action(description="Отобразить на сайте")
    def make_visible(self, request, queryset):
        updated = queryset.update(is_visible=True)
        self.message_user(request, f'Обновлено записей: {updated}.')

    @admin.action(description="Скрыть на сайте")
    def make_invisible(self, request, queryset):
        updated = queryset.update(is_visible=False)
        self.message_user(request, f'Обновлено записей: {updated}.')
