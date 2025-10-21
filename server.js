const express = require('express')
const mongoose = require('mongoose')
const routes = require('./feedbackRoutes')
const cors = require('cors')
const app = express()

require('dotenv').config()
mongoose.set('strictQuery', false)

const PORT = 5000 || process.env.port

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('We were connected to MONGO'))
.catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
app.use('/api/feedbacks', routes);
app.listen(PORT, () => {
    console.log(`I am listenning on PORT ${PORT}`)
})