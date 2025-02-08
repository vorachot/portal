import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Ticket } from "../types/Ticket";

interface TicketsTableProps {
  tickets: Ticket[];
}

const TicketsTable: React.FC<TicketsTableProps> = ({ tickets }) => {
  const ticketRows = useMemo(
    () =>
      tickets.map((t, index) => (
        <TableRow key={t.ticketID || index}>
          <TableCell>{t.ticketID}</TableCell>
          <TableCell>{t.projectID}</TableCell>
          <TableCell>{t.namespaceID}</TableCell>
          <TableCell>{t.status}</TableCell>
          <TableCell>
            {t.resource.type} ({t.resource.amount})
          </TableCell>
          <TableCell>{new Date(t.createdAt).toLocaleDateString()}</TableCell>
          <TableCell>{new Date(t.lastUpdated).toLocaleDateString()}</TableCell>
        </TableRow>
      )),
    [tickets]
  );

  return (
    <TableContainer component={Paper} sx={{ mt: 2, maxHeight: 500 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Project</TableCell>
            <TableCell>Namespace</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Resources (GB)</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{ticketRows}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default TicketsTable;
