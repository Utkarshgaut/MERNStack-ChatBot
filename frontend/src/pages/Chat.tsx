import { Avatar, Box, Typography, Button, IconButton } from "@mui/material";
import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";
import { sendChatRequest } from "../helpers/api-communicator";
type Message = {
    role: "user" | "assistant";
    content: string;
}

const Chat = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const auth = useAuth();
    const [ChatMessages, setChatMessages] = useState<Message[]>([]);
    const handleSubmit = async () => {
        // console.log(inputRef.current?.value);
        const content = inputRef.current?.value as string;
        if (inputRef && inputRef.current) {
            inputRef.current.value = "";
        }
        const newMessage: Message = { role: "user", content };
        setChatMessages((prev) => [...prev, newMessage]);
        const chatData = await sendChatRequest(content);
        setChatMessages((prev) => [...prev, ...chatData.chat]);
    };
    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                width: "100%",
                height: "100%",
                mt: 3,
                gap: 3,
            }}
        >
            {/* Fixing the syntax for display and ensuring proper CSS */}
            <Box
                sx={{
                    display: { md: "flex", xs: "none", sm: "none", flex: 0.2, flexDirection: "column" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        height: "60vh", // Fixing typo '60vh0' to '60vh'
                        bgcolor: "rgb(30,30,30)",
                        borderRadius: 5,
                        flexDirection: "column",
                        mx: 3,
                    }}
                >
                    <Avatar sx={{ mx: "auto", my: 2, bgcolor: "Orange", color: "black", fontWeight: 700, }}>
                        {auth?.user?.name[0]}
                        {auth?.user?.name.split(" ")[1][0]}
                    </Avatar>
                    <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
                        You Are Talking To A ChatBot
                    </Typography>
                    <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
                        You can ask questions to the bot related to any topic like
                        (Knowledge,Business,Advices,Education,etc)
                        But rembember to avoid sharing personal details.
                    </Typography>
                    <Button sx={{ width: "200px", my: "auto", color: "white", fontWeight: "700", borderRadius: 5, mx: "auto", bgcolor: "rgb(255, 94, 34)", ":hover": { bgcolor: "rgb(245, 43, 38)" } }}>
                        Clear Conversation
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: "flex", flex: { md: 0.8, xs: 1, sm: 1 }, flexDirection: "column", px: 1.5 }}>
                <Typography sx={{ fontSize: "40px", color: "whitesmoke", mb: 2, mx: "auto", fontWeight: "700" }}>
                    Model - GPT 3.5 Turbo
                </Typography>
                {/* for Chat with bot */}
                <Box sx={{ width: "100%", height: "60vh", borderRadius: 5, mx: "auto", display: "flex", flexDirection: "column", overflow: "scroll", overflowX: "hidden", overflowY: "auto", scrollBehavior: "smooth", }}>

                    {ChatMessages.map((chat, index) => <ChatItem content={chat.content} role={chat.role} key={index} />)}
                </Box>
                <div style={{ width: "100%", padding: "20px", borderRadius: "20px", backgroundColor: "rgb(30,30,30,0.8)", display: "flex", margin: "auto" }}>
                    <input ref={inputRef} type="text" style={{ width: "100%", backgroundColor: "transparent", padding: "10px", border: "none", outline: "none", fontSize: "20px", color: "whitesmoke", }} />
                    <IconButton onClick={handleSubmit} sx={{ ml: "auto", color: "white", fontSize: "30px" }}>
                        <IoMdSend />

                    </IconButton>
                </div>

            </Box>
        </Box>
    );
};

export default Chat;
