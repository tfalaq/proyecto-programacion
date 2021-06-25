window.addEventListener('load', function () {


    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo el id del album
    var trackId = objetoQuery.get('id');


    //con la propiedad fetch, traigo el url o endpoint
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + trackId)
        .then(function (response) {
            return response.json()
            //
        })
        .then(function (data) {
            //aca pongo los datos que quiero cambiar

            let contenedorData = document.querySelector(".MainContent")
            let subtitulo = document.querySelector(".Subtitle")
            // imprimo los datos que contiene el track
            let track = data
            console.log(track);
            //luego de declarar la variable con subtitulo, le agrego a la clase .subtitle el titulo que obtengo de la url
            subtitulo.innerHTML = `
    ${track.title}
`
            // a la clase main content le agrego en el html lo que comente mas el album, , artista, nombre, cover y titulo que obtengo de la url
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
            //selecciono la class de play-cancion y le asigno un evento 

            botonPlay.addEventListener("click", function () {

                reproductor.style.display = "block";
                //se usa para cambiar el css
                reproductor.innerHTML = `<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=100%&height=2&color=007FEB&layout=dark&size=medium&type=tracks&id=${track.id}&app_id=1" width="100%" height="62px"></iframe>`
            // le agrego un iframe a la clase reproductor

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
})