import dotenv from "dotenv";
dotenv.config();

if(!process.env.PORT){
    throw new Error("PORT is not defiend in envorimental variable");
}

if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI is not defiend in envorimental variable");
}

if(!process.env.GOOGLE_USER){
    throw new Error("GOOGLE_USER is not defiend in envorimental variable");
}

if(!process.env.GOOGLE_CLIENT_ID){
    throw new Error("GOOGLE_CLIENT_ID is not defiend in envorimental variable");
}

if(!process.env.GOOGLE_CLIENT_SECRECT){
    throw new Error("GOOGLE_CLIENT_SECRECT is not defiend in envorimental variable");
}

if(!process.env.GOOGLE_REFRESH_TOKEN){
    throw new Error("GOOGLE_REFRESH_TOKEN is not defiend in envorimental variable");
}
if(!process.env.FRONTEND_URL){
    throw new Error("FRONTEND_URL is not defiend in envorimental variable");
}

const config = {
    MONGO_URI : process.env.MONGO_URI,
    PORT : process.env.PORT,
    GOOGLE_USER : process.env.GOOGLE_USER,
    GOOGLE_CLIENT_ID :process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRECT : process.env.GOOGLE_CLIENT_SECRECT,
    GOOGLE_REFRESH_TOKEN : process.env.GOOGLE_REFRESH_TOKEN,
    FRONTEND_URL : process.env.FRONTEND_URL
}

export default config;