# Notlify - Telegram notifier service for sending website contact forms to Telegram with ease!

### API that sends requests from the site to the appropriate channel or group via Telegram Bot (without exposing Bot token)

### How to run:

> [!IMPORTANT]
> You need a server and a MySQL database to run Notlify.

```sh
git clone git@github.com:zayniddindev/notlify.git
cd ./notlify
yarn & yarn build
cp .env.example .env
# populate .env with database credentials
yarn start:prod
```

### Usage:

> [!IMPORTANT]
> First ask the backend developer to add the project to the database. The following information must be provided:

```sh
tg_bot_token - Telegram bot token of the project (obtained via BotFather)

* The bot must be added to a group and must be an admin
```

#### Sending request:

[POST] -> /notification

Body :

```json
{
  "uid": "test",
  "message": "<b>test</b>"
}
```

#### Response:

```json
{
  "success": true,
  "data": "Message sent successfully!",
  "error": null
}
```

```json
{
  "success": false,
  "error": "Failure message sending",
  "data": null
}
```

### Getting group ID

If the group is open (public), you enter the username, if it is closed (private), you enter the group ID. To get a private ID, you take the link of any message in the group and get the group ID from inside it, for example, in the link `https://t.me/c/1652046431/184`, `1652046431` is the group ID
