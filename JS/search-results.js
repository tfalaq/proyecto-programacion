window.addEventListener('load', function () {
    let queryStringObj = new URLSearchParams(location.search);
    let search = queryStringObj.get('search');

    const container = document.querySelector('#topTracks')
    const loader = document.querySelector('.loader')
    const subtitle = document.querySelector('.Subtitle')
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + search)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            loader.style.display = 'none'
            subtitle.innerHTML += search 
            data.data.forEach(track => {
                container.innerHTML += `<article class="card">
                                            <div class="card">
                                                <div class="avatar" style="background-image: url('../img/britney-in-the-zone.jpeg')"></div>
                                                <div>                                                    
                                                    <p><a class="infosingle" href="detail-track.html?id=${track.id}">${track.title}</a></p>
                                                    <p id=infosingle>
                                                        <a class="infosingle" href="detail-artist.html?id=${track.artist.id}"> ${track.artist.name}</a></p>
                                                    <p id=infosingle>
                                                        <a class="infosingle" href="detail-album.html?id=${track.album.id}"> ${track.album.title} </a></p>
                                                    <p id=infosingle>
                                                    <p> <a href="playlist.html" class="formap">Mi playlist</a> </p>
                                                    <audio id=audios src="${track.preview}" controls="">
                                                    </audio>
                                                </div>
                                            </div>
                </article>`
            });
        })
}) 
    /* <article class="card">
            <div class="avatar" style="background-image: url(${artista.picture_big})"></div>
            <div class="informacion">
              <h1>${artista.name}</h1>
              
              <h3 id=infosingle>
                Type:${artista.type} </h3>
              <form method="get" action="detail-album.html">
                <button class="btn" type="submit">Ver más</button>
              </form>
            </div>
            
            </article>  */
    /* <div class="card">
            <div class="avatar" style="background-image: url('../img/britney-in-the-zone.jpeg')"></div>
            <div>
              <p>Toxic</p>
              <p id=infosingle>
                <a class="infosingle" href="detail-artist.html"> Britney Spears</a></p>
              <p id=infosingle>
                <a class="infosingle" href="detail-album.html"> In The Zone </a></p>
              <p id=infosingle>
                <a href="genres.html" class="infosingle"> Pop </a></p>
              <a id=addplaylist href=""> Add to Playlist</a>
              <p> <a href="playlist.html" class="formap">Mi playlist</a> </p>
              <audio id=audios scr="audios/britneytoxic.mp3" controls="">
              </audio>
            </div>
          </div> */
