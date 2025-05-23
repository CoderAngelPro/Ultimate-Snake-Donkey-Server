require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.use(cors())
app.use(express.json());

const playerRouter = require('./routes/player');
app.use('/player', playerRouter);


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});