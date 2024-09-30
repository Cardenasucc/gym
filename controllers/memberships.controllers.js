/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * Controlador de membresías
 * Este archivo define los controladores de membresías
 */

const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * Muestra todas las membresías
 * @param {Request} req
 * @param {Response} res
 */
const ShowMemberships = async(req=request, res=response)=>{
    const memberships = await prisma.memberships.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        memberships
    });
};

/**
 * Agrega una nueva membresía
 * @param {Request} req
 * @param {Response} res
 */
const AddMembership = async(req=request, res=response)=>{
    const { name, description, price, duration, benefits } = req.body;

    const result = await prisma.memberships.create({
        data: {
            name,
            description,
            price,
            duration,
            benefits
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};

/**
 * Muestra una membresía específica
 * @param {Request} req
 * @param {Response} res
 */
const ShowMembership = async(req=request, res=response)=>{
    const { id } = req.params;

    const membership = await prisma.memberships.findUnique({
        where: {
            id: Number(id)
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        membership
    });
};

/**
 * Edita una membresía
 * @param {Request} req
 * @param {Response} res
 */
const EditMembership = async(req=request, res=response)=>{
    const { id } = req.params;

    const { name, description, price, duration, benefits } = req.body;

    const result = await prisma.memberships.update({
        where:{
            id: Number(id)
        },
        data: {
            name,
            description,
            price,
            duration,
            benefits
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};

/**
 * Elimina una membresía
 * @param {Request} req
 * @param {Response} res
 */
const DeleteMembership = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.memberships.delete({
        where:{
            id: Number(id)
        }
    }).catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        result
    });
};

module.exports = {
    AddMembership,
    DeleteMembership,
    EditMembership,
    ShowMembership,
    ShowMemberships
};