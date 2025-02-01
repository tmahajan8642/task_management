const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import your Express app

// Configure Chai to use chai-http
chai.use(chaiHttp);

// Use 'expect' or 'assert' from Chai
const expect = chai.expect;

describe('Role API Tests', () => {
  it('should create a new role', (done) => {
    const uniqueRoleName = `Admin_${Date.now()}`; // Ensure a unique role name
    chai
      .request(app)
      .post('/api/v1/roles')
      .send({ role_name: uniqueRoleName, status: 'active' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body.success).to.be.true;
        expect(res.body.message).to.equal('Role created successfully');
        done();
      });
  });

  it('should return an error for missing name', (done) => {
    chai
      .request(app)
      .post('/api/v1/roles')
      .send({ status: 'active' }) // Missing role_name
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Role name is required');
        done();
      });
  });
});