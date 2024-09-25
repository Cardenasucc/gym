/**
 * @author deivid & santiago
 * @version 1.0.0
 * 
 * Person Controller
 * This file defines the person controllers
 */

const {response, request} = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ShowPeople = async(req=request, res=response)=>{
    const people = await prisma.persons.findMany()
    .catch(err=>{
        return err.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        people
    });
};

const AddPeople = async(req=request, res=response)=>{
    const { name, lastName, number, published, userID } = req.body;

    const result = await prisma.persons.create({
        data: {
            name,
            lastName,
            number,
            published,
            userID
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

const ShowPerson = async(req=request, res=response)=>{
    res.json({
        "saludo":"soy la respuesta de mostrar usuarios"
    });
};

const EditPeople = async(req=request, res=response)=>{
    const { id } = req.params;

    const { name, lastName, number, published, userID } = req.body;

    const result = await prisma.persons.update({
        where:{
            id: Number(id)
        },
        data: {
            name,
            lastName,
            number,
            published,
            userID
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

const DeletePeople = async(req=request, res=response)=>{
    const { id } = req.params;

    const result = await prisma.persons.delete({
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
    AddPeople,
    ShowPeople,
    ShowPerson,
    EditPeople,
    DeletePeople
};