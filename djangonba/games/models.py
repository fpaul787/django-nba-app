from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Game(models.Model):
    #last 5 characters of token
    token = models.CharField(max_length=5)
    gameDate = models.CharField(max_length=120)
    gameID = models.CharField(max_length=120)
    owner = models.ForeignKey(User, related_name="games", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.gameDate
