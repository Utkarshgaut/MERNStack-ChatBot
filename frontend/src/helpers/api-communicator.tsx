import axios from "axios";

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("/user/login", { email, password });
    if (res.status !== 200) {
        throw new Error("Unable to login");
    }
    const data = res.data; // Removed unnecessary `await`
    return data;
};

export const checkAuthStatus = async () => {
    const res = await axios.get("/user/auth-status"); // Changed to GET
    if (res.status !== 200) {
        throw new Error("Unable to authenticate"); // Fixed typo
    }
    const data = res.data; // Removed unnecessary `await`
    return data;
};

export const sendChatRequest = async (message: string) => {
    const res = await axios.post("/chat/new", { message }); // Changed to GET
    if (res.status !== 200) {
        throw new Error("Unable to Send Chat "); // Fixed typo
    }
    const data = res.data; // Removed unnecessary `await`
    return data;
};