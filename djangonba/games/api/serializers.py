from rest_framework import serializers

from games.models import Game

# This is a ModelSerializer
# Our code is more simple this way


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'gameDate', 'gameID')
