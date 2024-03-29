import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Notes from "./Notes";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: "hidden",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function EditModal({
  right,
  setRight,
  notes,
  setNewTitle,
  setDesc,
}) {
  //   const [open, setOpen] = React.useState(right);
  const title = notes.map((item) => item.title);
  const [newValue, setNewValue] = useState(title);
  const desc = notes.map((item) => item.desc);
  const [newDesc, setNewDesc] = useState(desc);
  console.log("NewData", newValue, newDesc);
  console.log("EditModal", { notes });

  const handleClickOpen = () => {
    setRight(true);
  };
  const handleClose = () => {
    setRight(false);
  };
  const handleEdit = () => {
    setNewTitle(newValue);
    setDesc(newDesc);
    setRight(false);
  };
  return (
    <div>
      {/* <Notes handleClickOpen={handleClickOpen} /> */}

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={right}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Note
        </DialogTitle>
        <DialogContent dividers>
          <Box
            sx={{
              //   display: "flex",
              //   alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
            // style={{ justifyContent: "center" }}
          >
            {notes.map((item) => (
              <>
                <div>
                  <TextField
                    id="editTitle"
                    // label="Title"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    multiline
                    rows={1}
                  />
                </div>
                <br />
                <div>
                  <TextField
                    id="editDesc"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    label="Description"
                    multiline
                    rows={4}
                  />
                </div>
              </>
            ))}
          </Box>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button
            autoFocus
            onClick={handleEdit}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
