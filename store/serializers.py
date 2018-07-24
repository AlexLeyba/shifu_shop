from rest_framework import serializers
from store.models import Product


class ProductSerializer(serializers.ModelSerializer):
    """Сериализаияя товаров"""
    class Meta:
        model = Product
        fields = ("name", "price", "description")