import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ title, onClick }) {
    return (
        <Button style={{color:'#FFF'}} sx={{backgroundColor:"#ff7e1d", fontSize:'20px', textTransform: 'capitalize'}} onClick={onClick} fullWidth={true} variant="contained">{title}</Button>
    );
}