import express from "express";
import path from "path";

const app = express();
const port = 8080; 
const staticPath = path.join(__dirname, 'static');

app.use('/', express.static(staticPath));

app.get( "/", ( req, res ) => {
    res.sendFile(path.join(staticPath, 'index.html'));
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );