import { getVolumeVolume, getSplash } from "../model/volumeModel.js"
import { renderVolume, setBackground } from "../view/volumeView.js"


window.addEventListener('DOMContentLoaded', async () =>{
    const params = new URLSearchParams(window.location.search)
    const idVolume=params.get('id')
    if(!idVolume) return

    try {
        const dados = await getVolumeVolume(idVolume)

        const volumeCorrigido={
            titulo: dados.titulo,
            numero: dados.numero,
            sinopse: dados.sinopse,
            splashUrl: `http://localhost:3000/volumes/splash/${idVolume}`
        }
        

        renderVolume(volumeCorrigido)

        const splashResponse=await getSplash(idVolume)
        const blob = await splashResponse.blob()
        const imgUrl=URL.createObjectURL(blob)
        setBackground(imgUrl)

        document.getElementById('voltar')?.addEventListener('click', () => window.nav.voltar())
        document.getElementById('navEsquerda')?.addEventListener('click', () => console.log("click esquerda"))
        document.getElementById('navDireita')?.addEventListener('click', () => console.log("click direita"))
    } catch (erro){
        console.error("Erro no controller Volume: ", erro)
    }


})