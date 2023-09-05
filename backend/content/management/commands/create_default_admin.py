from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
from django.conf import settings

class Command(BaseCommand):
    def handle(self, *args, **options):
        user = get_user_model()
        if not user.objects.filter(username=settings.DEFAULT_ADMIN_NAME).first():
            get_user_model().objects.create_superuser(username=settings.DEFAULT_ADMIN_NAME,
                                                      password=settings.DEFAULT_ADMIN_PASSWORD,
                                                      email=settings.DEFAULT_ADMIN_EMAIL)
