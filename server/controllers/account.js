const request = require('request');
const { userApiUrl } = require("../../configs/app");

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports.index =(req, res) => {
    res.status(200).sendFile('index.html', {root : 'client/views/register/'});
}

module.exports.register = (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const salt = 'sffasfsfsdfasdfasf';
    const name = email;

    const form = {
        name: name,
        username: username,
        password: password,
        salt: salt
    }

    const body = JSON.stringify(form);

    request.post(
        {
            headers: {'content-type' : 'application/json'},
            url: userApiUrl, 
            body: body
        }, (err, response, body) => { 
            if(err && IsJsonString(body)) {
                return res.status(200).sendFile('index.html', {root : 'client/views/register/'});
            } else {
                return res.status(200).sendFile('index.html', {root : 'client/views/login/'});
            }
        }
    );
}