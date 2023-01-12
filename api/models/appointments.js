import mongoose from "mongoose";
const pluginId = require("mongoose-id");

const Appointment = mongoose.Schema({

});

Appointment.plugin(pluginId);
module.exports = mongoose.model("Appointment", Appointment);
