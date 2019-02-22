/* Simple Emotion Analysis Demo:
 * Read incoming SMS messages and have Watson to analyze the messages
 */

'use strict';

require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// Reading the onbound SMS messages
app.post('/message', (req, res) => {
  let params = req.body;
  console.log(params);

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
  let text = params.text;
  let number = params.msisdn;

  toneAnalyzer.tone({text: text}, (err, tone) => {
    if (err) {
      console.log(err);
    } else {
      console.log(tone.document_tone.tones);
      tone.document_tone.tones.forEach((tone) => {
        console.log(tone.tone_name);
      })
    }
  });
}
