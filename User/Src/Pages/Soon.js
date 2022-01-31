import React from 'react';
import { 
    Box, // Use this in place of a div 👈👈
    Button,
    TextField
} from '@mui/material'; 
import { makeStyles } from '@mui/styles'; // For making custom styles for every component
import NotationImg from '../../../Base/Static/Images/SVG/Notation over.svg';
import background from '../../../Base/Static/Images/SVG/Background-1.svg';


/* 
    The "coming soon" page to inform the users that the project would be released soon
*/
const soonStyle = makeStyles(theme => ({ 
    /* Styling for the coming soon page */
    root: {
        position:'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        height: '100%',
        width: '100%',
        background: `url(${background}) no-repeat fixed center`,
        backgroundSize: 'cover',
    },
    imageCover: {
        position: 'absolute',
        top: '5px',
        '& img': {
            width: '350px',
            height: '350px',
        }
    },
    intro: {
        fontSize: '26px',
        width: '850px',
        textAlign:'center',
        color: '#4b4a4a',
        margin: '5px',
    },
    CSPrompt: {
        fontSize: '60px',
        letterSpacing: '1.6px',
        margin: '20px',
        fontWeight: '600',
        textAlign:'center',
        color: '#4b4a4a'
    },
    emailForm: {
        position: 'absolute',
        bottom : '27%',
        display: 'flex',
    },
    email: {
        height: '33px',
        width: '350px',
        padding: '0px 15px',
        fontFamily: 'Roboto, sans-serif !important',
        fontSize: '15px',
        background: '#ffffff76',
        '& div': {
            borderRadius: '0 !important',
            // border: '1.5px solid #4b4a4ab5',
            color: '#4b4a4a',
        },
        '& label': {
            fontFamily: 'Roboto, sans-serif !important',
            color: '#4b4a4a99',
            letterSpacing: '.4px',
        },
        '& fieldset': {
            border: '2px solid #4b4a4ab0',
            borderRight: '0 !important',
        },
    },
    subBtn: {
        height: '56px',
        border: '2px solid #4b4a4ab0 !important',
        borderRadius: '0 !important',
        boxShadow: 'none !important',
        '&:hover': {
            color: '#4b4a4aca',
        },
        '& span': {
        }
    }

}))

const Soon = () => {
    const useStyle = soonStyle(); // A declaration of the intention to use the style
    return (
        <>
            <Box component='div' className={useStyle.root}>
                <Box component='div' className={useStyle.imageCover}>
                    <img src={NotationImg} alt="Notation Logo Image" />
                </Box>
                <Box component='div' className={useStyle.CSPrompt}>Coming Soon</Box>
                <Box component='div' className={useStyle.intro}>  {/* Introduction section teasing the arrival of Notation */}
                    A cool math quiz app aimed at buiding mathematical skills of individuals.
                    Currently in a closed beta.
                </Box>
                <Box component='form' className={useStyle.emailForm}>
                    {/* <input placeholder='Enter username for updates' type="email" name="E-Mail" id="email" className={useStyle.email} /> */}
                    <TextField className={useStyle.email} type='email' name='E-Mail' label='Enter E-Mail' />
                    <Button variant='contained' color='primary' className={useStyle.subBtn}>Notify Me</Button>
                </Box>
            </Box>
        </>
    );
};

export default Soon;
