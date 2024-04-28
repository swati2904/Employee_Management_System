const crypto = require('crypto');

// Generate a random string of 32 characters
const secretKey = crypto.randomBytes(32).toString('hex');

console.log('Generated secret key:', secretKey);
