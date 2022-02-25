import { v4 as uuidv4 } from "uuid";

class Shoes {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  size: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Shoes };
