var speakeasy = require("speakeasy");
var QRCode = require('qrcode')

const secret = 'OBBGCXT3LURUWIZSMZMEWKTEJZSEYQ2F'

exports.generate = async (req, res) => {
  const secretCode = speakeasy.generateSecret({
    length: 20,
    name: 'travizgo'
  });

  QRCode.toDataURL(secretCode.otpauth_url, (err, image_data) => {
    res.send({
      secret_uri: image_data,
      otpauthUrl: secretCode.otpauth_url,
      base32: secretCode.base32,
    });
    // res.json({ error: false, activate, data: { secret: secretCode.base32, secret_uri: image_data } });
  });


};

exports.verify = async (req, res) => {
  console.log(req.body.code)
  const isCodeValid = await speakeasy.totp.verify({
    secret: 'OBBGCXT3LURUWIZSMZMEWKTEJZSEYQ2F',
    encoding: 'base32',
    token: req.body.code,
  });

  res.send({
    result: isCodeValid
  });

};