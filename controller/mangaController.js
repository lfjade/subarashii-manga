import { getManga, getMangaGeneros, getVolumesPorManga } from "../model/mangaModel.js";
import { renderManga } from "../view/mangaView.js";

window.addEventListener('DOMContentLoaded', async () =>{
    const params = new URLSearchParams(window.location.search);
    const idManga = params.get('id');

    if (!idManga) return;

    try {
        await carregarManga(idManga)
    } catch (erro) {
        console.error('Erro ao carregar mangá:', erro);
        const contentDiv = document.getElementById('mangacontent');
        contentDiv.innerHTML = "<p>Erro ao carregar os dados do mangá.</p>";
    }
})

export async function carregarManga(id){
    try {
        const manga = await getManga(id)
        const generos = await getMangaGeneros(id)

        const volumes = await getVolumesPorManga(id)
        manga.generos=generos
        renderManga(manga, volumes)
    } catch (erro){
        console.error("Erro no Controller:", erro)
    }
}