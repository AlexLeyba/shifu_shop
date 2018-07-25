from django.urls import path
from store import views

urlpatterns = [
    path('product-list/', views.ProductView.as_view()),
    path('basket/', views.BasketView.as_view()),
]