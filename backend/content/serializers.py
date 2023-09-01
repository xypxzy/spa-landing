from rest_framework import serializers
from .models import Project, Employee, EmailContact, PhoneContact, AddressContact


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'customer',)


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id', 'first_name', 'last_name', 'position',)


class EmailContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailContact
        fields = ('id', 'email',)


class PhoneContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneContact
        fields = ('id', 'phone',)


class AddressContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddressContact
        fields = ('id', 'address',)
