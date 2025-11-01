export function renderMangas(mangas, container){
    container.innerHTML = ''

    mangas.forEach(manga =>{
        const wrapper=document.createElement('div')
        wrapper.classList.add('wrapper')
    
        const card = document.createElement('div')
        card.classList.add('card')
        card.dataset.id = manga.idmanga;
    
        const img = document.createElement('img')
        img.src=`http://localhost:3000/splash/${manga.idmanga}`
        img.alt=manga.titulo
        card.appendChild(img)
    
        const titulo = document.createElement('span')
        titulo.textContent=manga.titulo
    
        wrapper.appendChild(card)
        wrapper.appendChild(titulo)
        container.appendChild(wrapper)
    
        card.addEventListener('click', () =>{
            const idManga = card.dataset.id
            window.location.href= `manga.html?id=${idManga}`
    
        })
    })

}