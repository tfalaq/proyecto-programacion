//obtengo el dato de query string
let queryString = window.location.search

//paso de ese texto a un objeto literal
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var albumId = objetoQuery.get('id');



//con la propiedad fetch(promesa), traigo el url o endpoint, la info de los albums y sus id


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + albumId)
     
// una vez que me llegue, convierto toda la info que 
// nos trae deezer de string a formato json

    .then(function (response) {
        return response.json()
    })
    .then(function (data) {


        // imprimo en consola los datos que contiene el track

         console.log(data);

         // una vez que hago esto en la consola se ven todos los datos traidos por la API
         // donde posteriormente vamos a usarlos en el innerHTML


    
         //aca pongo los datos que quiero cambiar


        let contenedorData = document.querySelector(".MainContent");
        //declaro la variable seleccionando en el documento el MainContent
        let album = data

       // al contenedor data lo manipulo en el documento 
       //mediante innerHTML y le asigno el cover, el titulo, el 
       // nombre de artista y la fecha de lanzamiento

        contenedorData.innerHTML = `
        <article>
        <div>
          <div class="card">
            <div class="avatar" style="background-image: url('${album.cover_big}')"></div>
            <div>
              <p>${album.title}</p>
              <p id=infoalbum>
               ${album.artist.name}</p>
              <p id=infoalbum>
                ${album.release_date} </p>
              
             
            </div>
          </div>
        </div>
      </article>
        `

        // vuelvo a declarar una variable pero en este caso trae los tracks
        let contenedorTracks = document.querySelector(".tracks")
        for (const track of album.tracks.data) {
            contenedorTracks.innerHTML += ` 
                <article class="card">
                    <div class="informacion">
                    <h1>${track.title}</h1> 
                    <h3 id=infosingle>
                        Album: ${track.title} </h3>
                    
                        </div>
                        <a class="btn" href="detail-track.html?id=${track.id}"> Play</a>
                    
                </article> 
                        
                        `


        }

// si hay un error, lo imprime en consola :)

    }).catch(function (error) {
        console.error(error)
    })