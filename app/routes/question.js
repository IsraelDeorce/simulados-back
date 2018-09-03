module.exports = function(app){
    let questionController = require('../controllers/question.js')

    app.post('/questions', questionController.create)
}