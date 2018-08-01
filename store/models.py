from django.db import models
from django.contrib.auth.models import User
from django.contrib.sessions.models import Session


class Product(models.Model):
    """Модель товара."""
    name = models.CharField("Название", max_length=100)
    price = models.DecimalField("Цена", max_digits=10, decimal_places=2, default=0)
    description = models.TextField('Описание товара', max_length=500)

    # class Meta:
        # verbose_name = 'Товар'
        # verbose_name_plural = 'Товары'

    # def __str__(self):
        # return self.name


class Basket(models.Model):
    user = models.ForeignKey(Session, verbose_name='Создатель', on_delete=models.CASCADE)
    basket = models.ManyToManyField(Product, verbose_name='Корзина', related_name='basket')
    activate = models.BooleanField(default=False)
