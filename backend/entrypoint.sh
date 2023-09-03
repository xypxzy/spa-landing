#!/bin/sh

sleep 10
python manage.py flush --no-input
python manage.py migrate
python manage.py create_default_admin

python manage.py loaddata content/fixtures/address_contacts.json
python manage.py loaddata content/fixtures/email_contacts.json
python manage.py loaddata content/fixtures/phone_contacts.json
python manage.py loaddata content/fixtures/employees.json
python manage.py loaddata content/fixtures/projects.json
python manage.py loaddata content/fixtures/our_values.json
python manage.py loaddata content/fixtures/summary_data.json
python manage.py loaddata content/fixtures/big_textual_content.json

exec "$@"
