import { setBackground } from "../view/volumeView.js"
import { renderVolume } from "../view/volumeView.js"
window.addEventListener('DOMContentLoaded', async () =>{
    const params = new URLSearchParams(window.location.search)
    const idVolume=params.get('id')
    if(!idVolume) {
        console.warn("Nenhum iD de volume na URL")
        return
    }

    const volume = {idVolume: idVolume}
    await setBackground(volume)


    
})