import { prisma } from '../../../../generated/prisma-client';

export default {
  Query: {
    userById: async (_, arg) => {
      const { id } = arg;
      return await prisma.user({ id });
    },
  },
};
