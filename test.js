"use strict";

/**
Send an identical notification to multiple devices.
Possible use cases:
 - Breaking news
 - Announcements
 - Sport results
*/

const apn = require("apn");

// Sending: {"aps":{"alert":"Доступны результаты мероприятия",
// "badge":0,"sound":"default"}} to bbca56296e584c4791b1e048f2882f1011822998f25521f566969c919ac94fed
let tokens = ["bbca56296e584c4791b1e048f2882f1011822998f25521f566969c919ac94fed"];

let service = new apn.Provider({
  cert: "certificates/cert.pem",
  key: "certificates/key.pem",
});

let note = new apn.Notification({
    alert:  "Breaking News: I just sent my first Push Notification",
});

// The topic is usually the bundle identifier of your application.
note.topic = "com.speeddate.TestDeployNew";

console.log(`Sending: ${note.compile()} to ${tokens}`);
service.send(note, tokens).then( result => {
    console.log("sent:", result.sent.length);
    console.log("failed:", result.failed.length);
    console.log(result.failed);
});


// For one-shot notification tasks you may wish to shutdown the connection
// after everything is sent, but only call shutdown if you need your 
// application to terminate.
service.shutdown();
