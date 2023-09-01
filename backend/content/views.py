from rest_framework.generics import ListAPIView

from .models import Project, Employee, EmailContact, PhoneContact, AddressContact
from .serializers import (ProjectSerializer, EmployeeSerializer, EmailContactSerializer,
                          PhoneContactSerializer, AddressContactSerializer)


class ProjectListAPIView(ListAPIView):
    queryset = Project.objects.filter(is_visible=True)
    serializer_class = ProjectSerializer


class EmployeeListAPIView(ListAPIView):
    queryset = Employee.objects.filter(is_visible=True)
    serializer_class = EmployeeSerializer


class EmailContactListAPIView(ListAPIView):
    queryset = EmailContact.objects.filter(is_visible=True)
    serializer_class = EmailContactSerializer


class PhoneContactListAPIView(ListAPIView):
    queryset = PhoneContact.objects.filter(is_visible=True)
    serializer_class = PhoneContactSerializer


class AddressContactListAPIView(ListAPIView):
    queryset = AddressContact.objects.filter(is_visible=True)
    serializer_class = AddressContactSerializer
