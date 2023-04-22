const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const createValidator = require("../validations/createValidator")

router.get('/movies', moviesController.list); //listo
router.get('/movies/new', moviesController.new); //listo
router.get('/movies/recommended', moviesController.recomended); //listo
router.get('/movies/detail/:id', moviesController.detail); //listo
//Rutas exigidas para la creación del CRUD
router.get('/movies/add',createValidator , moviesController.add); //listo
router.post('/movies/create', moviesController.create); //listo
router.get('/movies/edit/:id', moviesController.edit); //listo
router.post('/movies/update/:id', moviesController.update); //listo
router.get('/movies/delete/:id', moviesController.delete); //listo
router.post('/movies/delete/:id', moviesController.destroy); //listo

module.exports = router;