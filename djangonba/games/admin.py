from django.contrib import admin

# Register your models here.
from .models import Game

class GameAdmin(admin.ModelAdmin):
    list_display = ('user', 'gamedate',)
admin.site.register(Game, GameAdmin)
