const express = require('express')
const router = express.Router()
const Contact = require('../module/Contact')

//add contact
router.post('/add-contact', async (req, res) => {   //create          crud api  making
    try {
        const data = new Contact({
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            batch: req.body.batch

        })

        const newcontact = await data.save()
        res.status(200).json({
            newContactData: newcontact
        })

    }
    catch (err) {

        res.status(500).json({
            error: err
        })
    }

})
// get data

router.get('/all-contact', async (req, res) => {     //read
    try {
        const data = await Contact.find()
        console.log(data)
        res.status(200).json({
            newdata: data

        })

    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }

})



// get contact by id
router.get('/contactById/:contactId', async (req, res) => {      //read
    try {

        const data = await Contact.findById(req.params.contactId)
        res.status(200).json({
            contact: data
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
})

router.get('/batchName/:batchName', async (req, res) => {            //read
    try {
        const data = await Contact.find({ batch: req.params.batchName })
        res.status(200).json({
            contact: data
        })
    }

    catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
})

//delete contact by id

router.delete('/delete/:id', async (req, res) => {                    // delete
    try {
        const data = await Contact.deleteOne({ _id: req.params.id })
        console.log(" student id sucessfully deleted")
        res.status(200).json({
            msg: data
        })
    }
    catch (err) {
        res.status(500).json({
            error: err
        })

    }
})

router.put('/update/:id', async (req, res) => {           //update
    try {
        const newData = {
            fullName: req.body.fullName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            batch: req.body.batch
        }
       const UpdateData= await Contact.findByIdAndUpdate(req.params.id,newData,{new:true})
       res.status(200).json({
        updateContact :UpdateData
       })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
        })
    }

})


module.exports = router;

