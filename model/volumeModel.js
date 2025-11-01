class Volume{
    constructor({ idvolume, numero, sinopse, idmanga}){
        this.idvolume=idvolume
        this.numero=numero
        this.sinopse=sinopse
        this.idManga=idmanga
    }

}

export async function getVolume(idManga){
    try{
        const resposta = await fetch(`http://localhost:3000/volumes/${idManga}`)

        if (!resposta.ok) throw new Error("Erro ao buscar volume.")

        const dados = await resposta.json();

        const volume = new Volume(dados)

        return volume
    } catch (erro){
        console.error("Erro no Model:", erro);
        throw erro;
    }
}