import Container from '@mui/material/Container';
import './css/style.css'
import MenuBar from '../../components/AppBar';
import MyCard from '../../components/Card';
import BasicButtons from '../../components/Button';
import { Grid } from '@mui/material';
import BasicTextFields from '../../components/Input';
import { useState } from 'react';
import BasicDivider from '../../components/Divider';
import { Box } from '@mui/system';
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
function Login() {
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
                     <MyCard heading="Login" >
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

export default Login;