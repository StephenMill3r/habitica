//import nconf from 'nconf';
import jwt from 'jsonwebtoken';
//import jwksClient from 'jwks-rsa';
//import util from 'util';

//const APPLE_PRIVATE_KEY = nconf.get('APPLE_AUTH_PRIVATE_KEY');

const dynamicAuthPublicKey = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvJ/JTrWHZ1HUjIre0Gi2
7WUj7OAiniPKeMIRm5mn71wPSJ2HEgsP6kzgcXCKj/vjwUMXdHawQVkNh/f3TODG
z3tT3jfUf2Or+8DhUflFXS+baRVA07NQVE4p9w9qm9XTmwFh3sMXrBWLvhT3vx+f
629pWoLW71qA/cSSViLMIdvtctUs0pZbOjTDe/doL1D/1Hk5eP6/4BEsS3XPBG5t
itaJ5sE03LuVHHUcMeMRTEl3JgArmRQKJ/Veg7Kkyerp6xYDXCDgeCWbJV+gZMe0
h39bFzYHv1WF7kpWF0riEJ3iaJ6cyZHUKZNmSuBTn9vc4f+0flgWbf9lFEm+9EPA
6e5OVcOsY/vQeantfSO8FaTAr4D+pytL4FTxrGHDkDQyk1ivTS5kwVRnh+bTQnWv
4l8kI8NacxgPiqVBu1AAaRMea1Lj6d59U5ZglT6+mWImHYK1lUqDuUdaqb0weNxX
XMhgoouG4kK5BcnqAKGldwtY2RS9iDdalzJV18gjlUXD2eM+0yMlIz1kEE5tJ7Br
SPr4/UeLDyLGuLr0vrMlD0E2c6cneYSpyIHmWQF6hKkZCqmDW1DzmDsfRfW4JwpV
YpW3yWvWGmVy2CFou9z0yCKrYpZ4IPgBfZHdUCZ8bQKo+qFSdUabCJD+f4pDRxau
J/zRXF0C3T5M90xE79PHmX8CAwEAAQ==
-----END PUBLIC KEY-----`;


export async function dynamicProfile (req) {
  const code = req.body.code ? req.body.code : req.query.code;
  const passedToken = req.body.id_token ? req.body.id_token : req.query.id_token;
  let idToken;

  if (code) {
    const response = await appleAuth.accessToken(code); // Replace with Dynamic Auth 
    idToken = response.id_token;
  } else if (passedToken) {
    idToken = passedToken;
  }

  const verifiedPayload = jwt.verify(idToken, dynamicAuthPublicKey, { algorithms: 'RS256' });

  return {
    id: verifiedPayload.sub,
    emails: [{ value: verifiedPayload.email }],
    name: verifiedPayload.name || req.body.name || req.query.name,
  }; 
}
