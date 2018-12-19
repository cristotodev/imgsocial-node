const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');
const imageController = require('../controllers/images');

module.exports = app => {
    router.get('/', homeController.index)
    router.get('/images/:image_id', imageController.index);
    router.post('/images', imageController.create);
    router.post('/images/:image_id/like', imageController.like);
    router.post('/images/:image_id/comment', imageController.comment);
    router.delete('/images/:image_id', imageController.delete);

    app.use(router);
}