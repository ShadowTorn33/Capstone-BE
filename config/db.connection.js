require('dotenv').config()
const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI);

mongoose.connection
.on('open', ()=> console.log('You are connected to MONGODB'))
.on('close', ()=> console.log('You are disconnected to MONGODB'))
.on('error', ()=> console.log((error)))