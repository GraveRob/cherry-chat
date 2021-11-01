import { Avatar, Grid, Typography } from "@material-ui/core";

export default function Message (props) {
    return (
        <div className = "message" style = {{
            marginLeft: props.userId === props.messageId ? "auto" : "10px",
            width: 'fit-content'
        }}>
            <Grid container>
                <Avatar src = {props.src} style = {{marginRight: "5px", marginBottom: "5px"}}/>
                <Typography>{props.displayName}</Typography>
            </Grid>
            <Typography>{props.text}</Typography>
            
        </div>
    );
}