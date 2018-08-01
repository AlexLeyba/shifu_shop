from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from store.models import Product, Basket
from store.serializers import ProductSerializer, BasketSerializer

from django.contrib.sessions.models import Session


class ProductView(APIView):
    """Список товаров"""
    permission_classes = [permissions.AllowAny, ]

    def get(self, request):
        if "buyer" not in request.session:
            request.session["buyer"] = True
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response({"data": serializer.data})


class BasketView(APIView):
    """Добавление в корзину"""
    permission_classes = [permissions.AllowAny, ]

    def get(self, request):
        if "buyer" not in request.session:
            request.session["buyer"] = True
            gg = {"data": "no items"}
            return Responce (gg)
        else:
            try:
                basket = Basket.objects.filter(user=Session.objects.get(session_key=request.session.session_key))
                serializer = BasketSerializer(basket, many=True)
                return Response(serializer.data)
            except:
                gg = {"data": "no items"}
                return Responce(gg)

            
    def post(self, request):
        if "buyer" not in request.session:
            request.session["buyer"] = True        
        product = int(request.data.get("product"))
        prod = Product.objects.get(id=product)
        try:
            bask = Basket.objects.get(user=Session.objects.get(session_key=request.session.session_key))
        except:
            bask = Basket.objects.create(user=Session.objects.get(session_key=request.session.session_key))
        bask.basket.add(prod)
        bask.save()
        return Response("Good")

