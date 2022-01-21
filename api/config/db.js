import { connect } from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`MONGODB Connected: ${conn.connection.host}`)
    } catch ( err ){
        console.log(err);
        process.exit(1);
    }
};


export default connectDB;