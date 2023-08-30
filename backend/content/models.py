from django.db import models


class Contact(models.Model):

    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(blank=True, null=True)
    address_ru = models.CharField(blank=True, null=True)
    address_en = models.CharField(blank=True, null=True)
    address_kg = models.CharField(blank=True, null=True)


class Project(models.Model):

    name_ru = models.CharField()
    description_ru = models.CharField()
    customer_ru = models.CharField()

    name_en = models.CharField(blank=True, null=True)
    description_en = models.CharField(blank=True, null=True)
    customer_en = models.CharField(blank=True, null=True)

    name_kg = models.CharField(blank=True, null=True)
    description_kg = models.CharField(blank=True, null=True)
    customer_kg = models.CharField(blank=True, null=True)


class Employee(models.Model):

    first_name_ru = models.CharField()
    last_name_ru = models.CharField()
    position_ru = models.CharField()

    first_name_en = models.CharField(blank=True, null=True)
    last_name_en = models.CharField(blank=True, null=True)
    position_en = models.CharField(blank=True, null=True)

    first_name_en = models.CharField(blank=True, null=True)
    last_name_en = models.CharField(blank=True, null=True)
    position_en = models.CharField(blank=True, null=True)

    image = models.ImageField(blank=True, null=True)
