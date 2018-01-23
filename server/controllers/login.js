module.exports.index = (req, res) => {
    res.status(200).sendFile('index.html', {root : 'client/views/login/'});
}