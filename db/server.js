const express = require('express')
const cors = require('cors')
const knex = require('knex')
const knexconfig = require('./knexfile.js')

const app = express()
app.use(cors())
app.use(express.json())

const db = knex(knexconfig)

app.get('/', (req, res) =>{
    res.send('servidor ok')
})

app.get('/mangas', async (req, res) =>{
    const rows = await db('mangas').select('*')
    res.json(rows)
})

app.get('/mangas/:id', async (req, res) =>{
    const {id}=req.params
    try{
        const manga = await db('mangas').where('idmanga', id).first()

        if (!manga){
            return res.status(404).send("mangá não encontrado.")
        }

        res.send(manga)
    } catch (erro){
        console.error("Erro ao buscar mangá: ", erro)
        res.status(500).send("Erro interno ao buscar mangá.")
    }
})

app.get('/volumes', async (req, res) =>{
    const rows = await db('volumes').select('*')
    res.json(rows)
})

// app.get('/volumes/:idManga', async (req, res) =>{

//     const {idManga}=req.params

//     try{
//         const volumes=await db('volumes').select('idvolume', 'numero', 'sinopse', 'idmanga').where('idmanga', idManga)
//         if(volumes.length===0) {
//             return res.status(404).send("volume não encontrado.")
//         }
//         res.send(volumes)
//     } catch (erro) {
//         console.error("Erro ao buscar volume: ", erro)
//         res.status(500).send("Erro interno ao buscar volume.")
//     }
// })

// app.get('/volumes/numero/:idVolume', async (req, res) =>{
//     const {idVolume}=req.params

//     try{
//         const volume=await db('volumes').where('idvolume', idVolume).first('numero')

//         if(!volume) {
//             return res.status(404).send("Volume não encontrado.")
//         }

//         res.send(String(volume.numero))
//     } catch (erro) {
//         console.error("Erro ao buscar número do volume: ", erro)
//         res.status(500).send("Erro interno ao buscar número do volume")
//     }
// })

// app.get('/volumes/splash/:idVolume', async (req, res) =>{
//     const {idVolume}=req.params

//     try{
//         const splashVolume=await db('volumes').where('idvolume', idVolume).select('splash').first()
//         if(!splashVolume) {
//             return res.status(404).send("Splash não encontrada.")
//         }
//         res.send(splashVolume)
//     } catch (erro) {
//         console.error("Erro ao buscar splash: ", erro)
//         res.status(500).send("Erro interno ao buscar splash.")
//     }
// })

// rota: recuperar de volumes todos os volumes de um mangá, retornar id, número e splash.

app.get('/volumes/:idManga', async (req, res) =>{
    const {idManga} = req.params
    try {
        const volumesParaCard = await db('volumes').select('idVolume', 'numero', 'splash').where('idmanga', idManga)

        if (volumesParaCard.length===0){
            return res.status(404).send("Volumes não encontrados.")
        }

        res.send(volumesParaCard)
    } catch (erro) {
        console.error("Erro ao buscar volumes: ", erro)
        res.status(500).send("Erro interno ao buscar volumes.")
    }
})


app.get('/splash/:id', async (req, res) =>{
    const {id}= req.params
    try{
        const manga=await db('mangas').where('idmanga', id).first()

        if (!manga || !manga.splash){
            return res.status(404).send("Imagem não encontrada.")
        }

        res.setHeader('Content-Type', 'image/png')
        res.send(manga.splash)
    } catch (erro){
        console.error("Erro ao buscar splash: ", erro)
        res.status(500).send("Erro interno ao buscar imagem.")
    }
})


app.get('/mangas/:id/generos', async (req, res) => {
    const { id } = req.params;

    try {
        const generos = await db('manga_has_generos as mg')
            .join('generos as g', 'mg.idgenero', '=', 'g.idgenero')
            .where('mg.idmanga', id)
            .select('g.idgenero', 'g.nome');

        if (generos.length === 0) {
            return res.status(404).send("Nenhum gênero encontrado para este mangá.");
        }

        res.json(generos.map(g => g.nome));
    } catch (erro) {
        console.error("Erro ao buscar gêneros do mangá:", erro);
        res.status(500).send("Erro interno ao buscar gêneros do mangá.");
    }
});

app.listen(3000, () =>{
    console.log('servidor rodando na porta 3000.')
})
