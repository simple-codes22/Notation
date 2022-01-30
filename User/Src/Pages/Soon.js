import React from 'react';
import { 
    Box, // Use this in place of a div 👈👈
    Button,
} from '@mui/material'; 
import { makeStyles } from '@mui/styles'; // For making custom styles for every component
import NotationImg from '../../../Base/Static/Images/SVG/Notation over.svg';

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
        fontSize: '22px',
        width: '900px',
        textAlign:'center',
        color: '#4b4a4a'
    },
    CSPrompt: {
        fontSize: '40px',
        margin: '20px',
        fontWeight: '600',
        textAlign:'center',
        color: '#4b4a4a'
    }
}))

const Soon = () => {
    const useStyle = soonStyle(); // A declaration of the intention to use the style
    return (
        <Box component='div' className={useStyle.root}>
            <Box component='div' className={useStyle.imageCover}>
                <img src={NotationImg} alt="Notation Logo Image" />
            </Box>
            <Box component='div' className={useStyle.CSPrompt}>Coming Soon 🤞🤞</Box>
            <Box component='div' className={useStyle.intro}>  {/* Introduction section teasing the arrival of Notation */}
                Notation!! A cool math quiz app aimed at buiding mathematical skills of individuals.
                Currently in a closed beta.
            </Box>
            
        </Box>
    );
};

export default Soon;
