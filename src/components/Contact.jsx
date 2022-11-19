import React, { useRef } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import emailjs from '@emailjs/browser';
import Banner from '../assets/diseño gráico.png';
import Banner2 from '../assets/banner2.jpg';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_68zy76h', 'template_bwh3afu', form.current, 'Vc9j4L9VzaU8dNTQi')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
        setOpen(true);

      }, (error) => {
        console.log(error.text);
      });


  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }




  return (
    <div  name='contact'>
      <div className='w-full  bg-[#adb5bd] flex justify-center items-center p-4 pt-20'>
        <img className='mx-auto ' src={Banner} alt="HTML icon" />
      </div>
      <div className='w-full h-screen bg-[#adb5bd] flex justify-center items-center p-4 pt-20'>


        <div className='bg-[#adb5bd] m-20 '>
          <List sx={{ width: '100%', maxWidth: 360 }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WhatsAppIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="WhatsApp" secondary="1144776913 - 1122423900" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <InstagramIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Instagram" secondary="@spagnaasociados" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Email" secondary="spagnayasoc@gmail.com" />
            </ListItem>
          </List>
        </div>
        <form className='flex flex-col max-w-[600px] w-full' ref={form}  onSubmit={sendEmail}   >
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-200 text-stone-800'>Contactenos</p>
            {/* <p className='text-[#829e7e] py-4'>Submit the form below or shoot me an email - julianmoreyra.192@gmail.com</p> */}
          </div>
          <label>Name</label>
          <input className='bg-[#f1f2f3] p-2' type="text" name="user_name" />
          <label>Email</label>
          <input className='my-4 p-2 bg-[#f1f2f3]' type="email" name="user_email" />
          <label>Télefono</label>
          <input className='my-4 p-2 bg-[#f1f2f3]' type="number" name="user_cel" />
          <label>Message</label>
          <textarea className='bg-[#f1f2f3] p-2' name="message" />
          <input className="text-white border-2 hover:bg-gray-200 hover:border-gray-200 px-4 py-3 my-8 mx-auto flex items-center" type="submit" value="Send" variant="outlined" />
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Su mensaje ha sido enviado con éxtito. En breve nos comunicaremos contigo.
            </Alert>
          </Snackbar>


        </form>

      </div>
      <div className='w-full  bg-[#adb5bd] bg-scroll	 flex justify-center items-center'>
        <img className='mx-auto ' src={Banner2} alt="HTML icon" />
      </div>
    </div>
  );
};

export default Contact