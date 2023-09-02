from django.db import models


class AddressContact(models.Model):
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
