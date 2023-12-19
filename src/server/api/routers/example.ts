import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

import { exampleList } from "@/lib/validators";
import { z } from "zod";
export const exampleRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const examples = await ctx.prisma.example.findMany();
    return exampleList.parse(examples);
  }),

  search: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const results = await ctx.prisma.example.findMany({
      where: {
        name: {
          contains: input,
        },
      },
      select: {
        name: true,
      },
    });
    return results;
  }),
});