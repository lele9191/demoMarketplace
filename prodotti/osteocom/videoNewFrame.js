document.addEventListener("DOMContentLoaded", async function () {
  // const params = new URLSearchParams(window.location.search);
  // const videoId = params.get("videoId");
  // console.log("videoId -->" + `${videoId}`)
  // const channelId = params.get("channelId");

  // var newToken = await VideoAccessNewApi("1", channelId, videoId);

  //metto direttamente il token perchè ho fatto la chiamata da Postman
  var newToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaGFubmVsSWQiOiI2N2NhYTg1ZjdiNWIzZGQyOGYwNGJmZTMiLCJ2aWRlb0lkIjoiNjdjYWFjZDE3YjViM2RkMjhmMGY1NTZjIiwidXNlckFjY2Vzc0tleSI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUp6ZFdJaU9tNTFiR3dzSW1sa1l5STZJbkJ6YVVkQ1NFeEVlSG81YmxFeWVIcDFaRWw1UkhjaUxDSnlkV01pT2lKd1lYSjBibVZ5SWl3aWFXRjBJam94TnpReU16a3dOekF4TENKemFXUWlPaUp3WVhKMElpd2laWGh3SWpvd0xDSnBaSFVpT2lJeE1qTTBJbjAuWXQ4ejBsNUhwZGlWY1NwT01qWjlfRHVrbFJrZnp0aFlxcWFvMl95MFVRTSIsImVtYWlsIjpudWxsLCJzdWIiOm51bGwsImlkYyI6InBzaUdCSExEeHo5blEyeHp1ZEl5RHciLCJydWMiOiJwYXJ0bmVyIiwiaWF0IjoxNzQyOTEzNDE4LCJzaWQiOiJwYXJ0IiwiZXhwIjoxNzQyOTE0MzE4LCJpZHUiOiIxMjM0In0.xoKDLXqtUuQhadhUBOYZD5oeJ5NLsdXQPGVdmRa4AmA";
 
  console.log(`newToken ---> ${newToken}`);
  const iframe = document.getElementById("videoFrame");

  iframe.style.display = "block";
  iframe.setAttribute(
    "src",
    "https://osteocom.me/en/videoaccess?signature=" + newToken
  );
  // iframe.setAttribute("allowfullscreen");
  // iframe.setAttribute("allow", "fullscreen");
});
