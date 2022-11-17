import React, { useRef } from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
    <div className='w-full h-screen bg-[#f6f5e2] flex justify-center items-center p-4 pt-20'>
        <form className='flex flex-col max-w-[600px] w-full' ref={form} onSubmit={sendEmail}>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-orange-200 text-stone-800'>Contactenos</p>
            {/* <p className='text-[#829e7e] py-4'>Submit the form below or shoot me an email - julianmoreyra.192@gmail.com</p> */}
          </div>
          <label>Name</label>
          <input className='bg-[#f1f2f3] p-2' type="text" name="user_name" />
          <label>Email</label>
          <input className='my-4 p-2 bg-[#f1f2f3]' type="email" name="user_email" />
          <label>Message</label>
          <textarea className='bg-[#f1f2f3] p-2' name="message" />
          <input className="text-white border-2 hover:bg-orange-200 hover:border-orange-200 px-4 py-3 my-8 mx-auto flex items-center" type="submit" value="Send" />
        </form>
    </div>
  );
};

export default Contact