import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../../context/AuthContext";

const ChatItem = ({ content, role }: {
    content: string; role: "user" | "assistant";

}) => {
    const auth = useAuth()

    return role === "assistant" ? (
        <Box sx={{ display: "flex", p: 2, bgcolor: "#fddb08", my: 2, gap: 2,borderRadius:"20px" }}
        >
            <Avatar sx={{ml:"0"}}>
                
                <img src="abc.png" alt="logo" width={"60px"} />
            </Avatar>
            <Box>
                <Typography sx={{fontSize:"20px",color:"black"}}>
                    {content}
                </Typography>
            </Box>
        </Box>
    ) : (
        <Box sx={{ display: "flex", p: 2, bgcolor: "#ff8c00", gap: 2,borderRadius:"20px",}}
        >
            <Avatar sx={{ml:"0",bgcolor:"black",color:"white"}}>
                {auth?.user?.name[0]}
                {auth?.user?.name.split(" ")[1][0]}
            </Avatar>
            <Box>
                <Typography sx={{fontSize:"20px"}}>
                    {content}
                </Typography>
            </Box>
        </Box>
    );


};

export default ChatItem