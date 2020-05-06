from django.db import models

# Create your models here.


class Game(models.Model):
    gameDate = models.CharField(max_length=120)
    gameID = models.CharField(max_length=120)

    def __str__(self):
        return self.gameDate
