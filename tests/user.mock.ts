export type UserDTO = {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export const mockUser = {
  id: '43c11a00-877a-490d-aaec-eeda13414891',
  name: 'Fulano de tal',
  email: 'fulano@email.com',
  password: '$2a$10$8quLe5K6NCHKhpEVuO/kFO2vsJaPzAz8sHM.W96SQTW8PXoqIgdhds',
};

export const mockUserCreateResult = {
  id: '78d51a00-877a-490d-aaec-eeda13414891',
  name: 'Ciclano',
  email: 'ciclano@email.com',
  password: '$2a$10$8quLe8GTNCHKhpEVuO/kFO2vsJaPzAz8sHM.W96SQTW8PXoqIgdhds',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const mockCreate = {
  name: 'Ciclano',
  email: 'ciclano@email.com',
  password: 'teste123',
};

export const TOKEN_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzYzExYTAwLTg3N2EtNDkwZC1hYWVjLWVlZGExMzQxNDg5MSIsIm5hbWUiOiJPcmxhbmRvIiwiZW1haWwiOiJvcmxhbmRvZGFudGFzLjFAaG90bWFpbC5jb20iLCJpYXQiOjE2NTY2MjYwMzAsImV4cCI6MTY1NjYzNjgzMH0.ywYo5ZIVyIjJhh6MMFj0Zo7ZR_9NxFN6kRonUB0lo-0';
