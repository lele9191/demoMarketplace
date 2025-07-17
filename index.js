import { urlPrefix } from "./conf.js";

document.addEventListener("DOMContentLoaded", async function () {
  // Chiamata API per l'utenticazione
  document.documentElement.requestFullscreen();
  const authUrl = `${urlPrefix()}` + "contentLicensing_login";
  const clientId = "JJHiuDTDATCmpm3UkGILg";
  const secretKey = "PZPPgCDM3NQCO3ata8LA2PFUM6ewUWtc6Kyu5eRwa0";

  // omnipress
  // const clientId = "qUfrD3y52Tk8K9TVb9drhQ";
  // const secretKey = "ymGp9z2Ml2OaHn6Yjx4gsI5PdQ3P0zIyVTwgHY4EE";

  try {
    console.log("autentico il partner...");
    const authResponse = await fetch(authUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientId: clientId, clientSecret: secretKey }),
    });

    if (!authResponse.ok) {
      throw new Error("Errore durante l'autenticazione");
    }
    console.log("autenticazione ok");
    var resToJson = await authResponse.json();

    var newAccesToken = resToJson;

    sessionStorage.setItem("token", JSON.stringify(newAccesToken.token));
    console.log("new Access Token ", newAccesToken.token);
  } catch (error) {
    console.error("Errore:", error);
  }
});
