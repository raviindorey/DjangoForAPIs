"""blog_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from drf_yasg2 import openapi
from drf_yasg2.views import get_schema_view
from rest_framework.documentation import include_docs_urls

API_TITLE = 'Blog API'
API_DESCRIPTION = 'A Web API for creating and editing blog posts.'

schema_view = get_schema_view(openapi.Info(
    default_version='v1',
    title=API_TITLE,
    description=API_DESCRIPTION,
))

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('posts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/v1/rest-auth/', include('dj_rest_auth.urls')),
    path('api/v1/rest-auth/registration/',
         include('dj_rest_auth.registration.urls')),
    path('docs/', include_docs_urls(
        title=API_TITLE,
        description=API_DESCRIPTION
    )),
    path('swagger-docs/', schema_view.with_ui('swagger')),
    path('redoc/', schema_view.with_ui('redoc')),
]
