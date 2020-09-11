

const expect = require('chai').expect;
const validation = require('../index')

describe('Test Sample', function () {
//   before((done) => {
    
//   });
//   after((done) => {
    
//   });

  it('OK, valid data schema', (done) => {
      const data = {
          name: "",
          age: 23,
          email: "test@ex.in",
          gender: 'M'
      }
      const schema = {
        name: validation.STRING,
        age: validation.NUMBER,
        email: validation.STRING,
        gender: validation.Enum(['M', 'F'])
    }
      let res = validation.validate(data, schema);
      expect(res).true
      done();
  });
  it('OK, invalid data schema', (done) => {
    const data = {
        name: "",
        age: 23,
        email: "test@ex.in",
        gender: 'D'
    }
    const schema = {
      name: validation.STRING,
      age: validation.NUMBER,
      email: validation.STRING,
      gender: validation.Enum(['M', 'F'])
  }
    let res = validation.validate(data, schema);
    expect(res).false
    done();
});
});
