from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import (
    Project, Employee, EmailContact,
    PhoneContact, AddressContact, UserSubscription,
    BigTextualContent, OurValues, SummaryNumericData
)
from .serializers import (
    ProjectSerializer, EmployeeSerializer, EmailContactSerializer,
    PhoneContactSerializer, AddressContactSerializer, UserSubscriptionSerializer,
    OurValuesSerializer, BigTextualContentSerializer, SummaryNumericDataSerializer
)


class ProjectListAPIView(ListAPIView):
    queryset = Project.objects.filter(is_visible=True).order_by('id')
    serializer_class = ProjectSerializer


class EmployeeListAPIView(ListAPIView):
    queryset = Employee.objects.filter(is_visible=True).order_by('id')
    serializer_class = EmployeeSerializer


class EmailContactListAPIView(ListAPIView):
    queryset = EmailContact.objects.filter(is_visible=True).order_by('id')
    serializer_class = EmailContactSerializer


class PhoneContactListAPIView(ListAPIView):
    queryset = PhoneContact.objects.filter(is_visible=True).order_by('id')
    serializer_class = PhoneContactSerializer


class AddressContactListAPIView(ListAPIView):
    queryset = AddressContact.objects.filter(is_visible=True).order_by('id')
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


class UserSubscriptionCreateAPIView(CreateAPIView):
    queryset = UserSubscription.objects.all().order_by('id')
    serializer_class = UserSubscriptionSerializer


class OurValuesListAPIView(ListAPIView):
    queryset = OurValues.objects.filter(is_visible=True).order_by('id')
    serializer_class = OurValuesSerializer


class SummaryNumericDataListAPIView(ListAPIView):
    queryset = SummaryNumericData.objects.filter(is_visible=True).order_by('id')
    serializer_class = SummaryNumericDataSerializer


class BigTextualContentListAPIView(ListAPIView):
    queryset = BigTextualContent.objects.filter(is_visible=True).order_by('id')
    serializer_class = BigTextualContentSerializer
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context
    
    # def get(self, request):
    #     serializer = self.get_serializer_class()
    #     serializer_data = serializer(self.get_queryset(), many=True, context={"request": request})
        
    #     print(serializer_data.context)
    #     return Response(serializer_data.data)
    
    
