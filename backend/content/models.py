from django.db import models


def address_images(instance, filename):
    return f'adresses/{filename}'


class AddressContact(models.Model):
    city = models.CharField(max_length=255, verbose_name='Город')
    address = models.CharField(max_length=255, verbose_name='Адрес')
    image = models.ImageField(blank=True, null=True, upload_to=address_images, verbose_name='Картинка')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Адрес'
        verbose_name_plural = 'Адреса'

    def __str__(self):
        return f'{self.address}'


class PhoneContact(models.Model):
    address = models.ForeignKey(AddressContact, on_delete=models.SET_NULL, null=True)
    phone = models.CharField(max_length=20, verbose_name='Номер телефона')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Телефон'
        verbose_name_plural = 'Телефоны'

    def __str__(self):
        return f'{self.phone}'


class EmailContact(models.Model):
    address = models.ForeignKey(AddressContact, on_delete=models.SET_NULL, null=True)
    email = models.EmailField()
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Email контакт'
        verbose_name_plural = 'Email контакты'

    def __str__(self):
        return f'{self.email}'

def project_images(instance, filename):
    return f'projects/{filename}'


class Project(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    description = models.TextField(blank=True, verbose_name='Описание')
    customer = models.CharField(max_length=255, blank=True, verbose_name='Заказчик')
    image = image = models.ImageField(blank=True, null=True, upload_to=project_images, verbose_name='Картинка')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return f'{self.name} | {self.customer}'


def employee_images(instance, filename):
    return f'employees/{filename}'


class Employee(models.Model):
    first_name = models.CharField(max_length=255, verbose_name='Имя')
    last_name = models.CharField(max_length=255, verbose_name='Фамилия')
    position = models.CharField(max_length=255, verbose_name='Должность')
    
    image = models.ImageField(blank=True, null=True, upload_to=employee_images, verbose_name='Фото')
    facebook = models.CharField(max_length=255, blank=True, null=True)
    whatsapp = models.CharField(max_length=255, blank=True, null=True)
    instagram = models.CharField(max_length=255, blank=True, null=True)

    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')
    is_active = models.BooleanField(default=True, verbose_name='Действующий сотрудник')

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'

    def __str__(self):
        return f'{self.first_name} {self.last_name} | {self.position}'


class SummaryNumericData(models.Model):
    """
    Class keeps the data from a panel with summary data, such as:
    the total amount of clients, projects, team members, revenue generated etc.

    is_visible attribute allows the data to be displayed
    data_description is the small text near the numbers explaining what the numbers are for
    
    """
    
    COLORS = (
        ('38E55E', 'Зеленый'),
        ('FFDC60', 'Желтый'),
        ('5956E8', 'Синий'),
        ('F96A4B', 'Оранжевый'),
        ('F5B7FF', 'Розовый'),
        ('CA87FF', 'Фиолетовый'),
    )
    
    data_description = models.CharField(max_length=255, verbose_name='Описание данных')
    color = models.SlugField(verbose_name='Цвет', choices= COLORS, default='38E55E')
    number = models.IntegerField(default=0, verbose_name='Число')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')
    
    class Meta:
        verbose_name = 'Суммарные данные'
        verbose_name_plural = 'Суммарные данные'

    def __str__(self):
        return self.data_description


def values_photos(instance, filename):
    return f'values/{filename}'


class OurValues(models.Model):
    """
    Class that adds the model and makes 'Our values' part of the page customizable.
    """
    image = models.ImageField(upload_to=values_photos, verbose_name='Картинка')
    name = models.CharField(max_length=255, verbose_name='Ценность')
    description = models.TextField(blank=True, default='No description provided', verbose_name='Описание')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Ценность'
        verbose_name_plural = 'Ценности'

    def __str__(self):
        return self.name


def textual_content(instance, filename):
    return f'textual_content/{filename}'

def textual_pre_title(instance, filename):
    return f'textual_content/pre_title/{filename}'

def textual_tags(instance, filename):
    return f'textual_content/tags/{filename}'


class BigTextualContent(models.Model):
    """
    This class will have big content with some text in it.
    tags are short text that describes the characteristics
    """
    pre_title = models.CharField(max_length=100, verbose_name='Надзаголовок')
    pre_title_image = models.ImageField(upload_to=textual_pre_title, verbose_name='Картинка надзаголовка')
    
    title = models.CharField(max_length=255, default="No title provided", verbose_name='Заголовок')
    description = models.TextField(blank=True, verbose_name='Описание')
    image = models.ImageField(upload_to=textual_content, verbose_name='Общая картинка')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')
    
    class Meta:
        verbose_name = 'Текстовый контент'
        verbose_name_plural = 'Текстовый контент'

    def __str__(self):
        return self.title


class Tag(models.Model):
    """
    This class represents tags used in BigTextualContent model.
    """
    title = models.CharField(max_length=100, verbose_name='Тег')
    description = models.TextField(blank=True, verbose_name='Описание тега')
    image = models.ImageField(upload_to=textual_tags, verbose_name='Иконка тега')
    related_content = models.ForeignKey(to=BigTextualContent, verbose_name='Текстовый объект', on_delete=models.CASCADE, related_name='tags')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')
    
    class Meta:
        verbose_name = 'Тег'
        verbose_name_plural = 'Теги'

    def __str__(self):
        return f'{self.related_content} | {self.title}'


class UserSubscription(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

    class Meta:
        verbose_name = 'Подписка'
        verbose_name_plural = 'Подписки'

    def __str__(self):
        return self.email
