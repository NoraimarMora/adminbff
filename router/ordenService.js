var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://msordenes'
const api = apiAdapter(BASE_URL)

/** Ordenes **/
// Obtener todas las ordenes
router.get('/orders', (req, res) => {
  api.get('/ordenes').then(resp => {
    res.send(resp.data)
  })
})

// Obtener detalle de una orden
router.get('/orders/:id', (req, res) => {
  api.get('/ordenes/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Actualizar una orden
router.put('/orders/:id', (req, res) => {
  api.put('/ordenes/update/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

/** Estados **/
// Obtener todos los estados
router.get('/statuses', (req, res) => {
  api.get('/estados').then(resp => {
    res.send(resp.data)
  })
})

// Obtener info de un estado
router.get('/statuses/:id', (req, res) => {
  api.get('/estados/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Crear un estado
router.post('/statuses', (req, res) => {
  api.post('/estados', req.body).then(resp => {
    res.send(resp.data)
  })
})

// Actualizar un estado
router.put('/statuses/:id', (req, res) => {
  api.put('/estados/update/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

// Eliminar un estado
router.put('/statuses/:id', (req, res) => {
  api.put('/estados/delete/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router