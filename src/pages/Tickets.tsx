import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import DialogComponent from "../components/DialogComponent";
// import axios from "axios";
import { Resource, ResourceType, Ticket, TicketStatus } from "../types/Ticket";
import TableComponent from "../components/TableComponent";
import DrawerComponent from "../components/DrawerComponent";
import ReqButton from "../components/ReqButton";

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      ticketID: "ticket1000346",
      projectID: "default",
      namespaceID: "ns-1000346-default",
      resource: { type: ResourceType.GPU, amount: 20 },
      status: TicketStatus.Pending,
      createdAt: "2021-10-01",
      lastUpdated: "2021-10-01",
    },
  ]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [reqResource, setReqResource] = useState<Resource>({
    type: ResourceType.GPU,
    amount: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReqResource({ ...reqResource, [name]: value });
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
          resource: reqResource,
          status: TicketStatus.Approved,
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

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerComponent drawerOpen={false} />

      <Box sx={{ width: "100%", padding: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
            Tickets
          </Typography>
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
