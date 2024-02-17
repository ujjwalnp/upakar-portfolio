const rateLimit = require('express-rate-limit')

const rateLimitOptions = {
  general: { windowMs: 60 * 1000, max: 5 },
  auth: { windowMs: 60 * 1000, max: 3 },
  api: { windowMs: 60 * 1000, max: 10 },
  deny: { windowMs: 60 * 60 * 24 * 1000, max: 1 },
}

exports.rateLimitPerRequestType = (requestType) => {
  const options = rateLimitOptions[requestType] || rateLimitOptions.deny
  return rateLimit(options)
}
