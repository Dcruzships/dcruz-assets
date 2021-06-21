echo "updating existing packages"
sudo yum update -y
sudo yum install wget -y
sudo yum install unzip -y


echo "installing node"
curl --silent --location https://rpm.nodesource.com/setup_12.x | sudo bash -
sudo yum -y install nodejs
echo "node installed"

