from django.db import models
from django.contrib.auth.models import User


class Game(models.Model):
    """Game model"""

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    gamedate = models.CharField(max_length=120, verbose_name="Game-Date")  # Ex. 20200301
    gameid = models.CharField(max_length=120, verbose_name="Game-Id")  # Ex . 424252392

    def __str__(self):
        return self.gamedate
