FROM python:3.10.6-alpine3.16

ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip

WORKDIR /backend
COPY ./requirements.txt ./

RUN python3 -m pip install --upgrade --no-cache-dir setuptools==58.0
RUN pip install -r requirements.txt
COPY . .

ENTRYPOINT ["./entrypoint.sh"]
