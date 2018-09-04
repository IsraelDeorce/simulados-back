const passport = require('passport');
require('../middleware/passport')(passport)

module.exports = function(app){
    var examController = require('../controllers/exam.js')

    app.get('/exams',  passport.authenticate('jwt', {session:false}) ,examController.findAll)
}