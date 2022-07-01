import bcrypt from 'bcryptjs';
import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import JWT from 'jsonwebtoken';
import sinon from 'sinon';
import { Response } from 'superagent';

import app from '../src/app';
import { UserModel } from '../src/models';
import { login } from './auth.mock';
import { mockUser, TOKEN_JWT } from './user.mock';

chai.use(chaiHTTP);

describe('End-Point /auth', () => {
  describe('authenticate', () => {
    describe('Em caso de sucesso!', () => {
      let chaiHttpResponse: Response;

      before(async () => {
        sinon.stub(UserModel.prototype, 'getByEmail').resolves(mockUser);
        sinon.stub(bcrypt, 'compare').resolves(true);
        sinon.stub(JWT, 'sign').resolves(TOKEN_JWT);
      });

      after(() => {
        (UserModel.prototype.getByEmail as sinon.SinonStub).restore();
        (bcrypt.compare as sinon.SinonStub).restore();
        (JWT.sign as sinon.SinonStub).restore();
      });

      it('Retorna um hash de autorização', async () => {
        chaiHttpResponse = await chai.request(app).post('/auth').send(login);

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.be.property('token');
        expect(chaiHttpResponse.body.token).to.be.equal(TOKEN_JWT);
      });
    });

    describe('Em caso de erro!', () => {
      let chaiHttpResponse: Response;

      it('Usuário não encontrado', async () => {
        sinon.stub(UserModel.prototype, 'getByEmail').resolves(undefined);

        chaiHttpResponse = await chai.request(app).post('/auth').send(login);

        expect(chaiHttpResponse.status).to.be.equal(404);
        expect(chaiHttpResponse.body).to.be.property('message');
        expect(chaiHttpResponse.body.message).to.be.equal('User not found!');

        (UserModel.prototype.getByEmail as sinon.SinonStub).restore();
      });

      it('Senha inválida', async () => {
        sinon.stub(UserModel.prototype, 'getByEmail').resolves(mockUser);
        sinon.stub(bcrypt, 'compare').resolves(false);

        chaiHttpResponse = await chai.request(app).post('/auth').send(login);

        expect(chaiHttpResponse.status).to.be.equal(404);
        expect(chaiHttpResponse.body).to.be.property('message');
        expect(chaiHttpResponse.body.message).to.be.equal('Email or password invalid!');

        (UserModel.prototype.getByEmail as sinon.SinonStub).restore();
        (bcrypt.compare as sinon.SinonStub).restore();
      });

      it('Necessário informar o email', async () => {
        sinon.stub(UserModel.prototype, 'getByEmail').resolves(mockUser);
        sinon.stub(bcrypt, 'compare').resolves(false);

        chaiHttpResponse = await chai.request(app).post('/auth').send({ password: '12345Abc' });

        expect(chaiHttpResponse.status).to.be.equal(400);
        expect(chaiHttpResponse.body).to.be.property('message');

        (UserModel.prototype.getByEmail as sinon.SinonStub).restore();
        (bcrypt.compare as sinon.SinonStub).restore();
      });
    });
  });
});
