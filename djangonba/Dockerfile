# image
FROM python:3.7

# env variable
# we do this because it
# doesn't allow python to buffer output
# just prints it directly
ENV PYTHONUNBUFFERED 1

# create empty folder
RUN mkdir /app 

# switch to default directory
WORKDIR /app/backend

COPY ./requirements.txt /app/backend
RUN pip install -r requirements.txt


# copy from local to folder we created
COPY . /app/backend

# EXPOSE 8000
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]