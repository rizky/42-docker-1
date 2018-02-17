FROM debian:jessie

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils git iptables cron rsyslog wget ca-certificates openssh-server

RUN apt-get update && apt-get install -y zsh 
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true 

RUN apt-get update && apt-get install -y mailutils emacs

# Install Postfix.
RUN echo "postfix postfix/main_mailer_type string Local only" > preseed.txt
RUN echo "postfix postfix/mailname string example.org" >> preseed.txt
# Use Mailbox format.
RUN debconf-set-selections preseed.txt
RUN DEBIAN_FRONTEND=noninteractive apt-get install -q -y postfix

RUN echo "root: root" >> /etc/aliases
RUN service postfix start
RUN service ssh start

COPY . /root/init/
WORKDIR /root/init/

RUN service rsyslog start

CMD ["zsh"]