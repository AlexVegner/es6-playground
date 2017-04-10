'use strict';

function greet(name) {
  console.log(('Hello ' + name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
  console.log('\n    To: ' + to + '\n    From: ' + from + '\n    Subject ' + subject + '\n    Message ' + message + '\n  ');
}

createEmail('john@mail.com', 'jone@mail.com', 'Hello team', 'Hi, how are you?');