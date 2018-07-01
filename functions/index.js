const functions = require('firebase-functions');
const URL_SPORTSFEED = 'https://api.mysportsfeeds.com/v1.2/pull/nba/';
const Client = require('node-rest-client').Client
const client = new Client();
const btoa = require('btoa');


const httpOptions = {
    headers: {
        "Authorization": "Basic " + btoa( functions.config()
                .mysportsfeed.uname + ":" + functions.config().mysportsfeed.pword)}
}

const cors = require('cors')({origin: true});

exports.fetch = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        let path = req.query.year + "/" + req.query.data;
        client.get(URL_SPORTSFEED + path, httpOptions, (data, response) => {
            const items = data;
            res.status(201)
                .type('application/json')
                .send(items)
        })
    });


})
