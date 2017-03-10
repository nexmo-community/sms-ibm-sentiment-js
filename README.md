# SMS Message Sentiment Analysis with IBM Watson

This is a demo that shows you how to have IBM Watson Watson to read the emotion of SMS messages in Node.js.

![Watson analysis](https://github.com/nexmo-community/sms-sentiment-watson/blob/master/sms.png?raw=true)

### Prerequisites

You need a [Nexmo account](https://dashboard.nexmo.com/) and set up the webhook endpoint to `https://yoour-server/message`. To learn how to set and one and receive SMS message, please read the tutorial, [How to Receive SMS Messages with Node.js and Express](https://www.nexmo.com/blog/2016/10/27/receive-sms-messages-node-js-express-dr/).

You also need an [IBM Bluemix](https://console.ng.bluemix.net) account and add the [Watson Tone Analyzer](https://console.ng.bluemix.net/services/tone_analyzer/cbe7a324-0794-46d3-a6be-db4e58604273/?paneId=manage). You will be required the service credentials later.

## Trying the Demo on Your Server

Install the dependencies:

```bash
$ npm install
```

### Setting the ENV VARS

When you clone this repo run on your own server, rename the `.env-test` file to `.env` and fill out your own IBM Bluemix credentials.

#### Using Foreman (Optional)

To read the .env file from your app, I am using [Node Foreman](http://www.girliemac.com/blog/2016/10/24/slack-command-bot-nodejs/[https://coderwall.com/p/qdluuq/node-js-node-foreman](https://coderwall.com/p/qdluuq/node-js-node-foreman)). 

You need to install it globally on your machine:

```
$ npm install -g foreman

```

At the root of your app, create a file with name of `Procfile` and add this in the file:

```
web: node index.js

```

When you run our node app, run with

```
$ nf start
```

Then try sending some messages to your Nexmo number that associated with your API keys, and see the `console.log` on terminal!

![Watson analysis](https://github.com/nexmo-community/sms-sentiment-watson/blob/master/emotion-analysis.png?raw=true)



