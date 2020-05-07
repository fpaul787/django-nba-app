from rest_framework.generics import ListAPIView, RetrieveAPIView

from games.models import Game
from .serializers import GameSerializer

# Used for read-only endpoints to represent a collection of model instances.
# Provides a get method handler.


class GamesListView(ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

# Used for read or update endpoints to represent a single model instance.
# Provides get, put and patch method handlers.


class GameDetailView(RetrieveAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
