FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
    curl \
    openssh-server \
    ca-certificates \
    postfix

RUN curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | bash

ENV EXTERNAL_URL="localhost" 

RUN apt-get update && apt-get install -y \
    gitlab-ee

EXPOSE 443 80 22

#docker build -t rizkyario/42-docker-1-ex03 .
#docker run -it --rm -p 80:80 -p 21:22 rizkyario/42-docker-1-ex03