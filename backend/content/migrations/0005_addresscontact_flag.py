# Generated by Django 4.2.4 on 2023-09-01 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0004_bigtextualcontent_ourvalues_summarynumericdata'),
    ]

    operations = [
        migrations.AddField(
            model_name='addresscontact',
            name='flag',
            field=models.ImageField(default=''),
            preserve_default=False,
        ),
    ]
