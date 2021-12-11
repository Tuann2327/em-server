const mongoose = require('mongoose');
const { send } = require('process');
const Account = require('../models/accountModel')

const AccountRoutes = (app)=>{

    app.get('/account/delall',(req,res) =>{
       Account.deleteMany({},(count)=>{
            res.send(count)
       })
    })

    app.post('/account',async (req,res)=>{
        const data = req.body
        try{
            const done = await Account.create({
                email: data.email,
                password: data.password,
                isSeller: data.isSeller,
                shopName: data.shopName,
            })
            if(done) res.send({
                        userid:done.userid,
                        email:done.email,
                        isSeller:done.isSeller,
                        shopName:done.shopName
                    })
        }catch(e){
            res.send('err')
        }
    })

    app.post('/account/check',async (req,res)=>{
        const data = req.body
        try{
            const done = await Account.findOne({
                email: data.email
            })
            if((!done) || (done.password !== data.password)) res.send('err')
            else res.send({
                    userid:done.userid,
                    email:done.email,
                    isSeller:done.isSeller,
                    shopName:done.shopName
                })
        }catch(e){
            res.send('err')
        }
    })

}

module.exports = AccountRoutes