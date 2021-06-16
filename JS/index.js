window.addEventListener('load', async function () {
  let topTracksUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks';
  let topArtistUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists';
  let topAlbumnUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums';

  let topTrackslocal = 'js/topTrack.json';
  let topArtistlocal = 'js/topArtist.json';
  let topAlbumnlocal = 'js/topAlbum.json';

  async function RealizarPeticion(url, mensajeError) {
    try {
      let response = await fetch(url)
      let respuesta = await response.json()
      return respuesta
    } catch (error) {
      console.log(`Ocurrio un error en ${mensajeError}, ${error}`);
    }
  }

  async function loadApis() {

    let topTracks = await RealizarPeticion(topTracksUrl, 'TopTracks');
    let topArtists = await RealizarPeticion(topArtistUrl, 'TopArtist');
    let topAlbums = await RealizarPeticion(topAlbumnUrl, 'TopAlbums');

    createTopTracks(topTracks);
    createTopArtists(topArtists);
    createTopAlbums(topAlbums);

  }

  function createTopTracks(track) {

    track.data.map(item => {
      const article = document.createElement('article');
      article.className = 'card';
      article.innerHTML = `
        <div class="avatar" style="background-image: url(${item.album.cover_small}"></div>
        <div class="informacion">
          <h1>${item.title}</h1>
          <h2 id=infoalbum>
          ${item.artist.name}</h2>
          <h3 id=infosingle>
            Album:${item.album.title} <h3>
              <form method="get" action="./detail-track.html">
              <button class="btn" type="submit">Play</button>
        </div>
        `;

      document.getElementById('topTracks').appendChild(article);


    })

  }


  function createTopArtists(data) {
    for (let i = 0; i < data.data.length; i++) {
      let id = data.data[i].id
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
           <button name='artista' value='./detail-artist.html?Id=${id}' class="btn">Ver más</a>
        </div>
        `;
      document.getElementById('topArtists').appendChild(article);
    }

  }


  function createTopAlbums(data) {
    for (let i = 0; i < data.data.length; i++) {

      //let title = data.data[i].picture;
      let image = data.data[i].cover_small;
      let album = data.data[i].title;
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


  await loadApis();

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn'))
          location.href = e.target.value
  })



})