import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center", // Ensure vertical centering
                gap: "8px", // Space between the image and text
                marginRight: "auto", // Align to the left
            }}
        >
            <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
                <img
                    src="/abc.png" // Make sure the logo path is correct
                    alt="Designer"
                    width={"60px"}
                    height={"60px"}
                    className="image-inverted"
                />
                <Typography
                    sx={{
                        display: { md: "block", sm: "none", xs: "none" },
                        mr: "auto",
                        fontWeight: "800",
                        textShadow: "2px 2px 20px #000",
                        fontSize: "20px", // Adjust text size to match logo size
                    }}
                >
                    MERN-GPT
                </Typography>
            </Link>
        </div>
    );
};

export default Logo;
