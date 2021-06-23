//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
var generoId = objetoQuery.get('id');



fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+ generoId)
.then(function(response){
    return response.json()
})
.then(function(data){

    console.log(data);
let subtitulo = document.querySelector(".Subtitle")

   subtitulo.innerHTML=`
   ${data.name}
   `
    
}).catch(function(error){
    console.error(error)
})


fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+generoId+"/artists")
.then(function(response){
    return response.json()
})
.then(function(data){

    console.log(data);
    

    let artistaGenero = data.data
    
    let contenedorArtistas = document.querySelector(".MainContent")
    
    
   for (let i = 0; i < 10 ; i++) {
       const artista = artistaGenero[i];
      
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
    
}).catch(function(error){
    console.error(error)
})