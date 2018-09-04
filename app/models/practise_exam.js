module.exports = (sequelize, Sequelize) => {
    const Practise_Exam = sequelize.define('practise_exam', {
        idPractise_exam: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        oab_exam: {
            type: Sequelize.BOOLEAN,
            notEmpty: true
        },

        oab_exam_year: {
            type: Sequelize.INTEGER,
            defaultValue: false,
            notEmpty: true
        }
    })

    return Practise_Exam;
}