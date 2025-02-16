import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import DialogComponent from "../components/DialogComponent";
// import axios from "axios";
import { Resource, ResourceType, Ticket, TicketStatus } from "../types/Ticket";
import TableComponent from "../components/TableComponent";
import DrawerComponent from "../components/DrawerComponent";
import ReqButton from "../components/ReqButton";
import { getTickets } from "../api/ticket";

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      ticketID: "ticket1000346",
      projectID: "default",
      namespaceID: "ns-1000346-default",
      resources: [
        { type: ResourceType.CPU, amount: 8 },
        { type: ResourceType.GPU, amount: 8 },
        { type: ResourceType.Memory, amount: 24 },
      ],
      status: TicketStatus.Pending,
      createdAt: "2021-10-01",
      lastUpdated: "2021-10-01",
    },
  ]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [reqResource, setReqResource] = useState<Resource[]>([
    {
      type: ResourceType.CPU,
      amount: 0,
    },
    {
      type: ResourceType.GPU,
      amount: 0,
    },
    {
      type: ResourceType.Memory,
      amount: 0,
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const index = reqResource.findIndex((res) => res.type === name);
    if (index !== -1) {
      const updatedResources = [...reqResource];
      updatedResources[index] = {
        ...updatedResources[index],
        amount: Number(value),
      };
      setReqResource(updatedResources);
    }
  };

  const handleRequestTicket = async () => {
    try {
      // await axios.post("/api/tickets", newTicket);
      console.log("Request:", reqResource);
      setDialogOpen(false);
      // const response = await axios.get("/api/tickets");
      // setTickets(response.data);
      setTickets([
        ...tickets,
        {
          ticketID: "new-ticket-id",
          projectID: "default",
          namespaceID: "ns-1000346-default",
          resources: reqResource,
          status: TicketStatus.Available,
          createdAt: "2021-10-01",
          lastUpdated: "2021-10-01",
        },
      ]);
    } catch (error) {
      console.error("Error creating ticket:", error);
    }
  };

  useEffect(() => {
    console.log("Refresh");
  }, [tickets]);

  useEffect(() => {
    const userID = "38af98a3-bd49-4c82-b02c-fdbb91d695da";
    const namespaceID = "0aec2352-732a-4c3a-8a50-5d4fe16ebc1a";
    getTickets(userID, namespaceID).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", maxWidth: 1500 }}>
      <DrawerComponent drawerOpen={false} />

      <Box sx={{ width: "100%", padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h3">Tickets</Typography>
          <ReqButton text="Request" setDialogOpen={setDialogOpen} />
        </Box>

        <TableComponent tickets={tickets} />
      </Box>
      <DialogComponent
        isDialogOpen={isDialogOpen}
        setDialogOpen={setDialogOpen}
        reqResource={reqResource}
        handleInputChange={handleInputChange}
        handleRequestTicket={handleRequestTicket}
      />
    </Box>
  );
};

export default Tickets;
