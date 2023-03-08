const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mohamedelganash012095@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}.Let me know how to get along with the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mohamedelganash012095@gmail.com",
    subject: "sad to see you leaving",
    text: `bye bye ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
