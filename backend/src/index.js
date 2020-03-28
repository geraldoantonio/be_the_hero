const express = require('express')
const app = express()
const PORT = 3333

app.use('/', (req, res) => {
    res.json({
        "evento": "Semana OmniStack#11",
        "aluno": "Geraldo Jr"
    })
})

app.listen(PORT, () => {
    console.log(`App run in http://localhost:${PORT}`)
})