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
        
    })
}