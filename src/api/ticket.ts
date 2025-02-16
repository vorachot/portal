import axios from "axios";
import { Ticket } from "../types/Ticket";

const API_BASE_URL = "http://localhost:8080/ticket";

export const getTickets = async (userID: string, namespaceID: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/getticket`, {
      user_id: userID,
      namespace_id: namespaceID,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching tickets:", error);

    return [];
  }
};

export const createTicket = async (ticketData: Ticket) => {
  const response = await axios.post(`${API_BASE_URL}/handleticket`, ticketData);
  return response.data;
};
