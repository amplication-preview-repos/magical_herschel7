import { Modification as TModification } from "../api/modification/Modification";

export const MODIFICATION_TITLE_FIELD = "id";

export const ModificationTitle = (record: TModification): string => {
  return record.id?.toString() || String(record.id);
};
