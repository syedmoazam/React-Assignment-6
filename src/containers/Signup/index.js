import MenuBar from '../../components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCard from '../../components/Card';
import BasicTextFields from '../../components/Input';
import BasicDivider from '../../components/Divider';
import { Box } from '@mui/system';
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import BasicButtons from '../../components/Button'
import './css/style.css'
import { useState } from 'react'

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <MenuBar />
            <div className="background-image mt-20">
                <Container maxWidth>
                    <Grid container >
                        <Grid xs={false} sm={3} />
                        <Grid mt={3} justify="center" item xs={12} sm={6}>
                            <MyCard heading="Signup" >
                                <div className="mt-20">
                                    <BasicTextFields type="text" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="mt-20">
                                    <BasicTextFields type="text" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mt-20">
                                    <BasicTextFields type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mt-20">
                                    <BasicButtons title="Login" />
                                </div>
                                <div className="mt-20">
                                    <BasicDivider text="OR" />
                                </div>
                                <div className="mt-20">
                                    <Box maxWidth>
                                        <FacebookLoginButton />
                                    </Box>
                                </div>
                                <div className="mt-20">
                                    <Box maxWidth>
                                        <GoogleLoginButton />
                                    </Box>
                                </div>
                                <div className="mt-20">
                                    <Box maxWidth>
                                        <GithubLoginButton />
                                    </Box>
                                </div>
                            </MyCard>
                        </Grid>
                        <Grid xs={false} sm={3} />
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Signup;