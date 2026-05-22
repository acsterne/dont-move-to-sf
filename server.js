import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()
const dir = path.dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(dir, 'dist')))
app.get('*', (_, res) => res.sendFile(path.join(dir, 'dist', 'index.html')))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Running on ${port}`))
