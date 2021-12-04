# syntax=docker/dockerfile:1

FROM amazonlinux:latest

WORKDIR /app

# install aws cli
RUN yum -y install curl unzip \
  && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
  && unzip awscliv2.zip \
  && ./aws/install

# install python + packages
RUN yum -y install python3
COPY python-requirements.txt python-requirements.txt
RUN pip3 install -r python-requirements.txt

# install spades
RUN yum -y install wget tar gzip \
  && wget http://cab.spbu.ru/files/release3.15.3/SPAdes-3.15.3-Linux.tar.gz \
  && tar -xzf SPAdes-3.15.3-Linux.tar.gz \
  && cp -R SPAdes-3.15.3-Linux/* . \
  && rm -rf SPAdes-3.15.3-Linux*

COPY . .

RUN ls -la \
  &&ls -la /

RUN python3 bin/metaspades.py

RUN aws

CMD [ "python3", "bin/metaspades.py" ]