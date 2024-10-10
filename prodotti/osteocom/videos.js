document.addEventListener("DOMContentLoaded", async function () {
  // Recupera i video dal session storage

  const videos = JSON.parse(sessionStorage.getItem("videos"));
  console.log("i video", videos);

  if (videos) {
    // disegno la card
    const videoContainer = document.getElementById("videos-container-cards");

    if (videoContainer) {
      var count = 0;
      videos.forEach((video) => {
        console.log(count++) 
         
        const cardContainer = document.createElement("div");
        const cardInnerTop = document.createElement("div");
        const cardInnerBottom = document.createElement("div");

        cardContainer.classList.add("card-container");
        cardInnerTop.classList.add("card-inner-top");
        cardInnerBottom.classList.add("card-inner-bottom");

        const imgElement = document.createElement("img");
        imgElement.classList.add("img");
        imgElement.src = video.cover;

        cardInnerTop.appendChild(imgElement);

        const titleSection = document.createElement("p");
        titleSection.classList.add("card-title-section-video");
        titleSection.textContent = video.translations.it.title;

        const authorLabelContainer = document.createElement("div");
        authorLabelContainer.classList.add("authorLabelContainer");
        const authorInnerSpan = document.createElement("span");
        authorInnerSpan.classList.add("authorInnerSpan");
        authorInnerSpan.textContent = "author ";
        const authorInnerSpanName = document.createElement("span");
        authorInnerSpanName.textContent = video.authors[0].name;
        authorInnerSpanName.classList.add("authorInnerSpanName");
        authorLabelContainer.append(authorInnerSpan, authorInnerSpanName);

        const videoQulitySection = document.createElement("span");
        videoQulitySection.textContent = video.videoQuality;
        videoQulitySection.classList.add("priceLabel");

        cardInnerBottom.append(
          titleSection,
          authorLabelContainer,
          videoQulitySection
        );
        cardContainer.append(cardInnerTop, cardInnerBottom);

        videoContainer.appendChild(cardContainer)

        // todo funzione che rimanda al video con dati video

        cardInnerTop.addEventListener("click", function () { 
          event.preventDefault() 
          window.location.href = `/prodotti/osteocom/video.html?videoId=${video.videoId}`;
        })
      });
    }

    //todo servirà dopo per accesso al video nella nuova pagina singleVideo.js
    //todo risposta negativa allora trailer
    // try {
    //   const urlVideo = "http://localhost:5000/sv6/marketplace_videoAccess";
    //   const accessToken = JSON.parse(sessionStorage.getItem("token"));
    //   const clientId = "psiGBHLDxz9nQ2xzudIyDw";
    //   const userAccessKey =  JSON.parse(sessionStorage.getItem("tokenAccessKey"));

    //   const videoResponse = await fetch(urlVideo, {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //     body: JSON.stringify({
    //       email: "leonardo.calvo@osteocom.me",
    //       channelId: "59147ece8c81b92db0a7162f",
    //       videoId: "637269083976f3fb6724756d",
    //       clientId: clientId,
    //       userAccessKey: userAccessKey,
    //     }),
    //   })
    //   if (!videoResponse.ok) {
    //     throw new Error("Errore durante la chiamata video");
    //   }

    //   const tokenHls = await videoResponse.json();
    //   console.log("tokenUser ", tokenHls);
    // }

    // catch (error) {
    //   console.log(error)
    // }

    // const videoContainer = document.getElementById('video-container');
    // videos.forEach(video => {
    //   const videoCard = document.createElement('div');
    //   videoCard.className = 'cardVideo';
    //   videoCard.innerHTML = `<h3>${video.translations.it.title}</h3>`;
    //   videoContainer.appendChild(videoCard);
    // });
  } else {
    console.error("Nessun video trovato per questo canale.");
  }
});
