document.addEventListener("DOMContentLoaded", async function () {
  const clientId = "psiGBHLDxz9nQ2xzudIyDw";

  try {
    console.log("ottengo catalogo...");

    // const authData = await authResponse.json();
    // const accessToken = authData.token;
    // var accessToken = JSON.parse(sessionStorage.getItem("token"));
    // Chiamata API catalogo
    var catalogDataStorage;
    if (sessionStorage.getItem("catalog") === null) {
      const catalogUrl = "http://localhost:5000/sv6/marketplace_catalog";
      const accessToken = JSON.parse(sessionStorage.getItem("token"));
      const catalogResponse = await fetch(catalogUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ clientId: clientId }),
      });

      if (!catalogResponse.ok) {
        throw new Error("Errore durante il recupero del catalogo");
      }

      const catalogData = await catalogResponse.json();

      catalogDataStorage = sessionStorage.setItem(
        "catalog",
        JSON.stringify(catalogData)
      );

      console.log("session storage", catalogDataStorage);
      console.log("session storage", catalogData);
    }

    catalogDataStorage = JSON.parse(sessionStorage.getItem("catalog"));

    // Mostra il catalogo
    const channelContainer = document.getElementById("channel-container-cards");

    if (channelContainer) {
      catalogDataStorage.catalog.forEach((channel) => {
        const cardContainer = document.createElement("div");
        const cardInnerTop = document.createElement("div");
        const cardInnerBottom = document.createElement("div");

        cardContainer.classList.add("card-container");
        cardInnerTop.classList.add("card-inner-top");
        cardInnerBottom.classList.add("card-inner-bottom");

        const imgElement = document.createElement("img");
        imgElement.classList.add("img");
        imgElement.src = channel.cover;

        cardInnerTop.appendChild(imgElement);

        const titleSection = document.createElement("p");
        titleSection.classList.add("card-title-section");
        titleSection.textContent = channel.translations.it.title;

        const authorLabelContainer = document.createElement("div");
        authorLabelContainer.classList.add("authorLabelContainer");
        const authorInnerSpan = document.createElement("span");
        authorInnerSpan.classList.add("authorInnerSpan");
        authorInnerSpan.textContent = "author ";
        const authorInnerSpanName = document.createElement("span");
        authorInnerSpanName.textContent = channel.authors[0].name;
        authorInnerSpanName.classList.add("authorInnerSpanName");
        authorLabelContainer.append(authorInnerSpan, authorInnerSpanName);

        const containerPriceAndButton = document.createElement("div");
        containerPriceAndButton.classList.add("containerPriceAndButton");
        const infoPriceContainer = document.createElement("div");
        infoPriceContainer.classList.add("infoPriceContainer");
        const priceLabel = document.createElement("span");
        priceLabel.classList.add("priceLabel");
        priceLabel.textContent = channel.price + "$";
        const priceLabelText = document.createElement("span");
        priceLabelText.classList.add("priceLabelText");
        priceLabelText.textContent = "Price ";
        const purchaseButton = document.createElement("button");
        purchaseButton.classList.add("purchaseButton");
        purchaseButton.setAttribute("id","purchase-button");
        purchaseButton.textContent = "Buy";
        infoPriceContainer.append(priceLabelText, priceLabel);

        containerPriceAndButton.append(infoPriceContainer, purchaseButton);

        cardInnerBottom.append(
          titleSection,
          authorLabelContainer,
          containerPriceAndButton
        );

        cardContainer.append(cardInnerTop, cardInnerBottom);

        cardInnerTop.addEventListener("click", function () {
          const videosForChannel = getVideosByChannel(channel.idChannel);
          sessionStorage.setItem("videos", JSON.stringify(videosForChannel));
          window.location.href = `/prodotti/osteocom/videos.html?channelId=${channel.idChannel}`;
        });

        purchaseButton.addEventListener("click", ApiPurchase);

        channelContainer.appendChild(cardContainer);
      });
    }

    // const channelContainer = document.getElementById("channels");
    // if (channelContainer) {
    //   catalogDataStorage.catalog.forEach((channel) => {
    //     const title = channel.translations.it.title;
    //     const card = document.createElement("div");
    //     card.className = "card";
    //     card.innerHTML = `<h2>${title}</h2>`;
    //     card.addEventListener("click", function () {
    //       //Filtro i video e salvo in sessione
    //       const videosForChannel = getVideosByChannel(channel.idChannel);
    //       sessionStorage.setItem("videos", JSON.stringify(videosForChannel));
    //       window.location.href = `/prodotti/osteocom/videos.html?channelId=${channel.idChannel}`;
    //     });
    //     channelContainer.appendChild(card);
    //   });
    // }
    function getVideosByChannel(channelId) {
      var videos = catalogDataStorage.catalog.find(
        (x) => x.idChannel === channelId
      ).video;
      console.log(videos);
      return videos;
    }
  } catch (error) {
    console.error("Errore:", error);
  }
});
