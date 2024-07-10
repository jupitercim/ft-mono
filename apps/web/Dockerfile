FROM 565325940639.dkr.ecr.ap-northeast-1.amazonaws.com/dockerhub/node:18

WORKDIR /opt

ADD .  /opt

ARG BUILD_ENV

RUN npm i pnpm -g \
    && pnpm i \
    &&  pnpm build:{BUILD_ENV}


FROM gcr.io/google-containers/nginx:1.7.9

COPY --from=0 /opt/build /opt/dist

RUN ls

ADD default.conf  /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
