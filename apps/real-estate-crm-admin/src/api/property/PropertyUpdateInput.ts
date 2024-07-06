import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  description?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
