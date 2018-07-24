from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from store.models import Product
from store.serializers import ProductSerializer


class ProductView(APIView):
    """Список товаров"""
    permission_classes = [permissions.AllowAny, ]

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response({"data": serializer.data})
