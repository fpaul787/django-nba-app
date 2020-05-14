from rest_framework import serializers
from games.models import Game

# Serializer class which gives you a powerful, 
# generic way to control the output of your responses

# This is a ModelSerializer
# Our code is more simple this way
class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'gameDate', 'gameID')
