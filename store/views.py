from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from store.models import Product, Basket
from store.serializers import ProductSerializer, BasketSerializer


class ProductView(APIView):
    """Список товаров"""
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response({"data": serializer.data})


class BasketView(APIView):
    """Добавление в корзину"""
    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request):
        basket = Basket.objects.filter(user=request.user)
        serializer = BasketSerializer(basket, many=True)
        return Response({"data": serializer.data})

    def post(self, request):
        product = int(request.data.get("product"))
        prod = Product.objects.get(id=product)
        try:
            bask = Basket.objects.get(user=request.user)
        except:
            bask = Basket.objects.create(user=request.user)
        bask.basket.add(prod)
        bask.save()
        return Response("Good")

