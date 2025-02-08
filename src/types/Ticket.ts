export enum ResourceType {
  VM = "VM",
  Storage = "Storage",
  GPU = "GPU",
}

export enum TicketStatus {
  Pending = "Pending",
  Approved = "Approved",
  Rejected = "Rejected",
}

export interface Resource {
  type: ResourceType;
  amount: number;
}

export interface Ticket {
  ticketID: string;
  projectID: string;
  namespaceID: string;
  resource: Resource;
  status: TicketStatus;
  createdAt: string;
  lastUpdated: string;
}
