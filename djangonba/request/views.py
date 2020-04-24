from django.shortcuts import render
import requests
from django.http import JsonResponse, HttpResponse
# Create your views here.


def boxscore(request, gameDate, gameID):
    url = 'https://data.nba.net/prod/v1/{}/{}_boxscore.json'.format(
        gameDate, gameID)
    response = requests.get(url)
    nbadata = response.json()
    return JsonResponse(nbadata)


def games(request, gameDate):
    url = 'https://data.nba.net/prod/v2/{}/scoreboard.json'.format(
        gameDate)
    response = requests.get(url)
    nbadata = response.json()
    return JsonResponse(nbadata)