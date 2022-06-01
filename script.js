const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyD7LQiiDNIxpH0oXLL0jPdn8QrIcSa9vTM";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item => {
        console.log(item);
    })
})
.catch(err => console.log(err));


function openlink(){
     window.open("https://developers.google.com/youtube/v3/docs/channels", "newwindow", "status=1,fullscreen=1");
}

function openlink1(){
    window.open("https://developers.google.com/youtube/v3/docs/playlists", "newwindow", "status=1,fullscreen=1");
}
function openlink2(){
    window.open("https://developers.google.com/youtube/v3/docs/activities", "newwindow", "status=1,fullscreen=1");
}


