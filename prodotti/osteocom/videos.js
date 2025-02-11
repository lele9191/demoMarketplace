document.addEventListener("DOMContentLoaded", async function () {
  // Recupera i video dal session storage
  const params = new URLSearchParams(window.location.search);
  const channelId = params.get("channelId");
  
  const videos = JSON.parse(sessionStorage.getItem(`videos_${channelId}`));
  console.log("i video", videos);

  if (videos) {

    const videoContainer = document.getElementById("videos-container-cards");
    videoContainer.innerHTML = ''; 

    if (videoContainer) {

      videos.forEach((video) => {
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
        titleSection.textContent = video.title;

        const authorLabelContainer = document.createElement("div");
        authorLabelContainer.classList.add("authorLabelContainer");
        const authorInnerSpan = document.createElement("span");
        authorInnerSpan.classList.add("authorInnerSpan");
        authorInnerSpan.textContent = "author ";
        const authorInnerSpanName = document.createElement("span");
        authorInnerSpanName.textContent = video.authors[0].name;
        authorInnerSpanName.classList.add("authorInnerSpanName");
        authorLabelContainer.append(authorInnerSpan, authorInnerSpanName);

        const videoQualitySection = document.createElement("span");
        videoQualitySection.textContent = video.videoQuality;
        videoQualitySection.classList.add("priceLabel");

        cardInnerBottom.append(
          titleSection,
          authorLabelContainer,
          videoQualitySection
        );
        cardContainer.append(cardInnerTop, cardInnerBottom);

        videoContainer.appendChild(cardContainer);

        cardInnerTop.addEventListener("click", function () {
          event.preventDefault();
          window.location.href = `/prodotti/osteocom/video.html?channelId=${channelId}&videoId=${video.videoId}`;
        });
      });
    }
  } else {
    console.error("Nessun video trovato per questo canale.");
  }
});
