const OAuth = require('wechat-oauth');
const express = require('express');
const router = express.Router();
const settings = require('../../settings.json');

const client = new OAuth(settings.wechat.appId, settings.wechat.appSecret);

router.get('/', (req, res, next) => {
  if (!req.query.code) {
    return;
  }
  
  client.getAccessToken(req.query.code, (err, token) => {
    // token.data: access_token, expires_in, refresh_token, openid
    if (!token.data) return;
    const openid = token.data.openid;

    req.session.user = { openid: openid };
    next();
  });
});

module.exports = router;
