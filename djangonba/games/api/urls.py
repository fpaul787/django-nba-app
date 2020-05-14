from django.urls import path
from .views import GamesListView, GameDetailView, GameCreateView, GameDeleteView

urlpatterns = [
    path('', GamesListView.as_view()),
    path('<pk>', GameDetailView.as_view()),
    path('create/', GameCreateView.as_view()),
    path('<pk>/delete/', GameDeleteView.as_view())

]


