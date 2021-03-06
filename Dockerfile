##
## digiserve/ab-process-manager:master
##
## This is our microservice for our AppBuilder processes.
##
## Docker Commands:
## ---------------
## $ docker build -t digiserve/ab-process-manager:master .
## $ docker push digiserve/ab-process-manager:master
##

FROM digiserve/service-cli:master

RUN git clone --recursive https://github.com/appdevdesigns/ab_service_process_manager.git app && cd app && git submodule update --recursive && npm install

WORKDIR /app

CMD [ "node", "--inspect=0.0.0.0:9229", "app.js" ]
