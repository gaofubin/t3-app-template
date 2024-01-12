import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { userList } from "@/lib/validators";

export const userRouter = createTRPCRouter({

  getAll: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.prisma.user.findMany();
    return userList.parse(users);
  }),
});