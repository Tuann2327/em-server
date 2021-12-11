const { query } = require('express');
const mongoose = require('mongoose');
const Item = require('../models/itemModel')
const shortid = require('shortid');

const ItemRoutes = (app)=>{

    app.get('/item/delall',(req,res) =>{
       Item.deleteMany({},(count)=>{
            res.send(count)
       })
    })

    app.post('/item',async (req,res)=>{
        const data = req.body
        try{
            const done = await Item.create({
                itemid: shortid.generate(),
                shopid: data.shopid,
                shopname: data.shopname,
                img: data.img,
                name: data.name,
                type: data.type,
                price: data.price,
                stock: data.stock,
            })
            if(done) res.send(done)
        }catch(e){
            res.send('err')
        }
        
    })

    app.delete('/item', async (req, res) => {
        const data = req.body
        console.log('someone try to delete item',data.itemid)
        try{
            await Item.deleteOne({itemid: data.itemid})
            res.send('deleted')
        }catch(e){
            res.send('err')
        }
    })

    app.get('/item/search',async (req,res)=>{
        const data = req.query
        // const findrequire = Object.fromEntries(Object.entries(data).filter(q=>{
        //     return (q[1].trim())!==''
        //  }))
        console.log(data)

        try{
            const done = await Item.find(data)
            if((!done)) res.send('err')
            else res.send(done)
        }catch(e){
            res.send('err')
        }
    })

}

module.exports = ItemRoutes