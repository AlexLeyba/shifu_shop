from rest_framework import serializers
from store.models import Product, Basket


class ProductSerializer(serializers.ModelSerializer):
    """Сериализация товаров"""
    class Meta:
        model = Product
        fields = ("id", "name", "price", "description")

class BasketSerializer(serializers.ModelSerializer):
    """Сериализация добавления товаров"""
    basket = ProductSerializer(many=True)
    class Meta:
        model = Basket
        fields = ('basket', )