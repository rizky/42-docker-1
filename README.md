export MACHINE_STORAGE_PATH=/tmp  
docker-machine create default  
eval $(docker-machine env default)  

docker-machine ip default
192.168.99.100

http://guides.rubyonrails.org/getting_started.html

https://github.com/amki/docker-teamspeak-client

/Users/rnugroho/Documents/Codes/42/docker-1/workspace/01_dockerfiles/ex03
https://gitlab.com/gitlab-org/omnibus-gitlab/issues/3133


docker run --rm \
    --hostname gitlab.example.com \
    --env GITLAB_OMNIBUS_CONFIG="external_url 'http://my.domain.com/'; gitlab_rails['lfs_enabled'] = true;" \
    --publish 443:443 --publish 80:80 \
    --name gitlab \
    gitlab/gitlab-ce:latest

https://www.packtpub.com/mapt/book/application_development/9781783986842/2/ch02lvl1sec20/adding-your-ssh-key-to-gitlab


allow X11 access
xhost +local:docker

docker run -d \
  --rm \
  -v /tmp/.X11-unix:/tmp/.X11-unix:rw \
  -v ${PWD}:/developer/project \
  -e DISPLAY=unix${DISPLAY} \
  -p 5000:5000 \
  --name myproject-vscode \
  cmiles74/docker-vscode