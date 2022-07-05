import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import JWT from 'jsonwebtoken';
import sinon from 'sinon';
import { Response } from 'superagent';

import app from '../src/app';
import { TaskModel } from '../src/models';
import { TaskDTO } from '../src/models/interfaces';
import { JWTPayload, taskAll } from './task.mock';
import { TOKEN_JWT } from './user.mock';

chai.use(chaiHTTP);

describe('End-Point /tasks', () => {
  describe('getAll', () => {
    describe('Em caso de sucesso!', () => {
      let chaiHttpResponse: Response;

      before(async () => {
        sinon.stub(TaskModel.prototype, 'getAll').resolves(taskAll as TaskDTO[]);
        sinon.stub(JWT, 'verify').callsFake(() => JWTPayload);
      });

      after(() => {
        (TaskModel.prototype.getAll as sinon.SinonStub).restore();
        (JWT.verify as sinon.SinonStub).restore();
      });

      it('Retorna um array de tasks', async () => {
        chaiHttpResponse = await chai.request(app).get('/tasks').set('Authorization', TOKEN_JWT);

        expect(chaiHttpResponse.status).to.be.equal(200);
        expect(chaiHttpResponse.body).to.be.eql(taskAll);
      });
    });

    describe('Em caso de erro!', () => {
      let chaiHttpResponse: Response;

      it('Não é passado o token Authorization!', async () => {
        chaiHttpResponse = await chai.request(app).get('/tasks');

        expect(chaiHttpResponse.status).to.be.equal(401);
        expect(chaiHttpResponse.body).to.be.property('message');
        expect(chaiHttpResponse.body.message).to.be.equal('Authorization is necessary');
      });
    });
  });
});
