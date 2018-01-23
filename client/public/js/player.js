// setup the video element and attach it to the Dash player
function setupVideo(protocol, domain, port, path, file, ext, id) {
    var url = protocol + "://" + domain + ":" + port + "/" + path + "/" + file + "." + ext;
    var player = dashjs.MediaPlayer().create();
    player.extend("RequestModifier", () => {
        return {
            modifyRequestHeader: xhr => {
                xhr.setRequestHeader("auth", "123asfasf4");
                return xhr;
            }
        };
    },
        true
    );
    player.initialize(document.querySelector(`#video_${id}`), url, true);
}