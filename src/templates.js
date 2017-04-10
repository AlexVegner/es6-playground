function greet(name) {
  console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill');


function createEmail(to, from, subject, message) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject ${subject}
    Message ${message}
  `)
}

createEmail('john@mail.com', 'jone@mail.com', 'Hello team', 'Hi, how are you?');
