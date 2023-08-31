from rest_framework import serializers
from content.models import Project, Employee, EmailContact, PhoneContact, AddressContact

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'description', 'customer',)


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('first_name', 'last_name', 'position',)


class EmailContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailContact
        fields = '__all__'


class PhoneContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneContact
        fields = '__all__'


class AddressContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddressContact
        fields = ('address',)
