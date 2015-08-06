#/bin/bash

###############################################################################
# Linux Packages
###############################################################################
sudo apt-get update
sudo apt-get -y install build-essential vim curl git tmux phantomjs

###############################################################################
# Front End stuff
###############################################################################
sudo chmod 777 ~/.profile
sudo curl https://raw.githubusercontent.com/creationix/nvm/v0.7.0/install.sh | sh
source ~/.profile
nvm install 0.11.13
nvm use 0.11
sudo apt-get -y install npm
npm config set registry http://registry.npmjs.org/
npm install -g yo
npm install -g grunt
npm install -g grunt-cli
npm install -g bower


# Help grunt serve work
sudo gem install sass
sudo gem install compass

echo 'nvm use 0.11' >> ~/.profile