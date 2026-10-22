import app from "./src/app.js";
import config from "./src/config/auth.config.js";


app.listen(config.PORT , () => {
    console.log(`server is listening on port is : ${config.PORT}`);
}) 
