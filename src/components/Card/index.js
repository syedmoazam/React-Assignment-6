import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';

function MyCard(props) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography mt={1} mb={1} variant="h5" sx={{fontWeight:'bold', color: '#ff7e1d'}}>
                    {props.heading}
                </Typography>
                {props.children}
            </CardContent>
        </Card>
    )
}

export default MyCard;