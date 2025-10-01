import { Router, Request, Response } from "express";
import { CreateUserDto } from "./user.dto";
import { z } from "zod";

const router = Router();

type PingResponse = {
  message: string;
};
type CreateUserResponse = {
  message: string;
  data?: CreateUserDto;
  error?: string;
};

const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  age: z.number().optional(),
});

router.get<{}, PingResponse>(
  "/ping",
  (req: Request, res: Response): Response<PingResponse> => {
    return res.json({ message: "pong" });
  }
);

router.post(
  "/users",
  (req: Request, res: Response): Response<CreateUserResponse> => {
    try {
      const data = createUserSchema.parse(req.body);
      console.log(data);
      return res.status(201).json({
        message: "User created successfully",
        data,
      });
    } catch (error) {
      const messages = JSON.parse((error as Error).message)
        .map((err: any) => err.message)
        .join(", ");

      return res.status(400).json({
        message: "Invalid data",
        error: messages,
      });
    }
  }
);

export default router;
