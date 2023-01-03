const express = require('express')
const cors = require('cors')
const port = 3000

const app = express()

const data = require('./movies.json')

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.use(cors())

app.use(express.json())

app.route('/api').get((req, res) => res.json({
    data
}))


app.route('/api/favorites/').get((req, res) => {
    const list = data.favorites
    
    res.json(list)
})

app.route('/api/hype/').get((req, res) => {
    const list = data.hype
    
    res.json(list)
})

app.route('/api/favorites/:id').get((req, res) => {
    const movieId = req.params.id

    const list = data.favorites
    
    const movie = list.find(movie => Number(movie.id) === Number(movieId))

    res.json(movie)
})

app.route('/api/hype/:id').get((req, res) => {
    const movieId = req.params.id

    const list = data.hype
    
    const movie = list.find(movie => Number(movie.id) === Number(movieId))

    res.json(movie)
})


app.route('/api/favorites/').post((req, res) => {
    const list = data.favorites

    list.push({
        id: req.body.id,
        title: req.body.title,
        overview: req.body.overview, 
        backdrop_path: req.body.backdrop_path, 
        poster_path: req.body.poster_path, 
        release_date: req.body.release_date, 
        vote_average: req.body.vote_average
    })

    res.json('Saved User')
})

app.route('/api/hype/').post((req, res) => {
    const list = data.hype

    list.push({
        id: req.body.id,
        title: req.body.title,
        overview: req.body.overview, 
        backdrop_path: req.body.backdrop_path, 
        poster_path: req.body.poster_path, 
        release_date: req.body.release_date, 
        vote_average: req.body.vote_average
    })

    res.json('Saved User')
})

