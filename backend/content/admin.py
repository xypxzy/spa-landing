from django.contrib import admin
from django.utils.safestring import mark_safe
from modeltranslation.admin import TranslationAdmin

from content.models import (AddressContact, PhoneContact, EmailContact, Employee, Project,
SummaryNumericData, OurValues, BigTextualContent, UserSubscription)
from content.mixins import ContentAdminMixin

admin.site.site_header = "Myticket"


class AddressContactAdmin(ContentAdminMixin, admin.ModelAdmin):
    list_display = ('id', 'address', 'is_visible',)
    list_display_links = ('address',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('address_ru', 'address_en', 'address_ky',)

    fieldsets = (
        ('Ru', {
            'fields': ('address_ru',),
            'description': 'Поля на русском языке обязательны (*).',
        }),
        ('En', {
            'fields': ('address_en',),
            'description': 'Укажите перевод для англоязычной версии сайта.',
        }),
        ('Ky', {
            'fields': ('address_ky',),
            'description': 'Укажите перевод для кыргызской версии сайта.',
        }),
        ('Статус', {
            'fields': ('is_visible',),
        }),
    )
    
    list_filter = ('is_visible',)

    actions = ('make_visible', 'make_invisible',)

admin.site.register(AddressContact, AddressContactAdmin)


class PhoneContactAdmin(ContentAdminMixin, admin.ModelAdmin):
    list_display = ('id', 'phone', 'is_visible',)
    list_display_links = ('phone',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('phone',)
    
    fieldsets = (
        ('Телефон', {
            'fields': ('phone',)
        }),
        ('Статус', {
            'fields': ('is_visible',)
        }),
    )
    
    list_filter = ('is_visible',)

    actions = ('make_visible', 'make_invisible',)

admin.site.register(PhoneContact, PhoneContactAdmin)


class EmailContactAdmin(ContentAdminMixin, admin.ModelAdmin):
    list_display = ('id', 'email', 'is_visible',)
    list_display_links = ('email',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('email',)
    
    fieldsets = (
        ('Email', {
            'fields': ('email',)
        }),
        ('Статус', {
            'fields': ('is_visible',)
        }),
    )
    
    list_filter = ('is_visible',)

    actions = ('make_visible', 'make_invisible',)

admin.site.register(EmailContact, EmailContactAdmin)


class ProjectAdmin(ContentAdminMixin, TranslationAdmin):
    list_display = ('id', 'name', 'description', 'customer', 'is_visible',)
    list_display_links = ('name', 'description', 'customer',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)

    fieldsets = (
        ('Ru', {
            'fields': ('name_ru', 'description_ru', 'customer_ru',),
            'description': 'Поля на русском языке обязательны (*).',
        }),
        ('En', {
            'fields': ('name_en', 'description_en', 'customer_en',),
            'description': 'Укажите перевод для англоязычной версии сайта.',
        }),
        ('Ky', {
            'fields': ('name_ky', 'description_ky', 'customer_ky',),
            'description': 'Укажите перевод для кыргызской версии сайта.',
        }),
        ('Статус', {
            'fields': ('is_visible',),
        }),
    )

    search_fields = ('name_ru__istartswith', 'description_ru', 'customer_ru',
                     'name_en__istartswith', 'description_en', 'customer_en',
                     'name_ky__istartswith', 'description_ky', 'customer_ky')
    
    list_filter = ('customer', 'is_visible',)
    actions = ('make_visible', 'make_invisible',)

admin.site.register(Project, ProjectAdmin)


class EmployeeAdmin(ContentAdminMixin, TranslationAdmin):
    list_display = ('id', 'first_name', 'last_name', 'position', 'is_visible',)
    list_display_links = ('first_name', 'last_name', 'position',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', '-is_active', 'id',)
    
    fieldsets = (
        # ('default', {
        #     'fields': ('first_name', 'last_name', 'position',)
        # }),
        ('Ru', {
            'fields': ('first_name_ru', 'last_name_ru', 'position_ru', 'image',),
            'description': 'Поля на русском языке обязательны (*).',
        }),
        ('En', {
            'fields': ('first_name_en', 'last_name_en', 'position_en',),
            'description': 'Укажите перевод для англоязычной версии сайта.',
        }),
        ('Ky', {
            'fields': ('first_name_ky', 'last_name_ky', 'position_ky',),
            'description': 'Укажите перевод для кыргызской версии сайта.',
        }),
        ('Соц. сети', {
            'fields': ('facebook', 'whatsapp', 'instagram',),
        }),
        ('Статус', {
            'fields': ('is_active', 'is_visible',),
        }),
    )

    search_fields = (#'first_name__istartswith', 'last_name__istartswith', 'position',
                     'first_name_ru__istartswith', 'last_name_ru__istartswith', 'position_ru',
                     'first_name_en__istartswith', 'last_name_en__istartswith', 'position_en',
                     'first_name_ky__istartswith', 'last_name__istartswith', 'position_ky')
    
    list_filter = ('position', 'is_visible',)
    actions = ('make_visible', 'make_invisible',)
   
admin.site.register(Employee, EmployeeAdmin)


class SummaryNumericDataAdmin(ContentAdminMixin, TranslationAdmin):
    list_display = ('id', 'data_description', 'number', 'is_visible',)
    list_display_links = ('data_description',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('data_description_ru', 'data_description_en', 'data_description_ky',)
    
    fieldsets = (
        ('Ru', {
            'fields': ('data_description_ru', 'number',),
            'description': 'Поля на русском языке обязательны (*).',
        }),
        ('En', {
            'fields': ('data_description_en',),
            'description': 'Укажите перевод для англоязычной версии сайта.',
        }),
        ('Ky', {
            'fields': ('data_description_ky',),
            'description': 'Укажите перевод для кыргызской версии сайта.',
        }),
        ('Статус', {
            'fields': ('is_visible',)
        }),
    )
    
    list_filter = ('is_visible',)

    actions = ('make_visible', 'make_invisible',)

admin.site.register(SummaryNumericData, SummaryNumericDataAdmin)


class OurValuesAdmin(TranslationAdmin):
    list_display = ('id', 'name', 'description', 'get_little_image',)
    list_display_links = ('name', 'description',)
    # list_editable = ('image',)
    ordering = ('id',)
    search_fields = ('name_ru', 'description_ru',
                     'name_en', 'description_en',
                     'name_ky', 'description_ky',)
    
    fieldsets = (
        ('Ru', {
            'fields': ('name_ru', 'description_ru', 'image',),
            'description': 'Поля на русском языке обязательны (*).',
        }),
        ('En', {
            'fields': ('name_en', 'description_en',),
            'description': 'Укажите перевод для англоязычной версии сайта.',
        }),
        ('Ky', {
            'fields': ('name_ky', 'description_ky',),
            'description': 'Укажите перевод для кыргызской версии сайта.',
        }),
    )
    
    def get_little_image(self, object):
        if object.image:
            return mark_safe(f"<img src='{object.image.url}' width=50>")
    
    get_little_image.short_description = "Картинка"

admin.site.register(OurValues, OurValuesAdmin)


class BigTextualContentAdmin(ContentAdminMixin, TranslationAdmin):
    pass

admin.site.register(BigTextualContent, BigTextualContentAdmin)


class UserSubscriptionAdmin(ContentAdminMixin, admin.ModelAdmin):
    pass

admin.site.register(UserSubscription, UserSubscriptionAdmin)
