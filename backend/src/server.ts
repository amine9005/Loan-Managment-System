import app from "./app";

const PORT = process.env.PORT || 5200;

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
    });