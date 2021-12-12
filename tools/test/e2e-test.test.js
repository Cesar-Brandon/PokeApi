const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../../app').app;

describe('Suite de prueb auth', () => {
    it('should return 403', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                console.log('A')
                chai.assert.equal(res.text, 'Hello World!')
                done();
            }); 
        console.log('B');
    });
});