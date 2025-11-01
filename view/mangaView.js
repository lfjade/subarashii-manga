import { cardsDosVolumes } from "./volumeView.js"

export async function renderManga(manga, volumes){
    const splashManga=document.getElementById('splashmanga')
    //const mangaContent=document.getElementById('mangacontent')
    const tituloManga = document.getElementById('titulo')
    const sinopseManga=document.getElementById('sinopse')
    const escrito_por=document.getElementById('escrito_por')
    const publicado_por=document.getElementById('publicado_por')
    const lancamento=document.getElementById('lancamento')
    const n_volumes=document.getElementById('n_volumes')
    const generos=document.getElementById('generos')
    const menu=document.getElementById('menu')

    const btnFechar=document.getElementById('voltar')
    if(btnFechar) btnFechar.addEventListener('click', () => window.nav.voltar())

    const img = document.createElement('img')
    img.src=`http://localhost:3000/splash/${manga.id}`
    img.alt=manga.titulo
    splashManga.appendChild(img)

    // const volumesLimitados=volumes.slice(0,7)
    // cardsDosVolumes(volumesLimitados)
    cardsDosVolumes(volumes)

    tituloManga.textContent=manga.titulo
    sinopseManga.textContent=manga.sinopse
    escrito_por.textContent=`Escrito por: ${manga.escrito_por}`
    publicado_por.textContent=`Publicado por: ${manga.publicado_por}`
    lancamento.textContent=`Lançado em: ${manga.lancamento}`
    n_volumes.textContent=`Número de volumes: ${manga.n_volumes}`
    generos.textContent=`Gêneros: ${manga.generos}`

    

}