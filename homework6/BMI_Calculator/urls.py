from django.urls import path

from . import views
from .views import result

urlpatterns = [
    path("",views.Home,name="home"),
    path("result",views.result,name='result')
]