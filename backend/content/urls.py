from django.urls import path, include

from .views import (ProjectListAPIView, EmployeeListAPIView, EmailContactListAPIView,
                    PhoneContactListAPIView, AddressContactListAPIView, ContactsListAPIView)

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view()),
    path('employees/', EmployeeListAPIView.as_view()),
    path('emails/', EmailContactListAPIView.as_view()),
    path('phones/', PhoneContactListAPIView.as_view()),
    path('addresses/', AddressContactListAPIView.as_view()),
    path('contacts/', ContactsListAPIView.as_view(), name='contacts'),
]
