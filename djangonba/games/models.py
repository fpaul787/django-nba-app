from django.db import models
from django.contrib.auth.models import User

class Game(models.Model):
    #owner of specific game post
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    gameDate = models.CharField(max_length=120) ## Ex. 20200301
    gameID = models.CharField(max_length=120) # Ex . 424252392

    def __str__(self):
        return self.gameDate
