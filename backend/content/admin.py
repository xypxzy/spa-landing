from typing import Any
from django.contrib import admin
from django.utils.safestring import mark_safe

from modeltranslation.admin import (TranslationAdmin, TranslationStackedInline,
TranslationTabularInline)

from content.models import (AddressContact, PhoneContact, EmailContact, Employee, Project,
SummaryNumericData, OurValues, Thesis, BigTextualContent, UserSubscription)
from content.mixins import ContentActionAdminMixin

admin.site.site_header = "Myticket"

descriptions = {
        'ru': 'Поля на русском языке обязательны (*).',
        'en': 'Укажите перевод для англоязычной версии сайта.',
        'ky': 'Укажите перевод для кыргызской версии сайта.'
        }

class AddressContactAdmin(ContentActionAdminMixin, TranslationAdmin):
    list_display = ('id', 'city', 'address', 'get_little_image', 'is_visible',)
    list_display_links = ('city', 'address',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('city_ru', 'city_en', 'city_ky',
        'address_ru', 'address_en', 'address_ky',)

    readonly_fields = ('get_little_image',)
    fieldsets = (
        ('Ru', {
            'fields': ('city_ru', 'address_ru', ('image', 'get_little_image'),),
            'description': descriptions['ru'],
        }),
        ('En', {
            'fields': ('city_en', 'address_en',),
            'description': descriptions['en']
        }),
        ('Ky', {
            'fields': ('city_ky', 'address_ky',),
            'description': descriptions['ky']
        }),
        ('Статус', {
            'fields': ('is_visible',),
        }),
    )
    
    list_filter = ('is_visible',)

    actions = ('make_visible', 'make_invisible',)

admin.site.register(AddressContact, AddressContactAdmin)


class PhoneContactAdmin(ContentActionAdminMixin, admin.ModelAdmin):
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


class EmailContactAdmin(ContentActionAdminMixin, admin.ModelAdmin):
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


class ProjectAdmin(ContentActionAdminMixin, TranslationAdmin):
    list_display = ('id', 'name', 'description', 'customer', 'get_little_image', 'is_visible',)
    list_display_links = ('name', 'description', 'customer',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    readonly_fields = ('get_little_image',)

    fieldsets = (
        ('Ru', {
            'fields': ('name_ru', 'description_ru', 'customer_ru', ('image', 'get_little_image',),),
            'description': descriptions['ru'],
        }),
        ('En', {
            'fields': ('name_en', 'description_en', 'customer_en',),
            'description': descriptions['en'],
        }),
        ('Ky', {
            'fields': ('name_ky', 'description_ky', 'customer_ky',),
            'description': descriptions['ky'],
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


class EmployeeAdmin(ContentActionAdminMixin, TranslationAdmin):
    list_display = ('id', 'first_name', 'last_name', 'position', 'get_little_image', 'is_visible',)
    list_display_links = ('first_name', 'last_name', 'position',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', '-is_active', 'id',)
    readonly_fields = ('get_little_image',)
    
    fieldsets = (
        ('Ru', {
            'fields': ('first_name_ru', 'last_name_ru', 'position_ru', ('image', 'get_little_image',),),
            'description': descriptions['ru'],
        }),
        ('En', {
            'fields': ('first_name_en', 'last_name_en', 'position_en',),
            'description': descriptions['en'],
        }),
        ('Ky', {
            'fields': ('first_name_ky', 'last_name_ky', 'position_ky',),
            'description': descriptions['ky'],
        }),
        ('Соц. сети', {
            'fields': ('facebook', 'whatsapp', 'instagram',),
        }),
        ('Статус', {
            'fields': ('is_active', 'is_visible',),
        }),
    )

    search_fields = ('first_name_ru__istartswith', 'last_name_ru__istartswith', 'position_ru',
                     'first_name_en__istartswith', 'last_name_en__istartswith', 'position_en',
                     'first_name_ky__istartswith', 'last_name__istartswith', 'position_ky')
    
    list_filter = ('position', 'is_visible',)
    actions = ('make_visible', 'make_invisible',)
    
    def save_model(self, request: Any, obj: Any, form: Any, change: Any) -> None:
        if not obj.is_active:
            obj.is_visible = False
        # print()
        return super().save_model(request, obj, form, change)
   
admin.site.register(Employee, EmployeeAdmin)


class SummaryNumericDataAdmin(ContentActionAdminMixin, TranslationAdmin):
    list_display = ('id', 'data_description', 'number', 'color', 'is_visible',)
    list_display_links = ('data_description',)
    list_editable = ('number', 'color', 'is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('data_description_ru', 'data_description_en', 'data_description_ky',)
    
    fieldsets = (
        ('Ru', {
            'fields': ('data_description_ru', 'number', 'color',),
            'description': descriptions['ru'],
        }),
        ('En', {
            'fields': ('data_description_en',),
            'description': descriptions['en'],
        }),
        ('Ky', {
            'fields': ('data_description_ky',),
            'description': descriptions['ky'],
        }),
        ('Статус', {
            'fields': ('is_visible',)
        }),
    )
    
    list_filter = ('is_visible',)

    actions = ('make_visible', 'make_invisible',)

admin.site.register(SummaryNumericData, SummaryNumericDataAdmin)


class OurValuesAdmin(ContentActionAdminMixin, TranslationAdmin):
    list_display = ('id', 'name', 'description', 'get_little_image', 'is_visible',)
    list_display_links = ('name', 'description',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('name_ru', 'description_ru',
                     'name_en', 'description_en',
                     'name_ky', 'description_ky',)
    readonly_fields = ('get_little_image',)
    
    fieldsets = (
        ('Ru', {
            'fields': ('name_ru', 'description_ru', ('image', 'get_little_image',),),
            'description': descriptions['ru'],
        }),
        ('En', {
            'fields': ('name_en', 'description_en',),
            'description': descriptions['en'],
        }),
        ('Ky', {
            'fields': ('name_ky', 'description_ky',),
            'description': descriptions['ky'],
        }),
    )
    
    list_filter = ('is_visible',)
    actions = ('make_visible', 'make_invisible',)

admin.site.register(OurValues, OurValuesAdmin)

class ThesisInLine(ContentActionAdminMixin, TranslationStackedInline):
    fields = ('title_ru', 'title_en', 'title_ky',
              'description_ru', 'description_en', 'description_ky',
              ('image', 'get_little_image',),
              'is_visible',)
    readonly_fields = ('get_little_image',)
    model = Thesis
    extra = 0


class BigTextualContentAdmin(ContentActionAdminMixin, TranslationAdmin):
    list_display = ('id', 'pre_title', 'title', 'description', 'get_little_image', 'is_visible',)
    list_display_links = ('title', 'description',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    inlines = [ThesisInLine]
    
    search_fields = ('title_ru', 'description_ru',
                     'title_en', 'description_en',
                     'title_ky', 'description_ky',)
    
    readonly_fields = ('get_little_image', 'get_little_icon',)
    
    fieldsets = (
        ('Ru', {
            'fields': ('title_ru', 'description_ru', ('image', 'get_little_image',),),
            'description': descriptions['ru'],
        }),
        ('En', {
            'fields': ('title_en', 'description_en',),
            'description': descriptions['en'],
        }),
        ('Ky', {
            'fields': ('title_ky', 'description_ky',),
            'description': descriptions['ky'],
        }),
        ('Метка раздела', {
            'fields': ('pre_title', ('pre_title_image', 'get_little_icon'),),
            'description': 'Добавьте метку раздела и иконку к ней.',
        }),
    )
    
    list_filter = ('is_visible',)
    actions = ('make_visible', 'make_invisible',)
    
    def get_little_icon(self, object):
        if object.pre_title_image:
            return mark_safe(f"<img src='{object.pre_title_image.url}' width=50>")
    
    get_little_icon.short_description = ""

admin.site.register(BigTextualContent, BigTextualContentAdmin)


class UserSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'phone', 'name',)
    list_display_links = ('email', 'phone', 'name',)
    readonly_fields = ('email', 'phone', 'name',)
    search_fields =('email', 'phone', 'name__istartswith',)
    ordering = ('id',)

admin.site.register(UserSubscription, UserSubscriptionAdmin)
