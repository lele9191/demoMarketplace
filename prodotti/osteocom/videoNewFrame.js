import { VideoAccessNewApi } from "./videoaccess.js";
document.addEventListener("DOMContentLoaded", async function () {
  const params = new URLSearchParams(window.location.search);
  const videoId = params.get("videoId");
  console.log("videoId -->" + `${videoId}`)
  const channelId = params.get("channelId");

  var newToken = await VideoAccessNewApi("1", channelId, videoId);
  console.log(`newToken ---> ${newToken}`);
  const iframe = document.getElementById("videoFrame");

    iframe.style.display = "block";
    iframe.setAttribute(
      "src",
      "http://localhost:5000/en/videoaccess?signature=" + newToken
    );

});
