from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView

from games.models import Game

from .serializers import GameSerializer


# Used for read-only endpoints to represent a collection of model instances.
# Provides a get method handler.
class GamesListView(ListAPIView):
    permissions_classes = [
        permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = GameSerializer

    queryset = Game.objects.all()


# Used for read or update endpoints to represent a single model instance.
# Provides get, put and patch method handlers.
class GameDetailView(RetrieveAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


# for put
class GameCreateView(CreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# Delete API View
class GameDeleteView(DestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
