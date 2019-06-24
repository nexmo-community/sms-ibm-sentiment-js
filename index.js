/* Simple Emotion Analysis Demo:
 * Read incoming SMS messages and have Watson to analyze the messages
 */

'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// Reading the inbound SMS messages
// Using all here to allow for GET, POST or POST-JSON from https://dashboard.nexmo.com/settings
app.all('/message', (req, res) => {

  let params = req.body;

  if (req.method === "GET") {
    params = req.query
  }

  if (!params.to || !params.msisdn) {
    console.log('This is not a valid inbound SMS message!');
  } else {
    analyzeTone(params);
  }
  res.status(200).end();
});

// IBM Watson Tone Analysis
var toneAnalyzer = new ToneAnalyzerV3({
  iam_apikey: process.env.TONE_ANALYZER_IAM_APIKEY,
  url: process.env.TONE_ANALYZER_URL,
  version: '2017-09-21'
});

function analyzeTone(params) {
  let toneParams = {
    tone_input: { 'text': params.text},
    content_type: 'application/json',
  };

  toneAnalyzer.tone(toneParams)
      .then(toneAnalyzer => {
        console.log(JSON.stringify(toneAnalyzer, null, 2));
      })
      .catch(err => {
        console.log('error', err);
      });
}
