import { StatusTask } from '@prisma/client';

export const taskAll = [
  {
    id: '113d12c3-5149-4d7e-9650-a570a1e6c8f2',
    description: 'Adiantar o projeto de Blitz de carreira',
    status: StatusTask.PENDENTE,
    createdAt: '2022-06-29T22:44:14.268Z',
    updatedAt: '2022-06-29T22:44:14.269Z',
    userId: '43c11a00-877a-490d-aaec-eeda13414891',
  },
  {
    id: '5d98fa1b-097d-48c6-95f4-69e198e99868',
    description: 'Atividades Trybe',
    status: StatusTask.PENDENTE,
    createdAt: '2022-07-01T00:08:50.563Z',
    updatedAt: '2022-07-01T00:08:50.564Z',
    userId: '43c11a00-877a-490d-aaec-eeda13414891',
  },
];

export const JWTPayload = {
  id: '43c11a00-877a-490d-aaec-eeda13414891',
  name: 'Bruna',
  email: 'bruna@email.com',
};
