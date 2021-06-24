//obtengo el query string
let queryString = window.location.search

<<<<<<< HEAD
    //capturo ek elemneto que contieene mi track

//capturo ek elemneto que contieene mi track


//atrapo el id del gif que voy a usar


// fetch()
//.then(function(respuesta){
   // return respuesta.json();
})
//.then(function(datos){
  //  let detalles = 
//})



//recupero el storage a ver si hay o no fav


//si es que hay entro del storage favs

    //transformo el string en un array y le asigno el array a la variable favs
    

        //se cambio el texto del link favoritos
        

//Formularios
 //elementos html donde iran los datos de la alet trends = document.querySelector()
 
=======
//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var trackId = objetoQuery.get('id');



fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + trackId)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {


    let contenedorData = document.querySelector(".MainContent")
    let subtitulo = document.querySelector(".Subtitle")

    let track = data
    console.log(track);
    subtitulo.innerHTML = `
    ${track.title}
`
    contenedorData.innerHTML = ` 
<article>
<div class="card">
  <div class="avatar" style="background-image: url('${track.album.cover_big}')"></div>
  <div>
    <h1>${track.title}</h1>
    <h3 id=infosingle><a href="detail-artist.html?id=${track.artist.id}">${track.artist.name}</a>
    </h3>
    <h3 id=infosingle>Type:${track.type}</h3>
    <h3 id=infosingle>${track.duration} Seg </h3>

    <button id="addplaylist"> Add to Playlist</button>
    <button id="addedplaylist"> Added to Playlist</button>
    <h4> <a href="playlist.html"  class="formap"> Mi Playlist</a> </h4>
    <button class="play-cancion">Play</button> 
    </div>
</div>
</article>`
let reproductor = document.querySelector(".reproductor")
let botonPlay = document.querySelector(".play-cancion");

botonPlay.addEventListener("click", function(){
  
  reproductor.style.display="block";
  reproductor.innerHTML=`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=100%&height=2&color=007FEB&layout=dark&size=medium&type=tracks&id=${track.id}&app_id=1" width="100%" height="62px"></iframe>`


})

  

    const add = document.querySelector('#addplaylist')
    const added = document.querySelector('#addedplaylist')
    if (window.localStorage.getItem('list')) {
      let tracks = JSON.parse(window.localStorage.getItem('list'))
      tracks.forEach(element => {
        if (element.id == track.id) {
          add.style.display = 'none'
          added.style.display = 'block'
        }
      });


    }
    add.addEventListener('click', function () {
      if (window.localStorage.getItem('list')) {
        let tracks = JSON.parse(window.localStorage.getItem('list'))
        tracks.push(track)
        window.localStorage.setItem('list', JSON.stringify(tracks))
        add.style.display = 'none'
        added.style.display = 'block'
      } else {
        let tracks = [track]
        window.localStorage.setItem('list', JSON.stringify(tracks))
        add.style.display = 'none'
        added.style.display = 'block'
      }

    })
  })
>>>>>>> b8235262164036f9152009bbbb11d6f791f67dc7
