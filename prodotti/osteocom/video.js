document.addEventListener("DOMContentLoaded", function () {

    VideoInfo()
    TitlePage()
    
});

function VideoInfo() {
    const params = new URLSearchParams(window.location.search);
    const videoId = params.get('videoId');
    const videoList = JSON.parse(sessionStorage.getItem("videos"))
    return videoList.filter(x => x.videoId == videoId)
}

function TitlePage() {
    const titlePage = document.getElementById("video-name")
    const videoInfo = VideoInfo()
    console.log(VideoInfo())
    return titlePage.innerHTML  = videoInfo[0].translations.it.title
}