from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics

from .models import Contact, Project
from .serializers import ContactSerializer, ProjectSerializer


class MainPageAPIView(generics.GenericAPIView):
    def get(self, request, **kwargs):
        slug = self.kwargs['slug']

        contacts = Contact.objects.all()
        contacts_serializer = [ContactSerializer(contact).data for contact in contacts]

        projects = Project.objects.all()
        project_serializer = [ProjectSerializer(project).data for project in projects]

        return Response({
            'contacts': contacts_serializer,
            'projects': project_serializer,
        })
