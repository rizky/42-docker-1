FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
    curl \
    openssh-server \
    ca-certificates \
    postfix

RUN curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | bash

ENV EXTERNAL_URL="http://gitlab.example.com" 

RUN apt-get update && apt-get install -y \
    gitlab-ee

EXPOSE 443 80 22
