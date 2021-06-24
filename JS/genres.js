window.addEventListener('load', function(){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
    
    let contenedorGeneros = document.querySelector(".MainContentGenre");
    let generos = data.data
    
    console.log(generos);
    
    
    for (const genero of generos) {
        contenedorGeneros.innerHTML +=
        `
          <div class="card">
            <div class="avatar" style="background-image: url('${genero.picture_big}')"></div>
            <div>
              <h1>${genero.name}</h1>
              <a class="btn" href="detail-genres.html?id=${genero.id}"> Ver Más</a>
            </div>
          </div>
        
        `
    }
    
    
    
    }).catch(function(error){
        console.error(error)
    })
})