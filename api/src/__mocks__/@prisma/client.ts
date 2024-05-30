import openingModelEntityMock from '../../mocks/openingModelEntity.json'

const actualPrisma = jest.requireActual('@prisma/client');

const mockPrismaClient = {
  ...actualPrisma.PrismaClient.prototype,
  openingModel: {
    ...actualPrisma.PrismaClient.prototype.openingModel,
    create: () => openingModelEntityMock,
    findMany: () => [openingModelEntityMock] 
  },
};

class PrismaClient {
  constructor() {
    return mockPrismaClient;
  }
}

module.exports = {
  ...actualPrisma,
  PrismaClient,
};