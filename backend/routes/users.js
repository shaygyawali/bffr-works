const express = require('express')

const router = express.Router()

//get all users
router.get('/', (req, res) => {
	res.json({message:'GET all users'})
})

//get a single user
router.get('/:id', (req, res) => {
	res.json({message:'GET a single user'})
})


//post a new user
router.post('/', (req, res) => {
	res.json({message:'POST a new user'})
})

//delete a user
router.delete('/:id', (req, res) => {
	res.json({message:'DELETE a user'})
})

//update a user
router.patch('/:id', (req, res) => {
	res.json({message:'UPDATE a user'})
})




module.exports = router 