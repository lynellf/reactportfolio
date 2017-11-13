var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true
    },
    years: {
        type: Number,
        required: true
    },
    skillId: {
        type: String,
        required: true,
        unique: true
    }
});

Skill = mongoose.model('Skill', SkillSchema);
module.exports = Skill;