FROM ubuntu:16.04

RUN apt-get update -q \
    && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
      ca-certificates \
      openssh-server \
      curl \
      postfix

WORKDIR /
RUN curl -LO https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh

RUN bash script.deb.sh

RUN apt-get update && EXTERNAL_URL="http://gitlab.example.com" apt-get install -yq gitlab-ce

EXPOSE 80

RUN ufw allow http

CMD [ "gitlab-ctl", "reconfigure"]

#docker build -t rizkyario/42-docker-1-ex03 .
#docker run -it --rm -p 80:80 rizkyario/42-docker-1-ex03