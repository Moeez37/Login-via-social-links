var GoogleStrategy = require('passport-google-oidc');
module.exports=(passport)=>{
    passport.use(new GoogleStrategy({
        clientID:"945796878962-i7084h3egfddk9jqnt3ndpqhv7k0n2vj.apps.googleusercontent.com",
project_id:"master-reactor-367212","auth_uri":"https://accounts.google.com/o/oauth2/auth",
token_uri:"https://oauth2.googleapis.com/token",
auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
client_secret:"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"
      },
      function(issuer, profile, done)
    {
        console.log(profile);
        done(null,profile);
    }))
}