window.addEventListener('DOMContentLoaded', async () =>{
    const container = document.getElementById('hero')

    try{
        const resposta = await fetch ('http://localhost:3000/mangas')
        const mangas = await resposta.json()

        mangas.forEach(manga =>{
            const wrapper=document.createElement('div')
            wrapper.classList.add('wrapper')

            const card = document.createElement('div')
            card.classList.add('card')

            const img = document.createElement('img')
            img.src=`http://localhost:3000/splash/${manga.idmanga}`
            img.alt=manga.titulo
            card.appendChild(img)

            const titulo = document.createElement('span')
            titulo.textContent=manga.titulo

            wrapper.appendChild(card)
            wrapper.appendChild(titulo)
            container.appendChild(wrapper)
        })
    } catch (erro){
        console.error("Erro ao carregar splashes.")
    }
})