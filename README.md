# Docker

Introduction to Docker

## Setup docker-machine:
export MACHINE_STORAGE_PATH=/tmp  
docker-machine create default  
eval $(docker-machine env default)  

## Setup docker-for-mac at 42:
cd ~ && rm -rf Library/com.docker.docker
mkdir /goinfre/docker
ln -s /goinfre/docker Library/com.docker.docker

## Resources:
- http://guides.rubyonrails.org/getting_started.html
- https://github.com/amki/docker-teamspeak-client
- https://gitlab.com/gitlab-org/omnibus-gitlab/issues/3133
- https://www.packtpub.com/mapt/book/application_development/9781783986842/2/ch02lvl1sec20/adding-your-ssh-key-to-gitlab
