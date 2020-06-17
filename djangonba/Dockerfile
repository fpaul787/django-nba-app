# image
FROM python:3.7-alpine
LABEL maintainer="Frantz Paul"

# env variable
# we do this because it
# doesn't allow python to buffer output
# just prints it directly
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt


RUN apk add --update --no-cache postgresql-client
RUN apk add --update --no-cache --virtual .tmp-build-deps \
    gcc libc-dev linux-headers postgresql-dev
RUN pip install -r requirements.txt

RUN apk del .tmp-build-deps

# create empty folder
RUN mkdir /djangonba

# switch to default directory
WORKDIR /djangonba

# copy from local to folder we created
COPY ./djangonba /djangonba

# -D for user for running appliction only
# for security reasons. Root user is not going
# to be used.
RUN adduser -D user
USER user

# EXPOSE 8000
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]