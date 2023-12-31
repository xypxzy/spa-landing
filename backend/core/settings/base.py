import os
from pathlib import Path
from decouple import config
from django.utils.translation import gettext_lazy

from .cors import *

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# SECRET_KEY
SECRET_KEY = config('SECRET_KEY')

DEFAULT_ADMIN_NAME = config('DEFAULT_ADMIN_NAME')

DEFAULT_ADMIN_PASSWORD = config('DEFAULT_ADMIN_PASSWORD')

DEFAULT_ADMIN_EMAIL = config('DEFAULT_ADMIN_EMAIL')

ADMIN_URL = config('ADMIN_URL')

# DEBUG
DEBUG = config('DEBUG', default=False, cast=bool)

# defining the project state
PRODUCTION = config('PRODUCTION', default=False, cast=bool)

ALLOWED_HOSTS = config('ALLOWED_HOSTS').split(',')

CSRF_TRUSTED_ORIGINS = ['https://*.team2back.sanarip.org', 'https://*.127.0.0.1',
                        'https://*.localhost', 'http://localhost:8016']

# Application definition
THIRD_PARTY_APPS = [
    'rest_framework',
    'corsheaders',
    'django_cleanup',
    'drf_yasg',
    'django_admin_logs',
]

LOCAL_APPS = [
    'content.apps.ContentConfig',
]

INSTALLED_APPS = [
    'jazzmin',
    'modeltranslation',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    *THIRD_PARTY_APPS,
    *LOCAL_APPS,
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'



TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'ru-RU'
TIME_ZONE = "Asia/Bishkek"

USE_I18N = True

USE_L10N = True

USE_TZ = True

LANGUAGES = (
    ('ru', gettext_lazy('Russian')),
    ('en', gettext_lazy('English')),
    ('ky', gettext_lazy('Kyrgyz')),
)

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

if not PRODUCTION:
    from .local import *
else:
    from .production import *

FRONTEND_HOME = config('FRONTEND_HOME', default='')

# Admin site customization

DJANGO_ADMIN_LOGS_ENABLED = False

JAZZMIN_SETTINGS = {
    "site_title": "MyTicket Admin",

    "site_logo": 'img/mt_logo.png',

    "copyright": "Sanarip Dolboor",
    "topmenu_links": [

        {"name": "Главная", "url": "admin:index", "permissions": ["auth.view_user"]},

        {"name": "Открыть сайт", "url": FRONTEND_HOME},

        {"app": "content", "name": "Контент"},
    ],

    # Whether to display the side menu

    "show_sidebar": True,

    "navigation_expanded": True,

    "hide_apps": [],

    "hide_models": [],

    "order_with_respect_to": ["content.phonecontact", "content.emailcontact", "content.addresscontact",
                              "content.project", "content.employee", "content.bigtextualcontent",
                              "content.ourvalues", "content.SummaryNumericData", "content.usersubsriptions", ],

    "changeform_format_overrides": {"content.bigtextualcontent.thesis": "collapsible", },

    # "show_ui_builder": True,
}

from .production import DATABASES
