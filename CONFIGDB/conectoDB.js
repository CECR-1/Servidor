import mongoose from "mongoose";

const uri = "mongodb+srv://castilloromero10:camilo10@cluster0.tls9oro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const conectoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}