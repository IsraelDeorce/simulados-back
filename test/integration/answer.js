var db = require('../../app/config/datasource');

describe('Route POST /answer', () => {

    it('Should create an answer', done => {
    // before(() => {
    //     db.sequelize.sync()
    // });
      request.post('/answer')
        .set('Accept', 'application/x-www-form-urlencoded')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({
            question_id: "1234",
            participation_id: "12345",
            alternative_id: "123456"
        })
        // .expect('Content-Type', /json/)
        .expect(400)
        .end(function (err, res) {
            done(err);
        });
    });
});