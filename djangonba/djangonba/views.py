from django.http import HttpResponse
import datetime

def current_datetime(request):
    now = datetime.datetime.now()
    html = "<html><h1>Django NBA API View</h1><body>It is now %s.</body></html>" % now
    return HttpResponse(html)