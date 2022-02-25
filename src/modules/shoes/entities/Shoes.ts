import { v4 as uuidv4 } from "uuid";

class Shoes {
  id: string;
  name: string;
  price: string;
  description: string;
  size: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Shoes };
