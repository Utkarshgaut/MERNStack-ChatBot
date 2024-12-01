import { Box, Button, Typography } from "@mui/material";
import React from "react";
import CustomizedInput from "../components/shared/CustomizedInput";
import { IoIosLogIn } from "react-icons/io";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
    const auth = useAuth()
    const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const Email = formData.get("Email") as string ;
        const Password = formData.get("Password") as string ;
        try {
            toast.loading("Signing In",{id: "login"});
            await auth?.login(Email,Password);
            toast.success("Successfully SignedIn to the MERN-GPT",{id: "login"});
        } catch (error) {
            console.log(error);            
            toast.error("Signing In Failed",{id: "login"});
        }
        console.log(Email,Password);
        
    }
  return (
 <Box width={"100%"} height={"100%"} display="flex" flex={1}>
        <Box padding={9} mt={8} display={{md: "flex",sm:"none", xs:"none" }}>
            {/* <img src="/KABA.png" alt="Robot" style={{width:"450px"}}/> */}
            <img src="/WelcomeBot.png" alt="Robot" style={{width:"450px"}}/>
        </Box>
        < Box display={"flex"} flex={{xs: 1, md: 0.5}} justifyContent={"center"} alignItems={"center"} padding={2} ml={"auto"} mt={16}>
            <form 
                onSubmit={(handelSubmit)}
            style={{
                margin: "auto",
                padding:"30px",
                boxShadow: "10px 10px 20px #000",
                borderRadius: "20px",
                border: "none", 
            }} >
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <Typography variant="h4" textAlign="center" padding={2} fontWeight={600}>
                        Login
                    </Typography>
                    <CustomizedInput type="email" name="Email" label="Email"/>
                    <CustomizedInput type="password" name="Password" label="Password"/>
                    {/* <Button type="Submit" sx={{px:2,py:1,mt:2,width:"400px",borderRadius:2,bgcolor:"#FF8C00",color:"white",":hover":{bgcolor:"white",color:"#FF8C00"}}} endIcon={IoIosLogIn}>Login</Button> */}
                    <Button 
  type="submit" 
  sx={{
    px: 2, 
    py: 1, 
    mt: 2, 
    width: "400px", 
    borderRadius: 2, 
    bgcolor: "#FF8C00", 
    color: "white", 
    ":hover": { bgcolor: "white", color: "#FF8C00" }
  }} 
  endIcon={<IoIosLogIn />} // Wrap the icon in JSX
>
  Login
</Button>

                </Box>
            </form>
        </Box>

    </Box>


    );
};

export default Login;
