# Notlify - Telegram notifier service for sending website contact forms to Telegram with ease!

### API that sends requests from the site to the appropriate channel or group via Telegram Bot

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

To do this, enter the group and give the following command:

```sh
@<botname>/start
```

Then send a request to the API (to the `/notification` route as shown above). You will find the group ID in the logs in application logs!

> [!NOTE]
> If you don't find the group ID, do the process from the beginning again!
