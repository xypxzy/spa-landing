from django.db import models


class AddressContact(models.Model):
    flag = models.ImageField()
    address = models.CharField(max_length=255, verbose_name='Адрес')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Адрес'
        verbose_name_plural = 'Адреса'

    def __str__(self):
        return f'{self.address}'


class PhoneContact(models.Model):
    phone = models.CharField(max_length=20, verbose_name='Номер телефона')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Телефон'
        verbose_name_plural = 'Телефоны'

    def __str__(self):
        return f'{self.phone}'


class EmailContact(models.Model):
    email = models.EmailField()
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Email контакт'
        verbose_name_plural = 'Email контакты'

    def __str__(self):
        return f'{self.email}'


class Project(models.Model):
    name = models.CharField(max_length=255, verbose_name='Название')
    description = models.TextField(blank=True, verbose_name='Описание')
    customer = models.CharField(max_length=255, blank=True, verbose_name='Заказчик')
    is_visible = models.BooleanField(default=False, verbose_name='Виден на сайте')

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return f'{self.name} | {self.customer}'


class Employee(models.Model):
    first_name = models.CharField(max_length=255, verbose_name='Имя')
    last_name = models.CharField(max_length=255, verbose_name='Фамилия')
    position = models.CharField(max_length=255, verbose_name='Должность')
    
    image = models.ImageField(blank=True, null=True, default='/default_employee.jpg', upload_to='employee_images', verbose_name='Фото')
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

    is_active attribute allows the data to be displayed
    data_description is the small text near the numbers explaining what the numbers are for
    """
    is_visible = models.BooleanField(default=True, verbose_name='Виден на сайте')
    data_description = models.CharField(max_length=255, verbose_name='Описание данных')
    number = models.IntegerField(default=0, verbose_name='Число')

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

    class Meta:
        verbose_name = 'Ценность'
        verbose_name_plural = 'Ценности'

    def __str__(self):
        return self.name


def textual_content(instance, filename):
    return f'textual_content/{filename}'


class BigTextualContent(models.Model):
    """
    This class will have big content with some text in it.
    tags are short text that describes the characteristics
    """
    image = models.ImageField(upload_to=textual_content)
    title = models.CharField(max_length=255, default="No title provided", blank=True)
    description = models.TextField()
    tags = models.CharField(max_length=100, )

    class Meta:
        verbose_name = 'Текстовый контент'
        verbose_name_plural = 'Текстовый контент'

    def __str__(self):
        return self.title


class UserSubscription(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()

    def __str__(self):
        return self.email
