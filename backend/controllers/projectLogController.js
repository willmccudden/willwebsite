const ProjectLog = require('../models/projectlog')

const fetchProjectLogs = async (req,res) => {
    const projectLog = await ProjectLog.find();
    res.json({projectLog})
}

const fetchProjectLog = async (req,res) => {
    const id = req.params.id;

    const projectLog = await ProjectLog.findById(id);

    res.json({projectLog})
}

const createProjectLog = async (req,res) => {

    const {textEntry, date, hasPhoto} = req.body;

    const projectLog = await ProjectLog.create({
        textEntry,
        date,
        hasPhoto,
    })

    res.json({projectLog});
}

const updateProjectLog = async (req,res) => {

    const id = req.params.id;
    const textEntry = req.body.textEntry;

    await ProjectLog.findByIdAndUpdate(id, {textEntry: textEntry})

    const projectLog = await ProjectLog.findById(id);

    res.json({projectLog})

}

module.exports = {
    fetchProjectLogs,
    fetchProjectLog,
    createProjectLog,
    updateProjectLog,
}

