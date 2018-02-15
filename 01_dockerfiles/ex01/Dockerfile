FROM debian:jessie AS build

# install wget
RUN apt-get update \
  && apt-get install -y wget bzip2 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# setup teamspeak environment variables
ENV TS3_VERSION 3.0.13.4
ENV TS3_URL http://dl.4players.de/ts/releases/$TS3_VERSION/teamspeak3-server_linux_amd64-$TS3_VERSION.tar.bz2
ENV TS3_DIR /ts3server

# download and untar teamspeak
WORKDIR /ts3server
RUN wget $TS3_URL -O - | tar -xj --strip-components=1

# symlink persistent data to volumes
VOLUME ["/files", "/init"]
COPY ./init /init
RUN ln -s /files $TS3_DIR/files \
 && ln -s /init/ts3server.sqlitedb $TS3_DIR/ts3server.sqlitedb

# start teamspeak server
CMD ./ts3server_minimal_runscript.sh \
  logpath=/files/logs/ \
  licensepath=/init/ \
  query_ip_whitelist=/init/query_ip_whitelist.txt \
  query_ip_blacklist=/init/query_ip_blacklist.txt

#docker build -t rizkyario/42-docker-1-ex01 .
#docker run -it --rm rizkyario/42-docker-1-ex01