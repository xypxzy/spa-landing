#!/bin/sh

sleep 10
python manage.py flush --no-input
python manage.py migrate
python manage.py create_default_admin
python manage.py loaddata content/fixtures/contacts.json
python manage.py loaddata content/fixtures/employees.json
python manage.py loaddata content/fixtures/projects.json

exec "$@"
