FROM ruby:2.2.2

# see http://guides.rubyonrails.org/command_line.html#rails-dbconsole
RUN apt-get update && apt-get install -y mysql-client sqlite3 --no-install-recommends
RUN gem install rails --version 4.2.4

ENV RAILS_VERSION 5.0.1
ENV RAILS_ENV=development

RUN mkdir -p /opt/app
WORKDIR /opt/app

ONBUILD ADD app /opt/app

ONBUILD RUN bundle install
ONBUILD RUN rake db:setup
ONBUILD RUN rake db:seed
#docker build -t ft-rails:on-build .
#docker run -it --rm ft-rails:on-build