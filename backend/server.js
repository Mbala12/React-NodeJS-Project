const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const URI = process.env.ATLAS_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('DB successfully connected');
}).catch((err)=>{
    console.log(err.message);
});

const transRouter = require('./routes/transroute');

app.use('/trans', transRouter);

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})