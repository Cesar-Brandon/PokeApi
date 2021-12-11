const assert = require('chai').assert;

function addvalue(a,b){
    return a+b;
}
describe('Suite de prueba para el curso', () => {
    it('should return 4', () => {
        let va = addvalue(2,2);
        assert.equal(va,4);
    });
});