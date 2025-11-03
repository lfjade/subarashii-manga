import { getManga, getMangaGeneros, getVolumesPorManga } from "../model/mangaModel.js";
import { renderManga, renderVolumesDoManga } from "../view/mangaView.js";

window.addEventListener('DOMContentLoaded', async () =>{
    const params = new URLSearchParams(window.location.search);
    const idManga = params.get('id');

    if (!idManga) return;


    try{
        const manga=await carregarManga(idManga)
        const volumes = await getVolumesPorManga(idManga)
        renderManga(manga)
        renderVolumesDoManga(volumes)
    } catch (erro){
        console.error("Erro ao carregar os dados do mangá.")
        return
    }
   
    let v0 = 0
    let vf = 8

    document.getElementById('navEsquerda')?.addEventListener('click', () => {
        if (v0 > 0) {
            v0--
            vf--
        }
    })

    document.getElementById('navDireita')?.addEventListener('click', () => {
        if (vf < volumes.length) {
            v0++
            vf++
        }
    })

    document.getElementById('voltar')?.addEventListener('click', () => window.nav.voltar())

})

export async function carregarManga(id){
    try {
        const manga = await getManga(id)
        const generos = await getMangaGeneros(id)
        manga.generos=generos
        return manga
    } catch (erro){
        console.error("Erro no Controller:", erro)
    }
}