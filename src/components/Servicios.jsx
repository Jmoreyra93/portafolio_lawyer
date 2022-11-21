import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '25vh',
    [theme.breakpoints.down('md')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover': {
        zIndex: 1,
    },
    '&:hover .imageBackdrop': {
        opacity: 0.15,
    },
    '&:hover .imageMarked': {
        opacity: 0,
    },
    '&:hover .imageTitle': {
        border: '4px solid currentColor',
    },
    '& .imageTitle': {
        position: 'relative',
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const images = [
    {
        url: 'https://images.pexels.com/photos/3602778/pexels-photo-3602778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Delitos de estupefacientes',
        width: '40%',
    },
    {
        url: 'https://images.pexels.com/photos/53351/firearm-handgun-revolver-gun-53351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Delitos contra la vida',
        width: '20%',
    },
    {
        url: 'https://images.pexels.com/photos/5723196/pexels-photo-5723196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Delitos contra la integridad sexual',
        width: '40%',
    },
    {
        url: 'https://images.pexels.com/photos/6266277/pexels-photo-6266277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Delitos contra la propiedad',
        width: '38%',
    },
    {
        url: 'https://images.pexels.com/photos/5240541/pexels-photo-5240541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Delitos informáticos',
        width: '38%',
    },
    {
        url: 'https://images.pexels.com/photos/7773260/pexels-photo-7773260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Delitos contra la libertad',
        width: '24%',
    },
    {
        url: 'https://images.pexels.com/photos/163431/fist-blow-power-wrestling-163431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Delitos contra la integridad física',
        width: '40%',
    },
    {
        url: 'https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Etapa de ejecución',
        width: '20%',
    },
    {
        url: 'https://s3.amazonaws.com/public.diariojudicial.com/imagenes/000/078/875/000078875.jpg',
        title: 'Libertad condicional',
        width: '40%',
    },

];

export default function ProductCategories() {
    return (
        <>
            <div name='servicios' className='w-full py-16 bg-[#212529] max-lg:p-16'>
                <div className='flex flex-col justify-center items-center w-full h-full'>
                    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                        <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-amber-400 text-white'>Servicios</p>

                        </div>
                    </div>

                    <div className='w-full bg-[#212529] text-stone-800'>

                        <Container component="section" >
                            <Typography variant="h4" marked="center" align="center" component="h2">
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                {images.map((image) => (
                                    <ImageIconButton
                                        key={image.title}
                                        style={{
                                            width: image.width,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center 40%',
                                                backgroundImage: `url(${image.url})`,
                                            }}
                                        />
                                        <ImageBackdrop className="imageBackdrop" />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'common.white',
                                            }}
                                        >
                                            <Typography
                                                component="h3"
                                                variant="h6"
                                                color="inherit"
                                                className="imageTitle"
                                            >
                                                {image.title}
                                                <div className="imageMarked" />
                                            </Typography>
                                        </Box>
                                    </ImageIconButton>
                                ))}
                            </Box>
                        </Container>

                    </div>
                </div>
            </div>
        </>
    );
}