import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { Resource, ResourceType } from "../types/Ticket";
import theme from "../_theme";

interface DialogComponentProps {
  isDialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
  reqResource: Resource[];
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
          // height: 280,
          py: 2,
        }}
      >
        <DialogTitle>Select Resources</DialogTitle>
        <DialogContent>
          <TextField
            label={ResourceType.CPU}
            name={ResourceType.CPU}
            value={reqResource[0].amount}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
            type="number"
          />
          <TextField
            label={ResourceType.GPU}
            name={ResourceType.GPU}
            value={reqResource[1].amount}
            onChange={handleInputChange}
            fullWidth
            margin="dense"
            type="number"
          />
          <TextField
            label={ResourceType.Memory}
            name={ResourceType.Memory}
            value={reqResource[2].amount}
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
