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

app.get('/splash/:id', async (req, res) =>{
    const id=req.params.id

    try {
        const manga = await db('mangas').where(idmanga, id).first()

        if (manga && manga.splash){
            res.set('Content-Type', 'image/png')
            res.send(manga.splash)
        } else {
            res.status(404).send("Imagem não encontrada.")
        }
    } catch (erro){
        console.error(erro)
        res.status(500).send("Erro ao carregar imagem.")
    }
})

const path = require('path')
app.use('/imagens', express.static(path.join(__dirname, 'public', 'imagens')))

app.listen(3000, () =>{
    console.log('servidor rodando na porta 3000.')
})
