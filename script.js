console.log("welcome to Ace Music");
let songindex=0;
let audioelement = new Audio('2.mp3');
let masterPlay =document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let song =[
    {songname: "song1", filePath: "song/1.mp3", coverpath: "cover/cover.jpg"},
    {songname: "song2", filePath: "song/2.mp3", coverpath: "cover/cover2.jpg"},
    {songname: "song1", filePath: "song/1.mp3", coverpath: "cover/cover.jpg"},
    {songname: "song1", filePath: "song/1.mp3", coverpath: "cover/cover.jpg"},
    {songname: "song1", filePath: "song/1.mp3", coverpath: "cover/cover.jpg"},
    {songname: "song1", filePath: "song/1.mp3", coverpath: "cover/cover.jpg"},
]
masterPlay.addEventListener('click' , ()=>{
    if(audioelement.paused || audioelement.currentTime <=0){
        audioelement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause')
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play')
    }
})
audioelement.addEventListener('timeupdate', ()=> {
    console.log('timeupdate');
    progress = parseInt((audioelement.currentTime/audioelement.duration)* 100);
    console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change',()=>{
    audioelement.currentTime = myprogressbar.value*audioelement.duration/100;
})