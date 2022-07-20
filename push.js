let push = require('web-push');

let idKeys = {
    publicKey: 'BNGOzEEz1Pg05FpeDHIoRyKi8HTmDyOFOSj0Y4gQE54OuYkExuXv75nKdjCYIdkrepqfK9VyiSLqovDHK4X2K_E',
    privateKey: 'xVQkswWskRGxFu880a1djVH9Cwdnl7VVSDFnaFqeUs4'
  }

  push.setVapidDetails('mailto:shaikhasifakhtar@gmail.com', idKeys.publicKey, idKeys.privateKey);

  let sub = {}

  push.sendNotification(sub, 'test message')