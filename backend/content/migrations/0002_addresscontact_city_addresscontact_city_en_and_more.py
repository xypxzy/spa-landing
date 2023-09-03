# Generated by Django 4.2.4 on 2023-09-03 16:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='addresscontact',
            name='city',
            field=models.CharField(default='г. Бишкек', max_length=255, verbose_name='Город'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='addresscontact',
            name='city_en',
            field=models.CharField(max_length=255, null=True, verbose_name='Город'),
        ),
        migrations.AddField(
            model_name='addresscontact',
            name='city_ky',
            field=models.CharField(max_length=255, null=True, verbose_name='Город'),
        ),
        migrations.AddField(
            model_name='addresscontact',
            name='city_ru',
            field=models.CharField(max_length=255, null=True, verbose_name='Город'),
        ),
        migrations.AddField(
            model_name='emailcontact',
            name='address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='content.addresscontact'),
        ),
        migrations.AddField(
            model_name='phonecontact',
            name='address',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='content.addresscontact'),
        ),
    ]