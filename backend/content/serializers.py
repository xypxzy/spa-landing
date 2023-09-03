from rest_framework import serializers
from .models import Project, Employee, EmailContact, PhoneContact, \
    AddressContact, UserSubscription, \
    BigTextualContent, SummaryNumericData, OurValues


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'customer',)


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id', 'first_name', 'last_name', 'position', 'image',
                  'facebook', 'whatsapp', 'instagram',)


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


class UserSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSubscription
        fields = ('id', 'name', 'email')


class OurValuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurValues
        fields = ('id', 'name', 'description', 'image',)


class BigTextualContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BigTextualContent
        fields = ('id', 'title', 'description', 'tags', 'image',)


class SummaryNumericDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SummaryNumericData
        fields = ('id', 'data_description', 'number',)
