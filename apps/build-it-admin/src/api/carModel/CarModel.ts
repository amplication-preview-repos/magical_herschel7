import { Part } from "../part/Part";

export type CarModel = {
  createdAt: Date;
  id: string;
  modelUrl: string | null;
  name: string | null;
  parts?: Array<Part>;
  updatedAt: Date;
};
