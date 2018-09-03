module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define('question', {
        statement: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        approved: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            notEmpty: true
        }
    })

    return Question
}