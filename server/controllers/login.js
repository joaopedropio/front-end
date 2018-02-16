const http = require('http');
const { url } = require("../../configs/app");

module.exports.index = (req, res) => {
    res.status(200).sendFile('index.html', {root : 'client/views/login/'});
}

module.exports.validateLogin = (req, res) => {
    const body = req.body;
    http.get(url + "/user/users/" + body.username, (resp) => {
        let data = '';
    
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            let json = JSON.parse(data);
            if(json.username == body.username){
                if(json.password == json.password) {
                    res.status(200).json({status: "deu certo"});
                }
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}