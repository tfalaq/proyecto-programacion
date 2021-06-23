window.addEventListener('load', function(){
    const container = document.querySelector('.MainContent')
    const clear = document.querySelector('.delete')
    if (window.localStorage.getItem('list')) {
        let tracks = JSON.parse(window.localStorage.getItem('list'))
        tracks.forEach(track => {
            container.innerHTML += `<div class="card">
            <div class="avatar" style="background-image: url('../img/britney-in-the-zone.jpeg')"></div>
            <div>
              <p>${track.title}</p>
              <p id=infosingle>
               <a class="infosingle" href="detail-artist.html?id=${track.artist.id}"> ${track.artist.name}</a></p>
              <p id=infosingle>
               <a class="infosingle" href="detail-album.html?id=${track.album.id}"> ${track.album.title}</a></p>
              <p id=infosingle>
                <audio id=audios src="${track.preview}" controls="">
              </audio>
         </div>`
        });
    }


    clear.addEventListener('click', function(){
        window.localStorage.removeItem('list')
    })
    
})