from modeltranslation.translator import translator, TranslationOptions

from .models import (AddressContact, Project, Employee, SummaryNumericData,
                     OurValues, BigTextualContent, Tag)


class AddressContactTranslationOptions(TranslationOptions):
    fields = ('city', 'address')


translator.register(AddressContact, AddressContactTranslationOptions)


class ProjectTranslationOptions(TranslationOptions):
    fields = ('name', 'description', 'customer',)


translator.register(Project, ProjectTranslationOptions)


class EmployeeTranslationOptions(TranslationOptions):
    fields = ('first_name', 'last_name', 'position',)


translator.register(Employee, EmployeeTranslationOptions)


class SummaryDataTranslationOptions(TranslationOptions):
    fields = ('data_description', )


translator.register(SummaryNumericData, SummaryDataTranslationOptions)


class OurValuesTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


translator.register(OurValues, OurValuesTranslationOptions)


class BigTextualContentTranslationOptions(TranslationOptions):
    fields = ('pre_title', 'title', 'description',)


translator.register(BigTextualContent, BigTextualContentTranslationOptions)


class TagTranslationOptions(TranslationOptions):
    fields = ('title', 'description',)


translator.register(Tag, TagTranslationOptions)
