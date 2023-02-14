import mongoose from "mongoose";

const plataformaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        paisDeOrigem: {type: String, required: true},
        ano: {type: Number}
    }    
)

const plataformas = mongoose.model('plataformas', plataformaSchema);

export default plataformas
