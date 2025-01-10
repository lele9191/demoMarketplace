document.addEventListener("DOMContentLoaded", async function () {
  TitlePage();

  try {
    const video = VideoInfo();
    console.log("video ", video);

    const urlVideoApi = "http://localhost:5000/sv6/marketplace_videoAccess";
    const accessToken = JSON.parse(sessionStorage.getItem("token"));
    console.log("accessToken ", accessToken);
    const clientId = "psiGBHLDxz9nQ2xzudIyDw";
    const userAccessKey = sessionStorage.getItem("tokenAccessKey");

    console.log("userAccessKey ", userAccessKey);

    // Call to the video access API
    const videoResponse = await fetch(urlVideoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        email: "leonardo.calvo@osteocom.me",
        channelId: "66d579675f2ea4b71f15e4d3",
        videoId: "591441ce8c81b91cc4f8d653",
        clientId: clientId,
        userAccessKey: userAccessKey == undefined ? "ND" : userAccessKey,
      }),
    });

    if (videoResponse.status != 200) {
      console.log("Errore: carico trailer invece del video");
      const trailerVideo = video.trailer;
      initAppPlayer(trailerVideo);
      return;
    }

    // Converts the JSON response
    const responseJson = await videoResponse.json();
    console.log("signedUrl: ", responseJson.signedURL);

    // Initialize player with the signed url
    initAppPlayer(responseJson.signedURL);

  } catch (error) {
    console.log("Errore nella chiamata API:", error);
  }

  function VideoInfo() {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get("videoId");
    const channelId = params.get("channelId");
    const videoList = JSON.parse(sessionStorage.getItem(`videos_${channelId}`));
    return videoList.filter((x) => x.videoId == videoId)[0];
  }

  function TitlePage() {
    const titlePage = document.getElementById("video-name");
    const videoInfo = VideoInfo();
    console.log(VideoInfo());
    return (titlePage.innerHTML = videoInfo.translations.it.title);
  }
});
