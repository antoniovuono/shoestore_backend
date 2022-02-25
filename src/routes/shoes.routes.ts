import { Router } from "express";

import { ShoesRepository } from "../modules/shoes/repositories/implementations/ShoesRepository";

const shoesRouter = Router();

const shoesRepository = new ShoesRepository();

shoesRouter.post("/", (request, response) => {
  const { name, brand, price, description, size, created_at } = request.body;

  shoesRepository.create({
    name,
    brand,
    price,
    description,
    size,
    created_at,
  });

  return response.status(201).send();
});

export { shoesRouter };
