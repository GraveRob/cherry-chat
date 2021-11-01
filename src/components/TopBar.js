import { AppBar, Button, ThemeProvider, Toolbar, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { Context } from "..";
import { LOGIN_ROUTE } from "../consts";

export default function TopBar (props) {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return(
        <ThemeProvider  theme = {props.theme}>
            <AppBar position = "static">
                <Toolbar>
                    <Grid container justifyContent = "flex-end">
                        {user ?
                            <Button onClick = {() => auth.signOut()}>Exit</Button>
                        :
                            <NavLink to = {LOGIN_ROUTE}>
                                <Button>Log In</Button>
                            </NavLink>
                            
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}