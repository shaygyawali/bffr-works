require('dotenv').config()

const express = require('express')

//express app
const app = express()
const mongoose = require('mongoose')
const usersRoutes = require('./routes/users')

//middleware
app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

//routes
// app.get('/', (req, res) => {
// 	res.json({message: 'Welcome to the App!'})
// })

app.use('/api/users', usersRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		//listen for requests
		app.listen(process.env.PORT, () =>{
			console.log('listening on port 4000!')
		})
	})
	.catch((error) => {
		console.log(error)
	})


