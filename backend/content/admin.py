from django.contrib import admin

from content.models import AddressContact, PhoneContact, EmailContact, Employee, Project

admin.site.register(AddressContact)
admin.site.register(Employee)
admin.site.register(Project)
