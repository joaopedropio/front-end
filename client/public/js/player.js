// setup the video element and attach it to the Dash player
function setupVideo(id, url) {
    var player = dashjs.MediaPlayer().create();
    player.extend("RequestModifier", () => {
        return {
            modifyRequestHeader: xhr => {
                xhr.setRequestHeader("auth", "1234");
                return xhr;
            }
        };
    },
        true
    );
    player.initialize(document.querySelector(`#video_${id}`), url, true);
};