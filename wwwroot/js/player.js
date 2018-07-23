function setupVideo(url) {
    var player = dashjs.MediaPlayer().create();
    player.extend("RequestModifier", () => {
        return {
            modifyRequestHeader: xhr => {
                xhr.setRequestHeader("Authorization", "1234");
                return xhr;
            }
        };
    },
        true
    );
    player.initialize(document.querySelector('#video'), url, true);
}