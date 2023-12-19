import { z } from "zod";

// Example
export const example = z.object({
    id: z.number(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const exampleList = z.array(example);

export type Example = z.infer<typeof example>;
export type ExampleListOutput = z.infer<typeof exampleList>;

// User
export const user = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    role: z.object({ name: z.string() }).optional(),
});

export const userList = z.array(user);

export type User = z.infer<typeof user>;
export type UserListOutput = z.infer<typeof userList>;

// Role

export const role = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
});

export const roleList = z.array(role);

export type Role = z.infer<typeof role>;
export type RoleListOutput = z.infer<typeof roleList>;

export const createRoleSchema = z.object({
    name: z.string(),
    description: z.string(),
});

export type CreateRoleSchemaType = z.infer<typeof createRoleSchema>;