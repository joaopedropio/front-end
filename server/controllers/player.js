module.exports.player = (req, res) => {
    res.status(200).sendFile('index.html', {root : 'client/views/player/'});
}