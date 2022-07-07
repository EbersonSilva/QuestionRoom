const express = require('express')
const route = require('./route')
const path = require('path')

const server = express() /***Executando o express */

server.set('view engine', 'ejs')

server.use(express.static('public'))

server.set(
  'views',
  path.join(__dirname, 'views')
) /*caminho ate chegar na pasta views  */

// Linha para decodificar a senha que vem do formulario
server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3000, () => console.log('Rodando'))
