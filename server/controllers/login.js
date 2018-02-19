const http = require('http');
const { url } = require("../../configs/app");

module.exports.index = (req, res) => {
    res.status(200).sendFile('index.html', {root : 'client/views/login/'});
}

module.exports.validateLogin = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(username == '') {
        return res.status(400).json({status: "all fields required"});
    }
    http.get(url + "/user/" + username, (resp) => {
        let data = '';
    
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });
        
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            if(data == '') {
                return res.status(200).json({status: "no user"});
            }

            let json = JSON.parse(data);
            if(json.username == username){
                if(json.password == password) {
                    return res.status(200).json({status: "deu certo"});
                }
            }
            return res.status(200).json({status: "user/password is incorrect"});
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}