from django.urls import path
from . import views

urlpatterns = [
   
    path('<gameDate>/<gameID>', views.boxscore),
    path('<gameDate>/', views.games)
]