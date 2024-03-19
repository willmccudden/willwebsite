const mongoose = require("mongoose");

const {Schema, model} = mongoose;
mongoose.set('debug', true);

const projectLogSchema = new Schema({
    date: Date,
    textEntry: String,
    hasPhoto: Boolean,
}, { collection: 'projectlog' });

const ProjectLog = mongoose.model("ProjectLog",projectLogSchema);

module.exports = ProjectLog;