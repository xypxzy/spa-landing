# Generated by Django 4.2.4 on 2023-09-05 17:38

import content.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='tag',
            options={'verbose_name': 'Тезис', 'verbose_name_plural': 'Тезисы'},
        ),
        migrations.AddField(
            model_name='usersubscription',
            name='phone',
            field=models.CharField(blank=True, max_length=20, verbose_name='Номер телефона'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='description',
            field=models.TextField(blank=True, verbose_name='Описание тезиса'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='description_en',
            field=models.TextField(blank=True, null=True, verbose_name='Описание тезиса'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='description_ky',
            field=models.TextField(blank=True, null=True, verbose_name='Описание тезиса'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='description_ru',
            field=models.TextField(blank=True, null=True, verbose_name='Описание тезиса'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='image',
            field=models.ImageField(upload_to=content.models.textual_tags, verbose_name='Иконка тезиса'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='title',
            field=models.CharField(max_length=100, verbose_name='Тезис'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='title_en',
            field=models.CharField(max_length=100, null=True, verbose_name='Тезис'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='title_ky',
            field=models.CharField(max_length=100, null=True, verbose_name='Тезис'),
        ),
        migrations.AlterField(
            model_name='tag',
            name='title_ru',
            field=models.CharField(max_length=100, null=True, verbose_name='Тезис'),
        ),
        migrations.AlterField(
            model_name='usersubscription',
            name='email',
            field=models.EmailField(blank=True, max_length=254, verbose_name='email'),
        ),
        migrations.AlterField(
            model_name='usersubscription',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Имя'),
        ),
    ]
