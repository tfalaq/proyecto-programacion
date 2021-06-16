window.addEventListener('load', function () {
  let urlArtist = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/`
  async function RealizarPeticion(url, mensajeError) {
    try {
      let response = await fetch(url)
      let respuesta = await response.json()
      return respuesta
    } catch (error) {
      console.log(`Ocurrio un error en ${mensajeError}, ${error}`);
    }
  }

  function leerQueryString() {
    //obtiene la queryString Completa
    const querystring = window.location.search
    console.log(querystring);
    //convierte la query string en objeto
    const params = new URLSearchParams(querystring)
    console.log(params);
    let id = params.get('Id')
    return id
  }

  async function BuscarArtista() {
    let respuesta = await RealizarPeticion(`${urlArtist}${leerQueryString()}`, 'DetailArtist')
    let albums = await RealizarPeticion(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${respuesta.id}/albums?limit=5`)
     CreaPlayList(albums.data)
    let imagenArtista = document.querySelector('.card-Artist img')
    imagenArtista.src = respuesta.picture_xl
    let detallesArtista = document.querySelector('.Subtitle-detail b')
    detallesArtista.innerHTML = respuesta.name


    console.log(albums);
  }

  function CreaPlayList(albums) {
    albums.map(album=>{
      let article=document.createElement('article');
      article.classList.add('card')
      let infoCard=document.createElement('div')
      infoCard.classList.add('informacion')
      infoCard.classList.add('details')
      let title=document.createElement('h1')
      title.innerText=album.title
      let img=document.createElement('img')
      img.src=album.cover_big
      infoCard.appendChild(title)
      infoCard.appendChild(img)
      article.appendChild(infoCard)

      document.querySelector('#topTracks').appendChild(article)

      // <article class="card">
      //       <div class="informacion details">
      //           <h1>Yonaguni</h1>
      //           <img src="https://cdns-images.dzcdn.net/images/cover/3aa544b9653b10aedcf7eb41d61b22df/56x56-000000-80-0-0.jpg" alt="" srcset="">
      //       </div>
      //     </article>
    })
  }




  BuscarArtista()
})