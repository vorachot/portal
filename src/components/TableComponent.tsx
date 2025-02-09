import { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { Ticket } from "../types/Ticket";

interface TicketsTableProps {
  tickets: Ticket[];
}

const TicketsTable: React.FC<TicketsTableProps> = ({ tickets }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    ticketID: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedTicket(ticketID);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTicket(null);
  };

  const ticketRows = useMemo(
    () =>
      tickets.map((t, index) => (
        <TableRow key={t.ticketID || index}>
          <TableCell >{t.ticketID}</TableCell>
          <TableCell >{t.projectID}</TableCell>
          <TableCell >{t.namespaceID}</TableCell>
          <TableCell >{t.status}</TableCell>
          <TableCell >
            {t.resource.type} ({t.resource.amount})
          </TableCell>
          <TableCell >
            {new Date(t.createdAt).toLocaleDateString()}
          </TableCell>
          <TableCell >
            {new Date(t.lastUpdated).toLocaleDateString()}
          </TableCell>
          <TableCell sx={{ width: "50px", textAlign: "center" }}>
            <IconButton
              size="small"
              onClick={(e) => handleMenuOpen(e, t.ticketID)}
            >
              <MoreVert />
            </IconButton>
          </TableCell>
        </TableRow>
      )),
    [tickets]
  );

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 2, maxWidth: 1500 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell >ID</TableCell>
              <TableCell >Project</TableCell>
              <TableCell >Namespace</TableCell>
              <TableCell >Status</TableCell>
              <TableCell >Resources (GB)</TableCell>
              <TableCell >Created At</TableCell>
              <TableCell >Last Updated</TableCell>
              <TableCell sx={{ width: "50px" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{ticketRows}</TableBody>
        </Table>
      </TableContainer>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => console.log(`Edit ticket: ${selectedTicket}`)}>
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => console.log(`Redeem ticket: ${selectedTicket}`)}
        >
          Redeem
        </MenuItem>
        <MenuItem
          onClick={() => console.log(`Revoke ticket: ${selectedTicket}`)}
        >
          Revoke
        </MenuItem>
      </Menu>
    </>
  );
};

export default TicketsTable;
