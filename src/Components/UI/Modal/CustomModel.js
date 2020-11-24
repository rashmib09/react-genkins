import { DialogActions, DialogContent, DialogContentText, DialogTitle ,Button, Dialog} from '@material-ui/core'
import React from 'react'

const customModal = (props) =>{

return  <Dialog
fullWidth
maxWidth='xs'
open={props.isOpen}
onClose={props.handleClose}
aria-labelledby="max-width-dialog-title"
className={props.class_name}
>
<DialogTitle id="max-width-dialog-title">{props.title}</DialogTitle>
<DialogContent >
<DialogContentText>{props.subtitle}</DialogContentText>
{props.children}
</DialogContent>

<DialogActions className="modal_footer">
  <div className="col-md-6 btn-one" onClick={props.handleSubmit}>
<Button classes={{ label: 'btn-orange primary-link pull-left' }}>
   {props.btnText}
</Button>
</div>
<div className="col-md-6 btn-two">
<Button onClick={props.handleClose}>
    CANCEL
</Button>
</div>
</DialogActions>
</Dialog>

}
export default customModal;

customModal.protoTypes ={

  
}