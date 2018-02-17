FROM ruby:2.2.2

# see update.sh for why all "apt-get install"s have to stay as one long line
RUN apt-get update && apt-get install -y nodejs --no-install-recommends && rm -rf /var/lib/apt/lists/*

# see http://guides.rubyonrails.org/command_line.html#rails-dbconsole
RUN apt-get update && apt-get install -y mysql-client postgresql-client sqlite3 --no-install-recommends && rm -rf /var/lib/apt/lists/*

ENV RAILS_VERSION 5.0.1
ENV RAILS_ENV=development

RUN gem install rails --version 4.2.4

COPY kanban-develop /opt/app
WORKDIR /opt/app

RUN bundle install

ENV RACK_ENV=development
RUN rake db:migrate

RUN rake db:seed
#docker build -t ft-rails:on-build .
#docker run -it --rm ft-rails:on-build