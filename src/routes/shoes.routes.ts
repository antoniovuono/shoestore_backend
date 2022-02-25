import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

import { Shoes } from "../modules/shoes/entities/Shoes";

const shoesRouter = Router();

const shoes = [];

shoesRouter.post("/", (request, response) => {
  const { name, brand, price, description, size } = request.body;

  const createShoes: Shoes = {
    id: uuidv4(),
    name,
    brand,
    price,
    description,
    size,
    created_at: new Date(),
    updated_at: new Date(),
  };

  shoes.push(createShoes);

  return response.status(201).json(createShoes);
});

export { shoesRouter };
