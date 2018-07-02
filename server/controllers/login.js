const http = require('http');
const request = require('request');
const { userApiUrl } = require("../../configs/app");

module.exports.index = (req, res) => {
    res.status(200).sendFile('index.html', {root : 'client/views/login/'});
}

module.exports.validateLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username == '') {
        return res.status(400).json({status: "all fields required"});
    }

    let url = userApiUrl + "users/" + username;

    request.get(url, (error, response, body) => {
        if(error) return res.status(400).json(JSON.stringify(error));

        if(body == '') {
            return res.status(200).json({status: "no user"});
        }

        let json = JSON.parse(body);
        if(json.username == username){
            if(json.password == password) {
                return res.redirect('/player');
            }
        }
        return res.status(200).json({status: "user/password is incorrect"});
    });
}