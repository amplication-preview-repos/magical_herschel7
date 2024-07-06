import { CarModel } from "../carModel/CarModel";
import { Modification } from "../modification/Modification";

export type Part = {
  carModel?: CarModel | null;
  createdAt: Date;
  id: string;
  modifications?: Array<Modification>;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
