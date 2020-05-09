from rest_framework.viewsets import ModelViewSet
from games.models import Game
from .serializers import GameSerializer
from django.db.models import Q



# cleaner way
# Only because we're specifing all
# the viewsets
# class GameViewSet(ModelViewSet):
#     serializer_class = GameSerializer
#     queryset = Game.objects.all()

from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

# Used for read-only endpoints to represent a collection of model instances.
# Provides a get method handler.

class GamesListView(ListAPIView):
    serializer_class = GameSerializer

    def get_queryset(self):
        queryset = Game.objects.all()
        query = self.request.GET.get("q")
        if query:
            queryset = queryset.filter(Q(token__icontains=query)).distinct()
        return queryset

        

   
    

# # Used for read or update endpoints to represent a single model instance.
# # Provides get, put and patch method handlers.

# # might not need for my app


class GameDetailView(RetrieveAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

# # for put


class GameCreateView(CreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

# # Update API View
# class GameUpdateView(UpdateAPIView):
#     queryset = Game.objects.all()
#     serializer_class = GameSerializer

# Delete API View
class GameDeleteView(DestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer



