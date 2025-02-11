import { urlPrefix } from "/conf.js";

export async function VideoAccessNewApi(userId, channelId, videoId) {
  console.log(
    `videoaccess/ userID:${userId},videoaccess/ channelId:${channelId} videoaccess/ videoId:${videoId}`
  );
  const urlVideoApi = `${urlPrefix()}` + "contentLicensing_videoAccess";
  const accessToken = JSON.parse(sessionStorage.getItem("token"));
  console.log("accessToken ", accessToken);
  const clientId = "JJHiuDTDATCmpm3UkGILg";
  const userAccessKey = sessionStorage.getItem("tokenAccessKey");

  console.log("userAccessKey ", userAccessKey);

  const videoResponse = await fetch(urlVideoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      userId: userId,
      channelId: channelId,
      clientId: clientId,
      videoId: videoId,
      userAccessKey: userAccessKey == undefined ? "ND" : userAccessKey,
    }),
  });

  var resToJson = await videoResponse.json();
  var res = resToJson;
  var token = res.tokenAuthVideo;
  console.log(res.tokenAuthVideo);

  return token;
}
