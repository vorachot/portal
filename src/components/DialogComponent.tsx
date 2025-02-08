import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Resource } from "../types/Ticket";
import theme from "../_theme";

interface DialogComponentProps {
  isDialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
  reqResource: Resource;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRequestTicket: () => void;
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  isDialogOpen,
  setDialogOpen,
  reqResource,
  handleInputChange,
  handleRequestTicket,
}: DialogComponentProps) => {
  return (
    <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          width: 300,
          height: 280,
        }}
      >
        <DialogTitle>Select Resource</DialogTitle>
        <DialogContent>
          <TextField
            select
            label="Resource Type"
            name="type"
            value={reqResource.type}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
          >
            <MenuItem value="VM">VM</MenuItem>
            <MenuItem value="Storage">Storage</MenuItem>
            <MenuItem value="GPU">GPU</MenuItem>
          </TextField>
          <TextField
            label="Resource Amount"
            name="amount"
            value={reqResource.amount}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
            type="number"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="secondary">
            <Typography
              variant="body1"
              sx={{ fontSize: 13, fontWeight: "bold" }}
            >
              Cancel
            </Typography>
          </Button>
          <Button onClick={handleRequestTicket}>
            <Typography
              variant="body1"
              sx={{ fontSize: 13, fontWeight: "bold" }}
            >
              Submit
            </Typography>
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DialogComponent;
