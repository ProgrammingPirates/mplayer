const music =document.querySelector("audio");
const image =document.querySelector("img");
const play=document.getElementById("play");
const artist=document.getElementById("artist");
const title=document.getElementById("title");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs =[
    {
    name:"music-1",
    
    title:"Faded",
    artist:"Alan Walker"
},
{
    name:"music-2",
    
    title:"Alone",
    artist:"Alan Walker"
},
{
    name:"music-3",
    
    title:"Spectre",
    artist:"Alan Walker"
}




]

let isbool=false;

//for playing the music
const playMusic =()=>{
    isbool =true;
    music.play();
    play.classList.replace('fa-play',"fa-pause");
    image.classList.add("anime");
};

//for pause
const pauseMusic =()=>{
    isbool =false;
    music.pause();
    play.classList.replace("fa-pause" ,"fa-play");
    image.classList.remove("anime");
};

play.addEventListener('click',()=>{

isbool?pauseMusic():playMusic();

});

const loadSong =(songs) =>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="audio/" +songs.name +".mp3";
    img.src="images/" +songs.name + ".jpg";

};
 si=0;

const nextSong = () =>
{
  si=(si+1)%songs.length;
  loadSong(songs[si]);
}
const prevSong = () =>
{
  si=(si -1 +songs.length) %songs.length;
  loadSong(songs[si]);
}
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);
