const express = require('express')
const db = require('./db')
const cors = require('cors')
const path = require('path')
const app = express();
const PORT = 3000
const clientPath = path.resolve(__dirname, '../client/dist')


app.use(express.static(clientPath))
app.use(cors())


app.get('/', (req, res) => {
    
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
    })

   

 app.listen(PORT, () => {
     console.log(`Server is live on port ${PORT}`)
        })

app.post('/api/links', db.createLinks)        
app.get('/api/links', db.getLinks)
app.delete('/users/:id', db.deleteLinks)
app.put('/users/:id', db.updateLinks)


    

