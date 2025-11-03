class Manga {
    constructor({ idmanga, titulo, sinopse, escrito_por, publicado_por, lancamento, n_volumes }) {
        this.id = idmanga;
        this.titulo = titulo;
        this.sinopse = sinopse;
        this.escrito_por = escrito_por;
        this.publicado_por = publicado_por;
        this.lancamento = lancamento;
        this.n_volumes = n_volumes;
    }
}

export async function getManga(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/mangas/${id}`);
        if (!resposta.ok) throw new Error("Erro ao buscar mangá.");

        const dados = await resposta.json();

        const manga = new Manga(dados);

        return manga;
    } catch (erro) {
        console.error("Erro no Model:", erro);
        throw erro;
    }
}

export async function getMangaGeneros(id) {
    try {
        const resposta = await fetch(`http://localhost:3000/mangas/${id}/generos`);
        if (!resposta.ok) throw new Error("Erro ao buscar gêneros do mangá.");

        return await resposta.json()
    } catch (erro) {
        console.error("Erro no Model (getMangaGeneros):", erro);
        throw erro;
    }
}

export async function getVolumesPorManga(idManga){
    const res=await fetch(`http://localhost:3000/volumes/manga/${idManga}`)
    if (!res.ok) throw new Error ("Volumes não encontrados.")
    return await res.json()
}