from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static


from members.views import ProductView
from rest_framework import routers


route = routers.DefaultRouter()
route.register("",ProductView, basename='ProductView')

urlpatterns = [
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)