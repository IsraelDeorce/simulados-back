var exports = module.exports = {}
var db = require('../models/index.js');
var Practise_Exam = require('../models/practise_exam.js')(db.sequelize, db.Sequelize);

exports.findAll = function (req, res) {
    try {
        Practise_Exam.all().then((practise_exams) => {
            res.status(200).json({
                success: true,
                message: 'exams found!',
                practise_exam: practise_exams
            })
        })
    }catch (e) {
        console.log(e)
    }
};

