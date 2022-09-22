from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('new/', views.CreateView.as_view(), name='new'),
    path('<slug:movie_slug>/', views.detail, name='detail'),
    path('<slug:slug>/edit/', views.UpdateView.as_view(), name='edit'),
    path('<slug:slug>/delete/', views.DeleteView.as_view(), name='delete'),
]