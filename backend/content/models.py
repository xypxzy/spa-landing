from django.db import models


class AddressContact(models.Model):
    address = models.CharField(max_length=255)
    is_visible = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Адрес'
        verbose_name_plural = 'Адреса'

    def __str__(self):
        return f'{self.address}'


class PhoneContact(models.Model):
    phone = models.CharField(max_length=20)
    is_visible = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Телефон'
        verbose_name_plural = 'Телефоны'

    def __str__(self):
        return f'{self.phone}'


class EmailContact(models.Model):
    email = models.EmailField()
    is_visible = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Email контакт'
        verbose_name_plural = 'Email контакты'

    def __str__(self):
        return f'{self.email}'


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    customer = models.CharField(max_length=255, blank=True)
    is_visible = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'

    def __str__(self):
        return f'{self.name} | {self.customer}'


class Employee(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    image = models.ImageField(blank=True, null=True, default='/default_employee.jpg', upload_to='employee_images')
    facebook = models.CharField(max_length=255, blank=True, null=True)
    whatsapp = models.CharField(max_length=255, blank=True, null=True)
    instagram = models.CharField(max_length=255, blank=True, null=True)
    is_visible = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

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
    is_active = models.BooleanField(default=True)
    data_description = models.CharField(max_length=255)
    number = models.IntegerField()

    class Meta:
        verbose_name = 'Суммарные данные'
        verbose_name_plural = 'Суммарные данные'

    def __str__(self):
        return self.data_description
