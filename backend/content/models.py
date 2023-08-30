from django.db import models


class Contact(models.Model):

    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(blank=True, null=True, max_length=12)
    address_ru = models.CharField(blank=True, null=True, max_length=255)
    address_en = models.CharField(blank=True, null=True, max_length=255)
    address_kg = models.CharField(blank=True, null=True, max_length=255)


class Project(models.Model):

    name_ru = models.CharField(max_length=255)
    description_ru = models.TextField()
    customer_ru = models.CharField(max_length=255)

    name_en = models.CharField(blank=True, null=True, max_length=255)
    description_en = models.TextField(blank=True, null=True)
    customer_en = models.CharField(blank=True, null=True, max_length=255)

    name_kg = models.CharField(blank=True, null=True, max_length=255)
    description_kg = models.TextField(blank=True, null=True)
    customer_kg = models.CharField(blank=True, null=True, max_length=255)


class Employee(models.Model):

    first_name_ru = models.CharField(max_length=255)
    last_name_ru = models.CharField(max_length=255)
    position_ru = models.CharField(max_length=255)

    first_name_en = models.CharField(blank=True, null=True, max_length=255)
    last_name_en = models.CharField(blank=True, null=True, max_length=255)
    position_en = models.CharField(blank=True, null=True, max_length=255)

    first_name_kg = models.CharField(blank=True, null=True, max_length=255)
    last_name_kg = models.CharField(blank=True, null=True, max_length=255)
    position_kg = models.CharField(blank=True, null=True, max_length=255)

    image = models.ImageField(blank=True, null=True)
