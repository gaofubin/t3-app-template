import { z } from "zod";
import { format } from "date-fns";
import {
  employeeFormSchema,
  type EmployeeColumn,
  updateEmployeeFormSchema,
} from "@/lib/validators";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const employeeRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const employee = await ctx.prisma.employee.findMany({
      orderBy: {
        createAt: "desc",
      },
    });

    const formattedEmployee: EmployeeColumn[] = employee.map((item) => ({
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      gender: item.gender,
      createAt: format(item.createAt, "MMMM do, yyyy"),
      updateAt: format(item.updateAt, "MMMM do, yyyy"),
    }));
    return formattedEmployee;
  }),

  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const employee = await ctx.prisma.employee.findUnique({
      where: { id: input },
    });
    return employee;
  }),

  create: publicProcedure
    .input(employeeFormSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.employee.create({ data: { ...input } });
    }),

  update: publicProcedure
    .input(updateEmployeeFormSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.employee.update({
        where: { id: input.id },
        data: { ...input },
      });
    }),

  delete: publicProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
    return await ctx.prisma.employee.delete({
      where: { id: input },
    });
  }),
});
