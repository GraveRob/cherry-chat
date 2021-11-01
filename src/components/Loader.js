import React from 'react';
import { Grid, Container } from '@material-ui/core';

const Loader = () => {
    return (
        <Container>
                    <Grid container
                          style = {{height: window.innerHeight - 100}}
                          justifyContent = {"center"}
                          alignItems = {"center"}>
                        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </Grid>
                </Container>
    );
}

export default Loader;
