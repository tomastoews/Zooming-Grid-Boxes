FROM nginx:alpine

RUN mkdir usr/share/nginx/html/zoomingboxes
COPY /dist/ usr/share/nginx/html/zoomingboxes

EXPOSE 80