FROM 565325940639.dkr.ecr.ap-northeast-1.amazonaws.com/dockerhub/node:18

WORKDIR /opt

ADD .  /opt

RUN npm i pnpm -g \
    && pnpm i \
    &&  pnpm build


FROM gcr.io/google-containers/nginx:1.7.9

ARG BUILD_ENV

COPY --from=0 /opt/build /opt/dist

RUN ls

ADD default.conf  /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
