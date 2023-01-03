const express = require('express')
const cors = require('cors')
const port = 3000

const app = express()

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.use(cors())

app.use(express.json())

let movieList = [
    {favorites: [
        {
            id: 001,
            name: 'John Smith'
        },
        {
            id: 002,
            name: 'John John'
        },
        {
            id: 003,
            name: 'John Sainted'
        },
    ]},
    {hype: [
        {
            id: 001,
            name: 'John Smith'
        },
        {
            id: 002,
            name: 'John John'
        },
        {
            id: 003,
            name: 'John Sainted'
        },
    ]}
]

app.route('/api').get((req, res) => res.json({
    movieList
}))

app.route('/api/favorites/:id').get((req, res) => {
    const movieId = req.params.id

    const list = movieList[0].favorites
    
    const movie = list.find(movie => Number(movie.id) === Number(movieId))

    res.json(movie)
})

app.route('/api/hype/:id').get((req, res) => {
    const movieId = req.params.id

    const list = movieList[0].hype
    
    const movie = list.find(movie => Number(movie.id) === Number(movieId))

    res.json(movie)
})

app.route('/api/favorites/').get((req, res) => {
    const list = movieList[0].favorites

    res.json(list)
})

app.route('/api/hype/').get((req, res) => {
    const list = movieList[0].hype

    res.json(list)
})

app.route('/api/favorites/').post((req, res) => {
    const list= movieList[0].favorites

    list.push({
        id: req.body.id,
        name: req.body.title
    })

    res.json('Saved User')
})

