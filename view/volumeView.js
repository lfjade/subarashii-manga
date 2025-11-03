export async function renderVolume(dados){
    const tituloVolume=document.getElementById('titulo-volume')
    const sinopse=document.getElementById('sinopse')
    const splashVolume=document.getElementById('splash-volume')

    tituloVolume.textContent=`${dados.titulo}: Volume ${dados.numero}`
    sinopse.textContent=dados.sinopse
    splashVolume.src=dados.splashUrl
    splashVolume.alt=`Splash do volume: ${dados.numero}`

}

export async function setBackground(imgUrl){
    const bgDiv=document.querySelector('#hero .bg-image')
    bgDiv.style.backgroundImage=`url(${imgUrl})`
}

export function cardsDosVolumes(volumes){
    const cardsVolumes=document.getElementById('cardsVolumes')

    volumes.forEach(volume =>{
        const card = document.createElement('div')
        card.classList.add('volume-card')

        const imgVolume=document.createElement('img')
        imgVolume.src=`http://localhost:3000/volumes/splash/${volume.idVolume}`
        imgVolume.alt=`Volume ${volume.numero}`
        card.appendChild(imgVolume)


        const numero = document.createElement('p')
        numero.textContent=`Volume ${volume.numero}`
        card.appendChild(numero)

        cardsVolumes.appendChild(card)
        
        card.addEventListener('click', () =>{
            window.location.href= `volume.html?id=${volume.idVolume}`
        })

    })
}