from django.urls import path

from .views import GameDetailView, GamesListView


urlpatterns = [
    path('', GamesListView.as_view()),
    path('<pk>', GameDetailView.as_view())
]
