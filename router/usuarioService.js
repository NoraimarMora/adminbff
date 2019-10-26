var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const isAuth = require('../middlewares');

const BASE_URL = 'http://msusuarios'
const api = apiAdapter(BASE_URL)

/** Direcciones **/
// Crear una direccion
router.post('/addresses', (req, res) => {
  api.post('/direcciones', req.body).then(resp => {
    res.send(resp.data)
  })
})

/** Clientes **/
// Obtener todos los clientes
router.get('/clients', (req, res) => {
  api.get('/clientes').then(resp => {
    res.send(resp.data)
  })
})

// Obtener info de un cliente
router.get('/clients/:id', (req, res) => {
  api.get('/clientes/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Crear un cliente
router.post('/clients', (req, res) => {
  api.post('/clientes', req.body).then(resp => {
    res.send(resp.data)
  })
})

// Actualizar un cliente
router.put('/clients/:id', (req, res) => {
  api.put('/clientes/update/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

// Eliminar un cliente
router.delete('/clients/:id', (req, res) => {
  api.delete('/clientes/delete/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

/** Repartidores **/
// Obtener todos los repartidores
router.get('/couriers', (req, res) => {
  api.get('/repartidores').then(resp => {
    res.send(resp.data)
  })
})

// Obtener info de un repartidor
router.get('/couriers/:id', (req, res) => {
  api.get('/repartidores/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Crear un repartidor
router.post('/couriers', (req, res) => {
  api.post('/repartidores', req.body).then(resp => {
    res.send(resp.data)
  })
})

// Actualizar un repartidor
router.put('/couriers/:id', (req, res) => {
  api.put('/repartidores/update' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

// Eliminar un repartidor
router.delete('/couriers/:id', (req, res) => {
  api.delete('/repartidores/delete/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

/** Administradores **/
// Obtener todos los administradores
router.get('/administrators', (req, res) => {
  api.get('/administradores').then(resp => {
    res.send(resp.data)
  })
})

// Obtener info de un administrador
router.get('/administrators/:id', (req, res) => {
  api.get('/administradores/' + req.params.id).then(resp => {
    res.send(resp.data)
  })
})

// Crear un administrador
router.post('/administrators', (req, res) => {
  api.post('/administradores', req.body).then(resp => {
    res.send(resp.data)
  })
})

// Login para administradores
router.post('/login', (req, res) => {
  api.post('/administradores/login', req.body).then(resp => {
    res.send(resp.data)
  })
})

// Actualizar un administrador
router.put('/administrators/:id', (req, res) => {
  api.put('/administradores/update/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

// Eliminar un administrador
router.delete('/administrators/:id', (req, res) => {
  api.delete('/administradores/delete/' + req.params.id, req.body).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router