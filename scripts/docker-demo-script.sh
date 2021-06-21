echo "updating existing packages"
sudo yum update -y

echo "install a couple tools that may be helpful for later"
sudo yum install wget -y
sudo yum install unzip -y
sudo yum install lsof -y

echo "installing java 8"
sudo yum install -y java-1.8.0-openjdk-devel
sudo update-alternatives --config java
sudo update-alternatives --config javac
echo "java 8 installed and configured"


echo "installing gradle"
sudo wget https://services.gradle.org/distributions/gradle-6.8.3-bin.zip -P /tmp
sudo mkdir /opt/gradle
sudo unzip -d /opt/gradle /tmp/gradle-*.zip
echo "time to create the gradle environment variable, BUT, you may have to input this manually, the script isn't triggering it"
export PATH=$PATH:/opt/gradle/gradle-6.8.3/bin
echo "gradle installed"

echo "installing docker"
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
echo "install the repository"
sudo yum install -y yum-utils
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
echo "install the engine"
sudo yum install docker-ce --nobest
echo "starting docker"
sudo systemctl start docker
echo "check to see if docker is running"
#sudo docker run hello-world
