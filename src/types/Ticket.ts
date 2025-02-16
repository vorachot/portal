export enum ResourceType {
  CPU = "CPU",
  GPU = "GPU",
  Memory = "Memory",
}

export enum TicketStatus {
  Pending = "Pending",
  Available = "Available",
  Running = "Running",
  Completed = "Completed",
}

export interface Resource {
  type: ResourceType;
  amount: number;
}

export interface Ticket {
  ticketID: string;
  projectID: string;
  namespaceID: string;
  resources: Resource[];
  status: TicketStatus;
  createdAt: string;
  lastUpdated: string;
}
