FROM node:carbon-alpine


RUN apk update \
  && apk add --update alpine-sdk python git \
  && npm config set unsafe-perm=true \
  && npm config set cache /tmp/.npm-cache \
  && npm install -g @angular/cli \
  && apk del alpine-sdk python \
  && rm -rf /tmp/* /var/cache/apk/* *.tar.gz ~/.npm \
  && npm cache clean --force \
  && yarn cache clean \
  && sed -i -e "s/bin\/ash/bin\/sh/" /etc/passwd