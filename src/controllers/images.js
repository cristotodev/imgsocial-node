const path = require('path');
const { randomName } = require('../helpers/libs');
const fs = require('fs-extra');

const ctrl = {}

ctrl.index = (req, res) => {

};

ctrl.create = async(req, res) => {
    const extension = path.extname(req.file.originalname).toLowerCase();
    const imageTempPath = req.file.path;
    const targetPath = path.resolve(`src/public/upload/${randomName()}${extension}`);

    if (extension === '.png' || extension === '.jpg' || extension === '.jpeg' || extension === '.gif') {
        await fs.rename(imageTempPath, targetPath);
    }
    res.send('works!');
};

ctrl.like = (req, res) => {

};

ctrl.comment = (req, res) => {

};

ctrl.delete = (req, res) => {

};

module.exports = ctrl;