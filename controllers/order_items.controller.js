/**
 * @author daferarte
 * @version 1.0.0
 * 
 * Controlador de ordenes items
 * Este archivo define los controladores de ordenes items
 */

const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowOItems = async (req = request, res = response) => {
    const oItems = await prisma.orderItems.findMany()
        .catch(err => {
            return err.message;
        }).finally(async () => {
            await prisma.$disconnect();
        });

    res.json({
        oItems
    });
};

const AddOItem = async (req = request, res = response) => {
    const { orderID, productID, quantity } = req.body;

    const result = await prisma.orderItems.create({
        data: {
            orderID,
            productID,
            quantity
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        result
    });
};

const ShowOItem = async (req = request, res = response) => {
    const { id } = req.params;

    const oItem = await prisma.orderItems.findUnique({
        where: {
            id: Number(id)
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        oItem
    });
};

const EditOItem = async (req = request, res = response) => {
    const { id } = req.params;

    const { orderID, productID, quantity } = req.body;

    const result = await prisma.orderItems.update({
        where: {
            id: Number(id)
        },
        data: {
            orderID,
            productID,
            quantity
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        result
    });
};

const DeleteOItem = async (req = request, res = response) => {
    const { id } = req.params;

    const result = await prisma.orderItems.delete({
        where: {
            id: Number(id)
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        result
    });
};

module.exports = {
    AddOItem,
    DeleteOItem,
    EditOItem,
    ShowOItem,
    ShowOItems
};