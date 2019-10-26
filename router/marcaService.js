var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://msmarcas'
const api = apiAdapter(BASE_URL)

/** Marcas **/
// Obtener todas las marcas
router.get('/brands', (req, res) => {
  api.get('/marcas').then(resp => {
    res.send(resp.data)
  })
})

// Obtener info de una marca
router.get('/brands/:id', (req, res) => {
  api.get('/marcas/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Crear una marca
router.post('/brands', (req, res) => {
  api.post('/marcas').then(resp => {
    res.send(resp.data)
  })
})

// Actualizar una marca
router.put('/brands', (req, res) => {
  api.put('/marcas/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

// Eliminar una marca
router.put('/brands', (req, res) => {
  api.put('/marcas/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

/** Tiendas **/
// Obtener todas las tiendas
router.get('/stores', (req, res) => {
  api.get('/tiendas').then(resp => {
    res.send(resp.data)
  })
})

// Obtener info de una tienda
router.get('/stores/:id', (req, res) => {
  api.get('/tiendas/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Crear una tienda
router.post('/stores', (req, res) => {
  api.post('/tiendas').then(resp => {
    res.send(resp.data)
  })
})

// Actualizar una tienda
router.put('/stores', (req, res) => {
  api.put('/tiendas/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

// Eliminar una tienda
router.put('/stores', (req, res) => {
  api.put('/tiendas/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router