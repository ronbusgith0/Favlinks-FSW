
const express = require('express')
const path = require('path')
const app = express();
const PORT = 3000
const clientPath = path.resolve(__dirname, '../client/dist')
app.use(express.static(clientPath))
app.get('/', (req, res) => {
    // we'll do some stuff here
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
  })

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  })

  app.get('/api/links', (req, res) => {
    pool.query('SELECT * FROM favlinks', (error, results) => {
    if (error) {
    throw error
    }
    res.status(200).json(results.rows)
    })
    })

    app.post('/api/links', (req, res) => {
      pool.query('INSERT INTO links (url, name)', (error, results) => {
      if (error) {
      throw error
      }
      res.status(200).json(results.rows)
      })
      })

      app.post('/api/links/:id', (req, res) => {
        pool.query('UPDATE favlinks, SET link = ""', (error, results) => {
        if (error) {
        throw error
        }
        res.status(200).json(results.rows)
        })
        })

        app.post('/api/links/:id', (req, res) => {
          pool.query('DELETE FROM favlinks', (error, results) => {
          if (error) {
          throw error
          }
          res.status(200).json(results.rows)
          })
          })

          const getLinks = async () => {
            try {
            // make a request to our server to get the links
            const response = await fetch('/api/links')
            // convert the response to json
            const data = await response.json()
            /*
            here you can do something with the data
            */
            } catch (error) {
              console.error(error)
            }
            }
            


    

