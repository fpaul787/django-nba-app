from django.db import models
from django.contrib.auth.models import User

class Game(models.Model):
    gameDate = models.CharField(max_length=120) ## Ex. 2020/03/01
    gameID = models.CharField(primary_key=True, max_length=120) # Ex . 424252392

    #owner of specific game post
    owner = models.ForeignKey(User, related_name="games", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.gameDate
