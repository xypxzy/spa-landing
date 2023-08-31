from django.db import models


class AddressContact(models.Model):
    address = models.CharField(max_length=255)
    is_visible = models.BooleanField(default=False)


class PhoneContact(models.Model):
    phone = models.CharField(max_length=20)
    is_visible = models.BooleanField(default=False)


class EmailContact(models.Model):
    email = models.EmailField()
    is_visible = models.BooleanField(default=False)


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    customer = models.CharField(max_length=255, blank=True)
    is_visible = models.BooleanField(default=False)


class Employee(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    image = models.ImageField(blank=True, null=True, default='/default_employee.jpg')
    is_visible = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
