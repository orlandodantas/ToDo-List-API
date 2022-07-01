import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import JWT from 'jsonwebtoken';
import sinon from 'sinon';
import { Response } from 'superagent';

import app from '../src/app';
import { UserModel } from '../src/models';
import { UserDTO } from '../src/models/interfaces';
import { mockCreate, mockUserCreateResult, TOKEN_JWT } from './user.mock';

chai.use(chaiHTTP);

describe('End-Point /users', () => {
  describe('Create', () => {
    describe('Em caso de sucesso!', () => {
      let chaiHttpResponse: Response;

      before(async () => {
        sinon.stub(UserModel.prototype, 'getByEmail').resolves(undefined);
        sinon.stub(UserModel.prototype, 'create').resolves(mockUserCreateResult as UserDTO);
        sinon.stub(JWT, 'sign').resolves(TOKEN_JWT);
      });

      after(() => {
        (UserModel.prototype.getByEmail as sinon.SinonStub).restore();
        (UserModel.prototype.create as sinon.SinonStub).restore();
        (JWT.sign as sinon.SinonStub).restore();
      });

      it('Retorna um hash de autorização', async () => {
        chaiHttpResponse = await chai.request(app).post('/users').send(mockCreate);

        expect(chaiHttpResponse.status).to.be.equal(201);
        expect(chaiHttpResponse.body).to.be.property('token');
        expect(chaiHttpResponse.body.token).to.be.equal(TOKEN_JWT);
      });
    });

    describe('Em caso de erro!', () => {
      let chaiHttpResponse: Response;

      before(async () => {
        sinon.stub(UserModel.prototype, 'getByEmail').resolves(mockCreate);
      });

      after(() => {
        (UserModel.prototype.getByEmail as sinon.SinonStub).restore();
      });

      it('Email inválido!', async () => {
        chaiHttpResponse = await chai.request(app).post('/users').send(mockCreate);

        expect(chaiHttpResponse.status).to.be.equal(409);
        expect(chaiHttpResponse.body).to.be.property('message');
        expect(chaiHttpResponse.body.message).to.be.equal('Email is exists');
      });
    });
  });
});
