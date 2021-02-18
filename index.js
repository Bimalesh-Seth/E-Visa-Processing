const express = require('express');
// const fileUpload = require('express-fileupload');
const Visa = require('./Routes/visa');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/esd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('Connected to ESD database...'))
    .catch((err) => console.log(err));
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     console.log('Connected to ESD database...')
// });

const app = express();
app.use(express.json());

// app.use(fileUpload());

app.use('/', Visa);



app.use((err, req, res, next) => {
    return res.status(500).json({ message: err.message });
});

app.listen(3000);