/* Simple Emotion Analysis Demo: 
 * Read incoming SMS messages and have Watson to analyze the messages
 */

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 5000, () => {
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

const watson = require('watson-developer-cloud');

let tone_analyzer = watson.tone_analyzer({
  username: process.env.WATSON_TONE_ANALYSIS_USERNAME,
  password: process.env.WATSON_TONE_ANALYSIS_PASSWORD,
  version: process.env.WATSON_TONE_ANALYSIS_VERSION,
  version_date: '2016-05-19'
});

const confidencethreshold = 0.5;

function analyzeTone(params) {
  let text = params.text;
  let number = params.msisdn;

  tone_analyzer.tone({text: text}, (err, tone) => {
    if (err) {
      console.log(err);
    } else {
      tone.document_tone.tone_categories.forEach((tonecategory) => {
        if(tonecategory.category_id === 'emotion_tone'){
          console.log(tonecategory.tones);
        }
      })
    }
  });
}
