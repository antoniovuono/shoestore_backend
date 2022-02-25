import { Router } from "express";

const usersRoutes = Router();

usersRoutes.get("/", (request, response) => {
  return response.json("Criar usuários");
});

usersRoutes.get("/", (request, response) => {
  return response.json("Bem vindo a rota de cadastro de produtos!");
});

export { usersRoutes };
