import { urlPrefix } from "./conf.js";
export async function ApiPurchase(channelId) {
  event.preventDefault();
  //todo purchase
  const urlPurchase =
    `${urlPrefix()}` + "contentLicensing_contentAccessAuthorization";
  const accessToken = JSON.parse(sessionStorage.getItem("token"));
  //[OMNIPRESS]
  const clientId = "qUfrD3y52Tk8K9TVb9drhQ";
  // const clientId = "JJHiuDTDATCmpm3UkGILg";

  var spinner = document.createElement("i");
  spinner.classList.add("fa", "fa-spinner", "fa-spin");
  var purchaseButton = document.getElementById(`purchase-button-${channelId}`);
  purchaseButton.innerHTML = " process...";
  purchaseButton.prepend(spinner);

  const purchaseResponse = await fetch(urlPurchase, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      clientId: clientId,
      // email: "leonardo.calvo@osteocom.me",
      // name: "Leonardo",
      // surname: "Calvo",
      userId: "1", // must be unique, to do in doc. (parter specifies the id)
      products: [{ productId: "6790d4362d61c994a8e7333d", price: 536 }],
    }),
  });

  var resToJson = await purchaseResponse.json();

  var userToken = resToJson;

  spinner.remove();
  purchaseButton.innerHTML = "Purchase complete!";

  if (!purchaseResponse.ok) {
    throw new Error("Errore durante la chiamata per la purchase");
  }

  sessionStorage.setItem("tokenAccessKey", userToken.token);
}
