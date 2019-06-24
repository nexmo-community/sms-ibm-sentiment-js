# SMS Sentiment Analysis with IBM Tone Analyzer

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://nexmo.dev/ibm-nexmo-sms-analysis-heroku) [![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://nexmo.dev/ibm-nexmo-sms-analysis-glitchremix) [![Deploy to IBM Cloud](https://cloud.ibm.com/devops/setup/deploy/button.png)](https://nexmo.dev/ibm-nexmo-sms-analysis-ibmcloud)

This example uses IBM Tone Analyzer to analyze SMS messages and determine the sentiment of the text.

SMS Messages sent through Nexmo will be sent to IBM Tone Analyzer and a series of scores and tones returned to the console.

## IBM Tone Analyzer Service

Reference: [https://www.ibm.com/watson/services/tone-analyzer/](https://www.ibm.com/watson/services/tone-analyzer/)
API Docs: [https://cloud.ibm.com/apidocs/tone-analyzer](https://cloud.ibm.com/apidocs/tone-analyzer)
GitHub: [https://github.com/watson-developer-cloud/node-sdk#tone-analyzer](https://github.com/watson-developer-cloud/node-sdk#tone-analyzer)

Register for the [IBM Tone Analyzer service](https://console.bluemix.net/catalog/services/tone-analyzer). Once created, make a note of the API Key and URL for use later. These can be found in the Manage page of the IBM Cloud dashboard after login.

---

**Note for IBM Cloud deploy**: Once the app has deployed, go to the app dashboard and update the environment variables with these credentials under "Runtime > Environment Variables"

---

## Running the App

This sample app uses a `.env` file to provide the API key and URL.

Copy the provided `.env.example` file to a new file called `.env`:

```
cp .env.example > .env
```

Then update the values with those from the IBM Tone Analyzer service Manage page, and then save.

```
TONE_ANALYZER_IAM_APIKEY=
TONE_ANALYZER_URL=
```

Also, expose the application to the internet using tools like [ngrok](https://ngrok.com/). To see how, [check out this guide](https://www.nexmo.com/blog/2017/07/04/local-development-nexmo-ngrok-tunnel-dr/).

### Using Docker

To run the app using Docker, run the following command in a terminal:

```
docker-compose up
```

This will create a new image with all the dependencies and run it at http://localhost:3000.

### Using Node

To run the app using node, run the following command in a terminal:

```
npm install && node index.js
```

This will install all the dependencies and run it at http://localhost:3000.

## Linking the app to Nexmo

For this example app a Nexmo number and SMS webhook setup is needed.

This can be achieved with the Nexmo CLI. Install the CLI by following [these instructions](https://github.com/Nexmo/nexmo-cli#installation).

### Rent a New Virtual Number

Renting a number will need to be in place. This can also be achieved using the CLI by running this command:

```
nexmo number:buy --country_code US
```

### Adding the SMS Webhook

Update the number created with the URL of the hosted or local server.

```
nexmo link:sms phone_number https://my-hostname/message
```

## Try it out

With the example Node application running in the terminal, send various SMS messages to the virtual number.  The terminal will output the response from IBM Tone Analyzer.

![Watson analysis](https://github.com/nexmo-community/sms-sentiment-watson/blob/master/sms.png?raw=true)

![Watson analysis](https://github.com/nexmo-community/sms-sentiment-watson/blob/master/emotion-analysis.png?raw=true)

## Extend
This app prints out to the console. For integration with an application, extend the `analyzeTone` function to suit your needs.
