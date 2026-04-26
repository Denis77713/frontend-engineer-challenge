import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email обязателен").email("Неверный формат email"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
