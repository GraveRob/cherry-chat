import React, { useContext } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { cherry } from "../themes";
import { Context } from "..";
import firebase from "firebase/compat";



export default function LoginForm (props) {
    const theme = cherry;
    const {auth} = useContext(Context);
    const login = async () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(googleProvider);
    }
        return (
            <ThemeProvider theme = {theme}>
                <Container>
                    <Grid container
                          style = {{height: window.innerHeight - 100}}
                          justifyContent = {"center"}
                          alignItems = {"center"}>
                        <form name = "login">
                            <Typography variant = "h5"
                                        component = "h1"
                                        align = "center"
                                        style = {{marginBottom:5}}>
                                            Authorization
                            </Typography>
                            <Button onClick = {login} variant = "contained" color = "primary">Log In with Google</Button>
                        </form>
                    </Grid>
                </Container>
            </ThemeProvider>
        );
}