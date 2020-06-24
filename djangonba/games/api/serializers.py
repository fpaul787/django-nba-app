from rest_framework import serializers
from rest_framework import status

from games.models import Game

# Serializer class which gives you a powerful,
# generic way to control the output of your responses

# This is a ModelSerializer
# Our code is more simple this way


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'gamedate', 'gameid')

    def create(self, validated_data):
        # print(validated_data)
        if Game.objects.filter(user=validated_data['user'], gameid=validated_data['gameid']).exists():
            res = {'code': '400', 'message': 'Game is already in dashboard'}
            raise serializers.ValidationError(res)

        return super().create(validated_data)


