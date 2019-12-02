import { Phone } from './phone2';

export class Contact2 {
  id: number;
  name: string;
  email: string;
  phone: Phone = new Phone();
}
