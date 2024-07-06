import { Part as TPart } from "../api/part/Part";

export const PART_TITLE_FIELD = "name";

export const PartTitle = (record: TPart): string => {
  return record.name?.toString() || String(record.id);
};
