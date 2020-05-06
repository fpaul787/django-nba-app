from django.http import HttpResponse
from django.shortcuts import render
import datetime
from django.conf import settings
import os
# def current_datetime(request):
#     now = datetime.datetime.now()
#     html = "<html><h1>Django NBA API__ View</h1><body>It is now %s.</body></html>" % now
#     return HttpResponse(html)

def index(request):
    return render(request, 'index.html')