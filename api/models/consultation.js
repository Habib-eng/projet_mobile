import mongoose from "mongoose";
import mongooseId  from "mongoose-id";

const Consultation = mongoose.Schema({
    subject : {
        type: String,
        required: true,
    },
    patientEmail: {
        type: String,
        required: true, 
    },
    patientPhoneNumber: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,   
    },
    notes: [{
        type: String,
        trim: true,
    }],
    date: {
        type: Date,
        default: new Date(),
    }

}) 

Consultation.plugin(mongooseId);
export default mongoose.model("Consultation", Consultation);
