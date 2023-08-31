from rest_framework.generics import ListAPIView

from content.models import Project, Employee, EmailContact, PhoneContact, AddressContact
from content.serializers import (ProjectSerializer, EmployeeSerializer, EmailContactSerializer,
PhoneContactSerializer, AddressContactSerializer)


class ProjectListAPIView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class EmployeeListAPIView(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class EmailContacttListAPIView(ListAPIView):
    queryset = EmailContact.objects.all()
    serializer_class = EmailContactSerializer


class PhoneContactListAPIView(ListAPIView):
    queryset = PhoneContact.objects.all()
    serializer_class = PhoneContactSerializer


class AddressContactListAPIView(ListAPIView):
    queryset = AddressContact.objects.all()
    serializer_class = AddressContactSerializer
