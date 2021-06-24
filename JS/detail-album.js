//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var albumId = objetoQuery.get('id');




fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + albumId)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let contenedorData = document.querySelector(".MainContent");
        let album = data

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



    }).catch(function (error) {
        console.error(error)
    })