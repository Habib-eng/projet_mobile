import mongoose from "mongoose";
const pluginId = require('mongoose-id');

const DossierMedical = mongoose.Schema({
    
}) 

DossierMedical.plugin(pluginId);
module.exports = mongoose.model("DossierMedical", DossierMedical);
