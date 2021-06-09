var topTracksUrl ='https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks';
var topArtistUrl ='https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists';
var topAlbumnUrl ='https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums';

var topTrackslocal='js/topTrack.json';
var topArtistlocal='js/topArtist.json';
var topAlbumnlocal='js/topAlbum.json';


async function getTopTracks() {
    try {
      const response = await fetch(topTrackslocal);
      const resp = await response.json();
      return resp;

    }
    catch (err) {
      console.log('fetch tracks failed', err);
    }
  }

  async function getTopArtists() {
    try {
      const response = await fetch(topArtistlocal);
      const resp = await response.json();
      return resp;

    }
    catch (err) {
      console.log('fetch tracks failed', err);
    }
  }

  async function getTopAlbums() {
    try {
      const response = await fetch(topAlbumnlocal);
      const resp = await response.json();
      return resp;

    }
    catch (err) {
      console.log('fetch tracks failed', err);
    }
  }




async function loadApis(){

let topTracks = await getTopTracks();
let topArtists = await getTopArtists();
let topAlbums = await getTopAlbums();

createTopTracks(topTracks);
createTopArtists(topArtists);
createTopAlbums(topAlbums);

}










function createTopTracks(data){
    for(let i=0; i<data.data.length; i++){

        let title = data.data[i].title;
        let cover = data.data[i].album.cover_small;
        let artistName = data.data[i].artist.name;
        let album = data.data[i].album.title;
        //console.log("title" + title + "cover" + cover + "artistName"+ artistName+ "album" + album);
        //${icon}
        const article = document.createElement('article');
        article.className = 'card';
        article.innerHTML = `
        <div class="avatar" style="background-image: url(${cover}"></div>
        <div class="informacion">
          <h1>${title}</h1>
          <h2 id=infoalbum>
          ${artistName}</h2>
          <h3 id=infosingle>
            Album:${album} <h3>
              <form method="get" action="./detail-track.html">
              <button class="btn" type="submit">Play</button>
        </div>
        `;
        
        
        document.getElementById('topTracks').appendChild(article);

    }  

}


function createTopArtists(data){
    for(let i=0; i<data.data.length; i++){

        //let title = data.data[i].picture;
        let image = data.data[i].picture_small;
        let artistName = data.data[i].name;
        let position = data.data[i].position;
        //console.log("title" + title + "cover" + cover + "artistName"+ artistName+ "album" + album);
        //${icon}
        const article = document.createElement('article');
        article.className = 'card';
        article.innerHTML = `<div class="avatar" style="background-image: url(${image})"></div>
        <div class="informacion">
          <h1>${artistName}</h1>
          <h2 id=infoalbum>
            Posición ${position}</h2>
          <form method="get" action="./detail-artist.html">
            <button class="btn" type="submit">Ver más</button>
          </form>

        </div>

        `;
        

        
        document.getElementById('topArtists').appendChild(article);

    }  

}




function createTopAlbums(data){
    for(let i=0; i<data.data.length; i++){

        //let title = data.data[i].picture;
        let image = data.data[i].cover_small;
        let album =data.data[i].title;
        let artist = data.data[i].artist.name;
        let position = data.data[i].position;
        //console.log("title" + title + "cover" + cover + "artistName"+ artistName+ "album" + album);
        //${icon}
        const article = document.createElement('article');
        article.className = 'card';
        article.innerHTML = `<div class="avatar" style="background-image: url(${image})"></div>
        <div class="informacion">
          <h1>${album}</h1>
          <h2 id=infoalbum>
            ${artist}</h2>
          <h3 id=infosingle>
             Posición ${position} </h3>
          <form method="get" action="detail-album.html">
            <button class="btn" type="submit">Ver más</button>
          </form>
        </div>`;        
        document.getElementById('topAlbums').appendChild(article);

    }  
/* <article class="card">
<div class="avatar" style="background-image: url(${image})"></div>
<div class="informacion">
  <h1>${album}</h1>
  <h2 id=infoalbum>
    {artist} </h2>
  <h3 id=infosingle>
    Año:2020 </h3>
  <form method="get" action="detail-album.html">
    <button class="btn" type="submit">Ver más</button>
  </form>
</div>

</article> */

}






loadApis();
/* 
for(var i=0; i<data.length; i++){

    console.log("" + data[i].album.title);
} */