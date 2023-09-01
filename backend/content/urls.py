from django.urls import path

from . import views


urlpatterns = [
    path('<slug:slug>', views.MainPageAPIView.as_view(), name='main_page'),
]
