import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Bounce from 'react-reveal/Bounce';

const Contact = () => {
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
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-200 text-stone-800'>Contactenos</p>
            {/* <p className='text-[#829e7e] py-4'>Submit the form below or shoot me an email - julianmoreyra.192@gmail.com</p> */}
          </div>
          <input className='bg-[#f1f2f3] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#f1f2f3]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#f1f2f3] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-orange-200 hover:border-orange-200 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>
      </Bounce>
    </div>
  )
}

export default Contact