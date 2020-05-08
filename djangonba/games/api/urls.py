from django.urls import path
from .views import GameViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', GameViewSet)
urlpatterns = router.urls

# urlpatterns = [
#     path('', GamesListView.as_view()),
#     path('create/', GameCreateView.as_view()),
#     path('<pk>', GameDetailView.as_view()),
#     path('<pk>/update/', GameUpdateView.as_view()),
#     path('<pk>/delete/', GameDeleteView.as_view())

# ]

#from .views import GameDetailView, GamesListView, GameCreateView, GameUpdateView, GameDeleteView
