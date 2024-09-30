/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * Controlador de ordenes
 * Este archivo define los controladores de ordenes
 */

const { response, request } = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowOrders = async (req = request, res = response) => {
    const orders = await prisma.orders.findMany()
        .catch(err => {
            return err.message;
        }).finally(async () => {
            await prisma.$disconnect();
        });

    res.json({
        orders
    });
};

const AddOrder = async (req = request, res = response) => {
    const { total, date, userID, productID } = req.body;

    const result = await prisma.orders.create({
        data: {
            total,
            date,
            userID,
            productID
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

const ShowOrder = async (req = request, res = response) => {
    const { id } = req.params;

    const order = await prisma.orders.findUnique({
        where: {
            id: Number(id)
        }
    }).catch(err => {
        return err.message;
    }).finally(async () => {
        await prisma.$disconnect();
    });

    res.json({
        order
    });
};

const EditOrder = async (req = request, res = response) => {
    const { id } = req.params;

    const { total, date, userID, productID } = req.body;

    const result = await prisma.orders.update({
        where: {
            id: Number(id)
        },
        data: {
            total,
            date,
            userID,
            productID
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

const DeleteOrder = async (req = request, res = response) => {
    const { id } = req.params;

    const result = await prisma.orders.delete({
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
    AddOrder,
    DeleteOrder,
    EditOrder,
    ShowOrder,
    ShowOrders
};