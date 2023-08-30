from .base import BASE_DIR, config

# DEBUG
DEBUG = True

ALLOWED_HOSTS = config('ALLOWED_HOSTS').split(',')

# Database
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
