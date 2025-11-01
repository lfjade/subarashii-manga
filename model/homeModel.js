export async function getListaMangas() {
    try{
        const resposta = await fetch('http://localhost:3000/mangas')
        if(!resposta.ok) throw new Error("Erro ao buscar mangás.")
        const mangas = await resposta.json()
        return mangas
    } catch (erro) {
        console.error("Erro no Model: ", erro)
        throw erro
    }
}