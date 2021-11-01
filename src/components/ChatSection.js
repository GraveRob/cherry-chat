import { Button, Container, Grid, TextField, ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";
import { useContext } from "react";
import Loader from "./Loader";
import Message from "./Message";
import { cherry } from "../themes";

export default function ChatSection (props) {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );
    async function sendMessage () {
        if (value === '') return;
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setValue('');
    }
    console.log(user.photoURL)
    if (loading) return <Loader />
    return (
        <ThemeProvider theme = {cherry}>
            <Container>
                <Grid container
                      justifyContent = "center">
                    <div className = "chat">
                        {
                            messages.map( message => <Message src = {message.photoURL}
                                                              displayName = {message.displayName}
                                                              text = {message.text}
                                                              userId = {user.uid} 
                                                              messageId = {message.uid}
                                                              key = {message.uid} />)
                        }
                    </div>
                    <Grid container
                          alignItems = {"flex-end"}
                          direction = {"column"} 
                          justifyContent = "center">
                        <TextField 
                            variant = "outlined" 
                            style = {{marginTop: "5px"}}
                            value = {value}
                            onChange = {e => setValue(e.target.value)}
                            fullWidth />
                        <Button color = "primary" onClick = {sendMessage} variant = "contained" style = {{marginTop: "3px"}}>SEND</Button>
                    </Grid>
                      
                </Grid>
            </Container>
        </ThemeProvider>
    );
}