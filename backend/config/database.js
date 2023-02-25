const mongoose = ("mongoose");

const connectDatabase= ()=>{
    mongoose.connect("mongodb://localhost:27017/Ecommerce",{useNewUrlParser:true,useUnifiedTopology:true,useCreateTopology:true}).then((data)=>{
        console.log('Mongobd connected with server : ${data.connection.host}');
        }).catch((err)=>{
            console.log(err)
        })
}

module.exports = connectDatabase 