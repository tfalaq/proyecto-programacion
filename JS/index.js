fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0")
  .then(function (response) {
    return response.json()
  }).then(function (data) {
    console.log(data);



    let tracks = data.tracks.data
    let contenedorTracks = document.querySelector("#topTracks");

    for (const track of tracks) {

      // contenedorTracks.innerHTML += `
      
      //   <div class="avatar" style="background-image: url(${track.album.cover_small}"></div>
      //   <div class="informacion">
      //     <h1>${track.title}</h1>
      //     <h2 id=infoalbum>
      //     ${track.artist.name}</h2>
      //     <h3 id=infosingle>
      //       Album:${track.album.title} <h3>
              
      //         <a class="btn" href="detail-track.html?id=${track.id}"> Play</a>
      //   </div>
      //   `;
        contenedorTracks.innerHTML += `<article class="card">
        <div class="avatar" style="background-image: url(${track.album.cover_big})"></div>
        <div class="informacion">
          <h1>${track.title}</h1>
          
          <h3 id=infosingle>
            Album: ${track.album.title} </h3>
          
            </div>
            <a class="btn" href="detail-track.html?id=${track.id}"> Play</a>
        
        </article> `
    }


    let artistas = data.artists.data
    let contenedorArtistas = document.querySelector("#topArtists");


    for (const artista of artistas) {

      // contenedorArtistas.innerHTML += `<div class="avatar" style="background-image: url(${artista.picture_big})"></div>
      //   <div class="informacion">
      //     <h1>${artista.name}</h1>
      //     <h2 id=infoalbum>
      //       Posición ${artista.position}</h2>
           
      //      <a class="btn" href="detail-artist.html?id=${artista.id}"> Play</a>

      //   </div>
      //   `;
      contenedorArtistas.innerHTML += `<article class="card">
        <div class="avatar" style="background-image: url(${artista.picture_big})"></div>
        <div class="informacion">
          <h1>${artista.name}</h1>
          
          <h3 id=infosingle>
            Type:${artista.type} </h3>
         
            
            </div>
            <a class="btn" href="detail-artist.html?id=${artista.id}"> Ver Más</a>
        
        </article> `

    }



    let albums = data.albums.data
    let contenedorAlbumes = document.querySelector("#topAlbums");

    for (const album of albums) {

      // contenedorAlbumes.innerHTML += `<div class="avatar" style="background-image: url(${album.cover_big})"></div>
      // <div class="informacion">
      //   <h1>${album.title}</h1>
      //   <h2 id=infoalbum>
      //     ${album.artist.name}</h2>
      //   <h3 id=infosingle>
      //      Posición ${album.position} </h3>

      //   <a class="btn" href="detail-album.html?id=${album.id}"> Play</a>

      // </div>`;


      contenedorAlbumes.innerHTML += `<article class="card">
        <div class="avatar" style="background-image: url(${album.cover_big})"></div>
        <div class="informacion">
          <h1>${album.title}</h1>
          <h2 id=infoalbum>
            ${album.artist.name} </h2>
          <h3 id=infosingle>
            Type:${album.type} </h3>
         
        </div>
        <a class="btn" href="detail-album.html?id=${album.id}"> Ver Más</a>
        
        </article> `


    }
  })
  .catch(function (error) {
    console.error(error)
  })