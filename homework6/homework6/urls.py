
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path("",include('BMI_Calculator.urls')),
    path("result",include('BMI_Calculator.urls'))
]
