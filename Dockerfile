######### Build #########
FROM node:18-alpine as build
WORKDIR /home/tg-notifier-service/
COPY . .
RUN yarn install --silent && yarn build

######### Production #########
FROM node:18-alpine
COPY --from=build /home/tg-notifier-service/package.json package.json
COPY --from=build /home/tg-notifier-service/dist ./dist
COPY --from=build /home/tg-notifier-service/node_modules node_modules
EXPOSE 3000
CMD ["node", "dist/main.js"]
