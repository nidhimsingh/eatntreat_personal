import * as React from 'react';
import { useRef } from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography, Button, Divider, Link, Modal} from "@mui/material";
import { FormGroup } from 'react-bootstrap'
import swal from 'sweetalert';


import './loginStyle.css'
import firebaseConfig from '../firebase';

export var user=null;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 425,
  bgcolor: 'background.paper',
  border: '1px solid #141414',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,

};

const useStyles = makeStyles((theme) => ({

    avatar: {
      margin: "0 8px"
    },

    input: {
        padding: "10px",
        lineHeight: "normal",
        textAlign: "center",
        "&&:placeholder": { color: "#f00", },
    },
    submit: {

    }
  }));



export default function BootLogin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const classes = useStyles();

  const [openLogin, setOpenLogin] = React.useState(false);
  // const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const handleOpenLogin = () => {
    setOpenLogin(prev => !prev)
  };

  function handleSubmit(e){
    e.preventDefault();
    firebaseConfig.auth().signInWithEmailAndPassword(emailRef,passwordRef)
            .then(function(){

              swal({
                title:"Logged In Successfully !",
                icon:"success",
                buttons:false,
                timer:2000
              });
              user = firebaseConfig.auth().currentUser;
              
              console.log("login ",user)
            })
            .catch(function(error) {
          var errorMessage = error.message;
            swal({
              title:"Error!",
              text:errorMessage,
              buttons:false,
              timer:2000,
              icon:"error"
            }); 
            })
  }

  return (
    <div>
      <Button onClick={handleOpenLogin}> Login </Button>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >

    <Box sx={style} >

        <Typography id="login-modal-title" variant="h5" component="h3" textAlign="center" fontWeight="bold">
            Log In
        </Typography>

        <div id="login-modal-description" className="paperLogin">
        <form  className={classes.form} onSubmit={handleSubmit}>

          <Grid container spacing={1}>
              <Grid item xs={12} >
                <FormGroup>
                  <input type="email"
                  // value={this.state.email}
                  // onChange={this.handleEmailChange}
                  className="form-control" ref = {emailRef} placeholder="Enter Email"/>
                </FormGroup>
              </Grid>
              <Grid item xs={12} >
                <FormGroup>
                  <input type="password"
                  // value={this.state.password}
                  // onChange={this.handlePasswordChange}
                  className="form-control" ref={passwordRef} placeholder="Enter Password"/>
                </FormGroup>
              </Grid>
              <Grid item xs={12} >
                <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                  >
                      Log In
                  </Button>
              </Grid>
              <Grid item xs={12} >
                <Divider spacing={1}></Divider>
              </Grid>

          </Grid>


            </form>


            <Box sx={ { textAlign:"center", textDecoration: "none", margin: "0px"}}>

                <Link href="#" variant="body2" style={{ textDecoration: "none" }}>
                    New to EatNTreat?   <span style={{color: "coral", fontSize: "1.1rem"}}>Create Account </span>
                </Link>
            </Box>


       </div>


        </Box>

        </Modal>

    </div>
  );
}
