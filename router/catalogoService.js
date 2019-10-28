var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://mscatalogo'
const api = apiAdapter(BASE_URL)

/** Categorias **/
// Obtener todas las categorias
router.get('/categories', (req, res) => {
  api.get('/categorias').then(resp => {
    res.send(resp.data)
  })
})

// Obtener info de una categoria
router.get('/categories/:id', (req, res) => {
  api.get('/categorias/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Crear una categoria
router.post('/categories', (req, res) => {
  api.post('/categorias', req.body).then(resp => {
    res.send(resp.data)
  })
})

// Actualizar una categoria
router.put('/categories/:id', (req, res) => {
  api.put('/categorias/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

// Eliminar una categoria
router.delete('/categories/:id', (req, res) => {
  api.delete('/categorias/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

/** Productos **/
// Obtener todos los productos
router.get('/products', (req, res) => {
  api.get('/productos').then(resp => {
    res.send(resp.data)
  })
})

// Obtener info de un producto
router.get('/products/:id', (req, res) => {
  api.get('/productos/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Crear un producto
router.post('/products', (req, res) => {
  api.post('/productos', req.body).then(resp => {
    res.send(resp.data)
  })
})

// Actualizar un producto
router.put('/products/:id', (req, res) => {
  api.put('/productos/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

// Eliminar un producto
router.delete('/products/:id', (req, res) => {
  api.delete('/productos/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router