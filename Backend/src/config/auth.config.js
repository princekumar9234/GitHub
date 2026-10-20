import dotenv from "dotenv";
dotenv.config();

if(!process.env.PORT){
    throw new Error("PORT is not defiend in envorimental variable");
}
if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defiend in envorimental variable");
}
const config = {
    MONGO_URI : process.env.MONGO_URI,
    PORT : process.env.PORT
}
export default config;