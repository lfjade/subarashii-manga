import { getVolumeVolume, getSplash } from "../model/volumeModel.js"
import { renderVolume, setBackground } from "../view/volumeView.js"


window.addEventListener('DOMContentLoaded', async () =>{
    const params = new URLSearchParams(window.location.search)
    let idVolume=params.get('id')
    if(!idVolume) return
    let dados

    try {
        dados = await getVolumeVolume(idVolume)

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
        document.getElementById('navEsquerda')?.addEventListener('click', async () => {
            const novoId = Number(idVolume) - 1
            if (novoId < 1) return

            const dados = await getVolumeVolume(novoId)
            const volumeCorrigido = {
                titulo: dados.titulo,
                numero: dados.numero,
                sinopse: dados.sinopse,
                splashUrl: `http://localhost:3000/volumes/splash/${novoId}`
            }

            renderVolume(volumeCorrigido)
            idVolume = novoId // atualiza o id atual
        })

        document.getElementById('navDireita')?.addEventListener('click', async () => {
            const novoId = Number(idVolume) + 1
            if (novoId >= volumes.length) return

            const dados = await getVolumeVolume(novoId)
            const volumeCorrigido = {
                titulo: dados.titulo,
                numero: dados.numero,
                sinopse: dados.sinopse,
                splashUrl: `http://localhost:3000/volumes/splash/${novoId}`
            }

            renderVolume(volumeCorrigido)
            idVolume = novoId // atualiza o id atual
        })
    } catch (erro){
        console.error("Erro no controller Volume: ", erro)
    }


})