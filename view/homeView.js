window.addEventListener('DOMContentLoaded', async () =>{
    const container = document.getElementById('hero')

    try{
        const resposta = await fetch ('http://localhost:3000/mangas')
        const mangas = await resposta.json()

        mangas.forEach(manga =>{
            const card = document.createElement('div')
            card.classList.add('card')

            const img = document.createElement('img')
            img.src=`http://localhost:3000/splash/${manga.idmanga}`
            img.alt=manga.titulo

            const titulo = document.createElement('span')
            titulo.textContent=manga.titulo

            card.appendChild(img)
            card.appendChild(titulo)
            container.appendChild(card)
        })
    } catch (erro){
        console.error("Erro ao carregar splashes.")
    }
})