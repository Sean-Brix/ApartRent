import app from './app.js'
import http from 'http'
import colors from 'colors'
import dotenv from 'dotenv'

// Configuration
colors.enable();
dotenv.config();
const PORT = process.env.PORT || 3000

// Server
const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log("\n\n. . . Server Running . . .\n\n".rainbow);
})

