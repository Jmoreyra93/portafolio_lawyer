import React, { useRef } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Bounce from 'react-reveal/Bounce';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4xgi5ue', 'template_lxfuhqe', form.current, '4C94SMO99aBAWRtCp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#f6f5e2] flex justify-center items-center p-4 pt-20'>
      <Bounce>

        <div>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WhatsAppIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Llamenos" secondary="1140404040" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <BeachAccessIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </div>

        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-200 text-stone-800'>Contactenos</p>
            {/* <p className='text-[#829e7e] py-4'>Submit the form below or shoot me an email - julianmoreyra.192@gmail.com</p> */}
          </div>

          <input className='bg-[#f1f2f3] p-2' type="text" placeholder='Name' name='user_name' />
          <input className='my-4 p-2 bg-[#f1f2f3]' type="email" placeholder='Email' name='user_email' />
          <textarea className='bg-[#f1f2f3] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <input type="submit" value="Enviar"  className="text-white border-2 hover:bg-orange-200 hover:border-orange-200 px-4 py-3 my-8 mx-auto flex items-center" />
        </form>
      </Bounce>
    </div>
  );
};

export default Contact