from django.urls import path, include

from content.views import (ProjectListAPIView, EmployeeListAPIView, EmailContacttListAPIView,
PhoneContactListAPIView, AddressContactListAPIView)

urlpatterns = [
    path('projects/', ProjectListAPIView.as_view()),
    path('employees/', EmployeeListAPIView.as_view()),
    path('emails/', EmailContacttListAPIView.as_view()),
    path('phones/', PhoneContactListAPIView.as_view()),
    path('addresses/', AddressContactListAPIView.as_view()),
]
