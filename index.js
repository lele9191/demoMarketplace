document.addEventListener("DOMContentLoaded", async function () {
  // Chiamata API pear l'utenticazione

  const authUrl = "http://localhost:5000/sv6/marketplace_login";
  const clientId = "psiGBHLDxz9nQ2xzudIyDw";
  const secretKey = "QAtSD8r88kuzqWdjDNbJwuiBJ2DK98fPtz1YESrz2JU";

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
    console.log("autenticazione ok")
    var resToJson = await authResponse.json()

    var newAccesToken = resToJson

    sessionStorage.setItem("token", JSON.stringify(newAccesToken.token));
    console.log("new Access Token ",newAccesToken.token)
  } catch (error) {
    console.error("Errore:", error);
  }
});
