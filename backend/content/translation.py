from modeltranslation.translator import translator, TranslationOptions

from content.models import AddressContact, Project, Employee

class AddressContactTranslationOptions(TranslationOptions):
    fields = ('address',)

translator.register(AddressContact, AddressContactTranslationOptions)


class ProjectTranslationOptions(TranslationOptions):
    fields = ('name', 'description', 'customer',)

translator.register(Project, ProjectTranslationOptions)


class EmployeeTranslationOptions(TranslationOptions):
    fields = ('first_name', 'last_name', 'position',)

translator.register(Employee, EmployeeTranslationOptions)
