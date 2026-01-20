import { getListaMangas } from "../model/homeModel.js"
import { renderMangas } from "../view/homeView.js"

window.addEventListener('DOMContentLoaded', async () =>{
    const container = document.getElementById('hero')

    try{
        const mangas = await getListaMangas()
        renderMangas(mangas, container, (id) =>{
            window.location.href = `manga.html?id=${id}`

        })

    } catch (erro){
        console.error("Erro ao carregar mangás no Controller:", erro)
        container.innerHTML="<p>Erro ao carregar mangás.</p>"
    }
})