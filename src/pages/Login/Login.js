import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Images } from '../../assets';
import CallIcon from '@mui/icons-material/Call';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OtpInput from 'react-otp-input';
import "./Login.css";
const defaultTheme = createTheme();

function Login() {
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [tabs, setTabs] = React.useState(0);
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmNewPassword, setConfirmNewPassword] = React.useState('');
    const [showNP, setShowNP] = React.useState(false);
    const [showCNP, setShowCNP] = React.useState(false);
    const [fgEmail, setFgEmail] = React.useState('');
    const [otp, setOtp] = React.useState('');
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    
    const handleVerifyOtpSubmit = (event) => {
        event.preventDefault();
    };

    const handleOtpSubmit = (event) => {
        setTabs(3)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("login")
    };

    const handleForgotPassword = (event) => {
        setTabs(2)
        event.preventDefault();
    };

    const forgotPassword = () => (
        <Box>
            <Typography component="h1" variant="h4" className='form-heading'>
                Forgot Password?
            </Typography>
            <Typography component="h1" variant="h4" className='form-subheading'>
                No worries, we'll send you reset instructions.
            </Typography>
            <Typography component="h1" variant="h4" className='form-subheading'>
                You can <Button onClick={() => { setTabs(0) }} variant="text" size="small" className='form-button' >Login here!</Button>
            </Typography>
            <Box component="form" onSubmit={handleForgotPassword} sx={{ mt: 1, display: 'grid' }}>
                <TextField
                    className='form-inputs'
                    id="input-with-icon-textfield"
                    label="Email"
                    placeholder="Enter your email address"
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    autoComplete="email"
                    type='email'
                    autoFocus
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={Images.EmailIcon} alt="logo" />
                            </InputAdornment>
                        ),
                        style: { fontSize: '16px', paddingBottom: '5px', fontWeight: '400', borderBottom: '1px solid #643FDB' },
                        sx: {
                            "& input": {
                                color: "#1C1243"
                            }
                        }
                    }}
                    value={fgEmail}
                    onChange={e => setFgEmail(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className='submit-btn'
                >
                    Reset Password
                </Button>
            </Box>
        </Box>
    );

    const enterOtp = () => (
        <Box>
            <Typography component="h1" variant="h4" className='form-heading'>
                Enter OTP
            </Typography>
            <Typography component="h1" variant="h4" className='form-subheading'>
                We have share a code to your Email id
            </Typography>
            <Typography component="h1" variant="h4" className='form-subheading'>
                vaibhavshukla@pixoatic.com<Button onClick={() => { setTabs(1) }} variant="text" size="small" className='form-button' >Edit</Button>
            </Typography>
            <Box component="form" onSubmit={handleOtpSubmit} sx={{ mt: 1, display: 'grid' }}>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                        width: '40px',
                        height: '40px',
                        fontSize: '16px',
                        fontWeight: 600,
                        border: 'none',
                        borderBottom: '2px solid #A29EB6'
                    }}
                    containerStyle={{
                        justifyContent: 'space-evenly',
                        marginTop: '20px'
                    }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className='submit-btn'
                >
                    Verify
                </Button>
            </Box>
            <Typography component="h1" variant="h4" className='form-subheading'>
                Don't receive the email? <Button onClick={handleForgotPassword} variant="text" size="small" className='form-button' >Click to resend</Button>
            </Typography>
        </Box>
    );

    const newPasswordScreen = () => (
        <Box>
            <Typography component="h1" variant="h4" className='form-heading'>
                Set new password
            </Typography>
            <Typography component="h1" variant="h4" className='form-subheading'>
                Your new password must be different to previously used passwords.
            </Typography>
            <Typography component="h1" variant="h4" className='form-subheading'>
                You can <Button onClick={() => { setTabs(0) }} variant="text" size="small" className='form-button' >Login here!</Button>
            </Typography>
            <Box component="form" onSubmit={handleVerifyOtpSubmit} sx={{ mt: 1, display: 'grid' }}>
                <TextField
                    className='form-inputs'
                    id="input-with-icon-textfield"
                    label="Password"
                    placeholder="Enter your Password"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    autoComplete="current-password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={Images.PasswordIcon} alt="logo" />
                            </InputAdornment>
                        ),
                        style: { fontSize: '16px', paddingBottom: '5px', fontWeight: '400' },
                        sx: { "& input": { color: "#1C1243" } },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { setShowNP(e => !e) }}
                                    onMouseDown={() => { setShowNP(e => !e) }}
                                >
                                    {showNP ? <VisibilityOff style={{ fontSize: '20px', color: '#A29EB6' }} /> : <Visibility style={{ fontSize: '20px', color: '#A29EB6' }} />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    type={showNP ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <TextField
                    className='form-inputs'
                    id="input-with-icon-textfield"
                    label="Password"
                    placeholder="Confirm your Password"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    autoComplete="current-password"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <img src={Images.PasswordIcon} alt="logo" />
                            </InputAdornment>
                        ),
                        style: { fontSize: '16px', paddingBottom: '5px', fontWeight: '400' },
                        sx: { "& input": { color: "#1C1243" } },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => { setShowCNP(e => !e) }}
                                    onMouseDown={() => { setShowCNP(e => !e) }}
                                >
                                    {showCNP ? <VisibilityOff style={{ fontSize: '20px', color: '#A29EB6' }} /> : <Visibility style={{ fontSize: '20px', color: '#A29EB6' }} />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    type={showCNP ? "text" : "password"}
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className='submit-btn'
                >
                    Reset password
                </Button>
            </Box>
        </Box>
    );

    const resetPopup = () => (
        <Box>
            <Typography component="h1" variant="h4" className='form-heading'>
                Password reset
            </Typography>
            <Typography component="h1" variant="h4" className='form-subheading'>
                Your password has been successfully reset.
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1, display: 'grid' }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className='submit-btn'
                    onClick={() => {
                        setFgEmail('');
                        setOtp('');
                        setNewPassword('');
                        setConfirmNewPassword('');
                        setTabs(0);
                    }}
                >
                    Continue
                </Button>
            </Box>
        </Box>
    );


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container className='main-container' component="main" >
                <CssBaseline />
                <Grid item xs={12} sm={12} md={6} >
                    <Box className="login-container">
                        <Box className="app-logo" >
                            <img src={Images.AppLogo} alt="logo" />
                        </Box>
                        <Box className="form-container">
                            <Box className='form-control'>
                                {tabs == 0 ? (
                                    <Box>
                                        <Typography component="h1" variant="h4" className='form-heading'>
                                            Sign in
                                        </Typography>
                                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, display: 'grid' }}>
                                            <TextField
                                                className='form-inputs'
                                                id="input-with-icon-textfield"
                                                label="Email"
                                                placeholder="Enter your email address"
                                                variant="standard"
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="email"
                                                autoComplete="email"
                                                autoFocus
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <img src={Images.EmailIcon} alt="logo" />
                                                            {/* <EmailOutlinedIcon style={{ fontSize: '20px', color: '#000' }} /> */}
                                                        </InputAdornment>
                                                    ),
                                                    style: { fontSize: '16px', paddingBottom: '5px', fontWeight: '400' },
                                                    sx: {
                                                        "& input": {
                                                            color: "#1C1243"
                                                        }
                                                    }
                                                }}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />

                                            <TextField
                                                className='form-inputs'
                                                id="input-with-icon-textfield"
                                                label="Password"
                                                placeholder="Enter your Password"
                                                margin="normal"
                                                required
                                                fullWidth
                                                name="password"
                                                autoComplete="current-password"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <img src={Images.PasswordIcon} alt="logo" />
                                                            {/* <LockOutlinedIcon style={{ fontSize: '20px', color: '#000' }} /> */}
                                                        </InputAdornment>
                                                    ),
                                                    style: { fontSize: '16px', paddingBottom: '5px', fontWeight: '400' },
                                                    sx: {
                                                        "& input": {
                                                            color: "#1C1243"
                                                        }
                                                    },
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                onMouseDown={handleMouseDownPassword}
                                                            >
                                                                {showPassword ? <VisibilityOff style={{ fontSize: '20px', color: '#A29EB6' }} /> : <Visibility style={{ fontSize: '20px', color: '#A29EB6' }} />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                variant="standard"
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />

                                            <Grid container className='form-links'>
                                                <Grid item>
                                                    <FormControlLabel
                                                        className='custom-checkbox-label'
                                                        control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} value="remember" color="primary" />}
                                                        label="Remember me"
                                                    />
                                                </Grid>

                                                <Grid item >
                                                    <Button onClick={() => { setTabs(1) }} variant="text" size="small" className='forgot-password' >
                                                        Forgot password?
                                                    </Button>
                                                </Grid>
                                            </Grid>


                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                className='submit-btn'
                                                sx={{ marginTop: '0px !important' }}
                                            >
                                                Login
                                            </Button>
                                        </Box>
                                    </Box>
                                ) : (
                                    tabs == 1 ? (
                                        forgotPassword()
                                    ) : (tabs == 2 ? (
                                        enterOtp()
                                    ) : (tabs == 3 ? (
                                        newPasswordScreen()
                                    ) : (
                                        resetPopup()
                                    ))))
                                }
                            </Box>
                        </Box>

                    </Box>
                </Grid>

                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                    className='login-poster'
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box className='contact-info'>
                            <CallIcon style={{ color: '#fff', fontSize: '20px' }} />
                            <Typography component="h1" variant="h5" style={{ color: '#fff', marginLeft: '5px', fontSize: '15px', fontWeight: '500' }}>
                                +91 9041709902
                            </Typography>
                        </Box>
                        <Box className='login-image'>
                            <img src={Images.LoginBanner} className="poster-image" alt="poster" />
                        </Box>
                        <Box className='footer-info'>
                            <Typography component="h1" variant="h2" className='footer-heading'>
                                Sign in to Team on Deck
                            </Typography>
                            <Typography component="h1" variant="h4" className='footer-subheading'>
                                Always happy to assist you.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;