From microsoft/dotnet:latest

# get add-apt-repository
Run apt-get update
Run apt-get -y --no-install-recommends install software-properties-common curl apt-transport-https

# vscode dependencies
Run apt-get -y --no-install-recommends install libc6-dev libgtk2.0-0 libgtk-3-0 libpango-1.0-0 libcairo2 libfontconfig1 libgconf2-4 libnss3 libasound2 libxtst6 unzip libglib2.0-bin libcanberra-gtk-module libgl1-mesa-glx curl build-essential gettext libstdc++6 software-properties-common wget git xterm automake libtool autogen nodejs libnotify-bin aspell aspell-en htop git emacs mono-complete gvfs-bin libxss1 rxvt-unicode-256color x11-xserver-utils sudo vim libxkbfile1

# install vscode
Run wget -O vscode-amd64.deb  https://go.microsoft.com/fwlink/?LinkID=760868
Run dpkg -i vscode-amd64.deb
Run rm vscode-amd64.deb


# docker run -d \  -d \  -v /tmp/.X11-unix:/tmp/.X11-unix:rw \
#   -v ${PWD}:/developer/project \
#   -e DISPLAY=unix${DISPLAY} \
#   -p 5000:5000 \
#   --device /dev/snd \
#   --name myproject-vscode \
#   cmiles74/docker-vscode