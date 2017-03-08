FROM ubuntu:trusty
MAINTAINER Julian Reyes <julian.reyes.romero@gmail.com>

ENV JHIPSTER_SLEEP 0
ENV WAR_FILE_VERSION 0.0.1
ENV WAR_FILE_NAME micro-service-gateway-student-${WAR_FILE_VERSION}-SNAPSHOT.war

ENV JAVA_VERSION 8
ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

ENV MAVEN_VERSION 3.3.9
ENV MAVEN_HOME /usr/share/maven

ENV PATH "$PATH:$MAVEN_HOME/bin"

# install utilities
RUN apt-get update

RUN apt-get upgrade

RUN apt-get -y install git sudo curl

# install maven
RUN curl -fsSL http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz | tar xzf - -C /usr/share \
    && mv /usr/share/apache-maven-$MAVEN_VERSION /usr/share/maven \
    && ln -s /usr/share/maven/bin/mvn /usr/bin/mvn

# install java8
RUN echo 'deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main' >> /etc/apt/sources.list && \
    echo 'deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main' >> /etc/apt/sources.list && \
    apt-key adv --keyserver keyserver.ubuntu.com --recv-keys C2518248EEA14886 && \
    apt-get update && \
    echo oracle-java${JAVA_VERSION}-installer shared/accepted-oracle-license-v1-1 select true | sudo /usr/bin/debconf-set-selections && \
    apt-get install -y --force-yes --no-install-recommends oracle-java${JAVA_VERSION}-installer oracle-java${JAVA_VERSION}-set-default

# clone repository

ADD . /usr/local/student-gateway

RUN cd /usr/local/student-gateway

# compile and generated docker
RUN sudo mvn -f /usr/local/student-gateway/pom.xml clean package -DskipTests

# add directly the war
#ADD ./target/*.war /usr/local/student-gateway/target/app.war

RUN sh -c 'touch /usr/local/student-gateway/target/app.war'
VOLUME /tmp
EXPOSE 8080 5701/udp
CMD echo "The application will start in ${JHIPSTER_SLEEP}s..." && \
    echo " WAR_FILE_NAME: ${WAR_FILE_NAME} " && \
    sleep ${JHIPSTER_SLEEP} && \
    java -Djava.security.egd=file:/dev/./urandom -jar /usr/local/student-gateway/target/${WAR_FILE_NAME}
