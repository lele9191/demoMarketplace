async function initAppPlayer(manifestUri) {

  shaka.polyfill.installAll();

  // Check to see if the browser supports the basic APIs Shaka needs.
  if (shaka.Player.isBrowserSupported()) {
    // Everything looks good!
    initPlayer(manifestUri);
  } else {
    // This browser does not have the minimum set of APIs we need.
    console.error("Browser not supported!");
  }
}

async function initPlayer(manifestUri) {
  console.log(manifestUri)
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

// document.addEventListener("DOMContentLoaded", initAppPlayer);
