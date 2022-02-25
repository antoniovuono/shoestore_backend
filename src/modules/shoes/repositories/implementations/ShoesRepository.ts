import { Shoes } from "../../entities/Shoes";

interface ICreateShoesDTO {
  name: string;
  brand: string;
  price: number;
  description: string;
  size: string;
  created_at: Date;
}

class ShoesRepository {
  private shoes: Shoes[];

  constructor() {
    this.shoes = [];
  }

  create({ name, brand, price, description, size }: ICreateShoesDTO): void {
    const createShoes = new Shoes();

    Object.assign(createShoes, {
      name,
      brand,
      price,
      description,
      size,
      created_at: new Date(),
    });

    this.shoes.push(createShoes);
  }
}

export { ShoesRepository };
