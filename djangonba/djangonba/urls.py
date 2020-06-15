from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('games/', include('request.urls')),
    path('api/', include('games.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api-auth/', include('rest_framework.urls')),
]
