
      // <article class="card">
      //       <div class="informacion details">
      //           <h1>Yonaguni</h1>
      //           <img src="https://cdns-images.dzcdn.net/images/cover/3aa544b9653b10aedcf7eb41d61b22df/56x56-000000-80-0-0.jpg" alt="" srcset="">
      //       </div>
      //     </article>
 //obtengo el query string
 let queryString = window.location.search

 //paso de ese texto a un objeto
 let objetoQuery = new URLSearchParams(queryString);
 
 //ahora si obtengo el id del album
 var artistId = objetoQuery.get('id');
 
 
 fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" +artistId)
     .then(function(response){
         return response.json()
     })
     .then(function(data){
           let subtitulo = document.querySelector('.Subtitle')
 
           subtitulo.innerHTML= `${data.name}`
         console.log(data);
         let contenedorData = document.querySelector("#topTracks");
         let artista = data
         
         contenedorData.innerHTML =`
             <article class="card">
                         <div class="informacion details">
                         <h1>Cantidad de Albums : ${artista.nb_album}</h1>
                         <h1>Fans : ${artista.nb_fan}</h1>
                         <h1> Type : ${artista.type}</h1>
                         <img src="${artista.picture_big}" alt="" srcset="">
                         </div>
             </article>`
 
     })
 
     fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+artistId+"/albums")
     .then(function(response){
         return response.json()
     })
     .then (function(data){
     let Albumes = data.data
     let contenedorAlbumes= document.querySelector("#topAlbums2");
     console.log(Albumes);
     for (let i = 0; i < 5; i++) {
           const album = Albumes[i];
           
          contenedorAlbumes.innerHTML += `
             
         
             <div class="card">
                 <a href="detail-album.html?id=${album.id}"><img src="${album.cover_big}" alt="Imagen de album"></a>
                 <h3 class="texto-album">${album.title}</h3>
             </div>
             
     `
     }
    
     }).catch(function(error){
         console.error(error)
     })