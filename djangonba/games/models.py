from django.db import models

# Create your models here.


class Game(models.Model):
    #last 5 characters of token
    token = models.CharField(max_length=5)
    gameDate = models.CharField(max_length=120)
    gameID = models.CharField(max_length=120)
    

    def __str__(self):
        return self.gameDate
