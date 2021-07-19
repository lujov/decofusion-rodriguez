import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const PersonalInfo = ({openPersonalInfo,setOpenPersonalInfo,sendInfo}) => {
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();

  const handleClose = () => {
    setOpenPersonalInfo(false);
  };

  return (
    <div>
      <Dialog open={openPersonalInfo} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Datos de contacto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Completa los siguientes datos para que podamos continuar con la compra!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
            onChange={e => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={e => setEmail(e.target.value)}
          />
            <TextField
            margin="dense"
            id="tel"
            label="Telefono"
            type="number"
            fullWidth
            onChange={e => setPhone(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={e => sendInfo(name,phone,email) && handleClose} color="primary" type="sumbit">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}