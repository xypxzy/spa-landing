from django.contrib import admin
from modeltranslation.admin import TranslationAdmin

from content.models import AddressContact, PhoneContact, EmailContact, Employee, Project
from content.mixins import ContentAdminMixin

admin.site.site_header = "Myticket"


class AddressContactAdmin(ContentAdminMixin, admin.ModelAdmin):
    list_display = ('id', 'address', 'is_visible',)
    list_display_links = ('address',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('address_ru', 'address_en', 'address_ky',)

    fieldsets = (
        ('Russsian', {
            'fields': ('address_ru',)
        }),
        ('English', {
            'fields': ('address_en',)
        }),
        ('Kyrgyz', {
            'fields': ('address_ky',)
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
    
    list_filter = ('is_visible',)

    actions = ('make_visible', 'make_invisible',)

admin.site.register(PhoneContact, PhoneContactAdmin)


class EmailContactAdmin(ContentAdminMixin, admin.ModelAdmin):
    list_display = ('id', 'email', 'is_visible',)
    list_display_links = ('email',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)
    search_fields = ('email',)
    
    list_filter = ('is_visible',)

    actions = ('make_visible', 'make_invisible',)

admin.site.register(EmailContact, EmailContactAdmin)


class ProjectAdmin(ContentAdminMixin, TranslationAdmin):
    list_display = ('id', 'name', 'description', 'customer', 'is_visible',)
    list_display_links = ('name', 'description', 'customer',)
    list_editable = ('is_visible',)
    ordering = ('-is_visible', 'id',)

    fieldsets = (
        ('Russsian', {
            'fields': ('name_ru', 'description_ru', 'customer_ru',)
        }),
        ('English', {
            'fields': ('name_en', 'description_en', 'customer_en',)
        }),
        ('Kyrgyz', {
            'fields': ('name_ky', 'description_ky', 'customer_ky',)
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
        ('Russsian', {
            'fields': ('first_name_ru', 'last_name_ru', 'position_ru',)
        }),
        ('English', {
            'fields': ('first_name_en', 'last_name_en', 'position_en',)
        }),
        ('Kyrgyz', {
            'fields': ('first_name_ky', 'last_name_ky', 'position_ky',)
        }),
    )

    search_fields = (#'first_name__istartswith', 'last_name__istartswith', 'position',
                     'first_name_ru__istartswith', 'last_name_ru__istartswith', 'position_ru',
                     'first_name_en__istartswith', 'last_name_en__istartswith', 'position_en',
                     'first_name_ky__istartswith', 'last_name__istartswith', 'position_ky')
    
    list_filter = ('position', 'is_visible',)
    actions = ('make_visible', 'make_invisible',)
   
admin.site.register(Employee, EmployeeAdmin)
