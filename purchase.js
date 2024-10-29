async function ApiPurchase(channelId) {
  event.preventDefault();
  //todo purchase
  const urlPurchase = "http://localhost:5000/sv6/marketplace_purchase";
  const accessToken = JSON.parse(sessionStorage.getItem("token"));
  const clientId = "psiGBHLDxz9nQ2xzudIyDw";
  
  var spinner = document.createElement("i");
  spinner.classList.add("fa", "fa-spinner", "fa-spin");
  var purchaseButton = document.getElementById(`purchase-button-${channelId}`)
    purchaseButton.innerHTML = " process..."
    purchaseButton.prepend(spinner);
  

  const purchaseResponse = await fetch(urlPurchase, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({

      clientId: clientId,
      email: "leonardo.calvo@osteocom.me",
      name: "Leonardo",
      surname: "Calvo",
      marketingMail: true,
      products: [{ productId: "66d579675f2ea4b71f15e4d3", price: 100 }],
    }),
  });
  
    spinner.remove()
    purchaseButton.innerHTML = "Purchase complete!"
  

  if (!purchaseResponse.ok) {
    throw new Error("Errore durante la chiamata per la purchase");
  }



  const tokenUser = await purchaseResponse.json();
  console.log("tokenUser ", tokenUser.token);

  sessionStorage.setItem("tokenAccessKey", tokenUser.token)

}
