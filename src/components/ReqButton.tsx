import React from "react";
import theme from "../_theme";
import { Button, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

interface ReqButtonProps {
  text: string;
  setDialogOpen: (isOpen: boolean) => void;
}

const ReqButton: React.FC<ReqButtonProps> = ({
  text,
  setDialogOpen,
}: ReqButtonProps) => {
  return (
    <Button
      variant="outlined"
      startIcon={<Add />}
      onClick={() => setDialogOpen(true)}
      sx={{
        textTransform: "none",
        my: 1,
        py: 1,
        borderRadius: 3,
        border: "1px solid black",
        color: "white",
        backgroundColor: theme.palette.background.paper,
        "&:hover": {
          color: "black",
          backgroundColor: "white",
        },
      }}
    >
      <Typography variant="body1" sx={{ fontSize: 11, fontWeight: "bold" }}>
        {text}
      </Typography>
    </Button>
  );
};

export default ReqButton;
