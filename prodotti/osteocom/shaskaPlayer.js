const manifestUri =
  "https://video.osteocom.me/hls/6294a1039113000d33f118fb/6294a1039113000d33f118fb.m3u8";

async function initApp() {
  const urlVideo = "http://localhost:5000/sv6/marketplace_videoAccess";
  const accessToken = JSON.parse(sessionStorage.getItem("token"));
  //   const clientId = "psiGBHLDxz9nQ2xzudIyDw";
  //   const userAccessKey =  JSON.parse(sessionStorage.getItem("tokenAccessKey"));

  const videoResponse = await fetch(urlVideo, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      email: "test",
      channelId: "test",
      videoId: "591474d28c81b92db0a715e6",
      clientId: "test",
      userAccessKey: "test",
    }),
  });
  if (!videoResponse.ok) {
    throw new Error("Errore durante la chiamata video");
  }

  const tokenHls = await videoResponse.json();
  console.log("tokenUser ", tokenHls);

  // const videoContainer = document.getElementById('video-container');
  // videos.forEach(video => {
  //   const videoCard = document.createElement('div');
  //   videoCard.className = 'cardVideo';
  //   videoCard.innerHTML = `<h3>${video.translations.it.title}</h3>`;
  //   videoContainer.appendChild(videoCard);
  // });

  // Install built-in polyfills to patch browser incompatibilities.
  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer();
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error("Browser not supported!");
  }
}

async function initPlayer() {
  // Create a Player instance.
  const video = document.getElementById("video");
  const player = new shaka.Player();
  player
  .getNetworkingEngine()
  .registerRequestFilter(function (type, request, context) {
    request.allowCrossSiteCredentials = true;
  });
  await player.attach(video);

  // Attach player to the window to make it easy to access in the JS console.
  window.player = player;

  // Listen for error events.
  player.addEventListener("error", onErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {

    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    console.log("The video has now been loaded!");
  } catch (e) {
    // onError is executed if the asynchronous load fails.
    onError(e);
  }
}

function onErrorEvent(event) {
  // Extract the shaka.util.Error object from the event.
  onError(event.detail);
}

function onError(error) {
  // Log the error.
  console.error("Error code", error.code, "object", error);
}

document.addEventListener("DOMContentLoaded", initApp);
