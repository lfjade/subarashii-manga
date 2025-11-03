export async function getVolumeManga(idManga){
    try{
        const resposta = await fetch(`http://localhost:3000/volumes/${idManga}`)
        if (!resposta.ok) throw new Error("Erro ao buscar volume.")

        return await resposta.json()

    } catch (erro){
        console.error("Erro no Model:", erro);
        throw erro;
    }
}

export async function getVolumeVolume(idVolume){
    const response=await fetch(`http://localhost:3000/volumes/volume/${idVolume}`)
    if (!response.ok) throw new Error("Erro ao buscar volume.")
    return response.json()
}

export async function getSplash(idVolume){
    const response = await fetch(`http://localhost:3000/volumes/splash/${idVolume}`)
    if (!response.ok) throw new Error ("Erro ao buscar splash.")
        return response
}