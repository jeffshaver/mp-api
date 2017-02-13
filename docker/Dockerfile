FROM mhart/alpine-node:7.5

MAINTAINER jeff_e_shaver

# install curl and git
RUN apk add --no-cache git \
  && git clone https://github.com/jeffshaver/mp-api -b master --single-branch \
  && apk del git

ENV NODE_ENV production

RUN mkdir -p /opt/app
WORKDIR /opt/app

RUN cp /mp-api/package.json /opt/app/package.json

ARG PORT=4000
ENV PORT ${PORT}

RUN npm install \
  && cp -R /mp-api/. /opt/app/ \
  && rm -rf \
    /mp-api \
    /opt/app/yarn.lock \
    /root/.npm \
    /tmp/npm*

EXPOSE ${PORT}
CMD ["node", "index.js"]
