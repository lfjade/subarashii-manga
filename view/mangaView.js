import { cardsDosVolumes } from "./volumeView.js"

export async function renderManga(manga, volumes){
    const splashManga=document.getElementById('splashmanga')
    const tituloManga = document.getElementById('titulo')
    const sinopseManga=document.getElementById('sinopse')
    const escrito_por=document.getElementById('escrito_por')
    const publicado_por=document.getElementById('publicado_por')
    const lancamento=document.getElementById('lancamento')
    const n_volumes=document.getElementById('n_volumes')
    const generos=document.getElementById('generos')
    const navEsquerda=document.getElementById('navEsquerda')
    const navDireita=document.getElementById('navDireita')
    const cardsVolumes=document.getElementById('cardsVolumes')

    const btnFechar=document.getElementById('voltar')
    if(btnFechar) btnFechar.addEventListener('click', () => window.nav.voltar())

    const img = document.createElement('img')
    img.src=`http://localhost:3000/splash/${manga.id}`
    img.alt=manga.titulo
    splashManga.appendChild(img)




    tituloManga.textContent=manga.titulo
    sinopseManga.textContent=manga.sinopse
    escrito_por.textContent=`Escrito por: ${manga.escrito_por}`
    publicado_por.textContent=`Publicado por: ${manga.publicado_por}`
    lancamento.textContent=`Lançado em: ${manga.lancamento}`
    n_volumes.textContent=`Número de volumes: ${manga.n_volumes}`
    generos.textContent=`Gêneros: `
    
    manga.generos.forEach(g =>{
        const p = document.createElement('p')
        p.classList.add('generos-p')
        p.textContent=g
        generos.appendChild(p)
    })




    let v0=0
    let vf=8

    renderVolumes()

    navEsquerda.addEventListener('click', () =>{
        if (v0>0){
            v0 -= 1
            vf -= 1
            renderVolumes()   
        }
    })

    navDireita.addEventListener('click', () =>{
        if (vf<volumes.length){
            v0 +=1
            vf +=1
            renderVolumes()   
        }
    })
    
    function renderVolumes(){
        const volumesLimitados=volumes.slice(v0, vf)
        cardsVolumes.innerHTML=''
        cardsDosVolumes(volumesLimitados)
    }
    
}