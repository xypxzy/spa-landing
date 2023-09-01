from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

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


class ContactsListAPIView(APIView):
    """
    Creates a big JSON from three models: AddressContact, EmailContact, PhoneContact.
    """

    def get(self, request, *args, **kwargs):
        addresses = AddressContact.objects.filter(is_visible=True)
        addresses_serializer = [AddressContactSerializer(address).data for address in addresses]

        phones = PhoneContact.objects.filter(is_visible=True)
        phones_serializer = [PhoneContactSerializer(phone).data for phone in phones]

        emails = EmailContact.objects.filter(is_visible=True)
        emails_serializer = [EmailContactSerializer(email).data for email in emails]

        return Response({
            "addresses": addresses_serializer,
            "phones": phones_serializer,
            "emails": emails_serializer
        })
