import axios from "axios";
import { Ticket } from "../types/Ticket";

const API_BASE_URL = "http://localhost:5000/api";

export const getTickets = async () => {
  const response = await axios.get(`${API_BASE_URL}/tickets`);
  return response.data;
};

export const createTicket = async (ticketData: Ticket) => {
  const response = await axios.post(`${API_BASE_URL}/tickets`, ticketData);
  return response.data;
};
