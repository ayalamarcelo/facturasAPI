const fs = require('fs');
const path = require('path');
const api = require('../data/api.json');
const { create } = require('domain');

const getAllFacturas = (req, res) => {
    res.json(api);
};

const getFacturaById = (req, res) => {
    const factura = api.find(f => f.id == req.params.id);
    if (factura) {
        res.json(factura);
    } else {
        res.status(404).send('Factura not found');
    }
};

const createFactura = (req, res) => {
    const nuevaFactura = req.body;

    if (!nuevaFactura.id || !nuevaFactura.nombre || !nuevaFactura.url) {
        return res.status(400).send('Necessary data is missing!');
    }

    api.push(nuevaFactura);

    fs.writeFileSync(path.join(__dirname, '../data/api.json'), JSON.stringify(api, null, 2));

    res.status(201).json(nuevaFactura);
};

const updateFactura = (req, res) => {
    const facturaId = re.params.id;
    const facturaIndex = api.findIndex(f => f.id == facturaId);

    if (facturaIndex == -1) {
        return res.status(404).send('Factura not found!');
    }

    api[facturaIndex] = { ...api[facturaIndex], ...req.body };

    fs.writeFileSync(path.join(__dirname, '../data/api.json'), JSON.stringify(api, null, 2));

    res.json(api[facturaIndex]);
};

const deleteFactura = (req, res) => {
    const facturaId = req.param.id;
    const facturaIndex = api.findIndex(f => f.id == facturaId);

    if (facturaIndex == -1) {
        return res.status(404).send('Factura not found!');
    }

    api.splice(facturaIndex, 1);

    fs.writeFileSync(path.join(__dirname, '../data/api.json'), JSON.stringify(api, null, 2));

    res.status(204).send();
};

module.exports = {
    getAllFacturas,
    getFacturaById,
    createFactura,
    updateFactura,
    deleteFactura
};