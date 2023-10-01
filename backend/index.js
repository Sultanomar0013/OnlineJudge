require('dotenv/config');
const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect(process.env.MONGODB_URL_LOCAL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("CONNECTED TO MONGODB!"))
.catch(error => console.log("CONNECTION FAILED!", error));

const port = process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`APP RUNNING ON PORT ${port}!`);
});