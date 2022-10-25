const express = require('express')
const app = express()
const cors= require('cors')
app.use(cors())
const PORT = 8000

let moroccans ={
    'Touria Chaoui':{
        'leaving status' :'dead',
        'field' :'pilot',
        'birthYear' :1936,
        'deathYear' :1951
    },
    
    'Asmaa Boujibar':{
        'leaving status' :'alive',
        'field' :'NASA researcher',
        'birthYear' :1984,
        'DeathYear' :''
    },
    'unknown':{
        'age' :'unknown',
        'field' :'unknown',
        'birthName' :'unknown',
        'birthLocation' :'unknown'
        }
}
app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/moroccans/:moroccan', (request, response) =>{
    const f_moroccan = request.params.moroccan.toLowerCase()

    if(moroccans[f_moroccan]){
        response.json(moroccans[f_moroccan])

    }
    else
    {
        response.json(moroccans['unknown'])
    }
    console.log(response.json(moroccans[f_moroccan]))
})
app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})