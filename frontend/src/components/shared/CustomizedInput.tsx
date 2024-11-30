// import React from "react";
// import TextField from "@mui/material/TextField";
// type Props = {
//   name: string;
//   type: string;
//   label: string;
// };
// const CustomizedInput = (props: Props) => {
//   return (
//     <TextField
//       margin="normal"
//       InputLabelProps={{ style: { color: "white" } }}
//       name={props.name}
//       label={props.label}
//       type={props.type}
//       InputProps={{
//         style: {
//           width: "400px",
//           borderRadius: 10,
//           borderColor: "orange",
//           fontSize: 20,
//           color: "white",
//         },
//       }}
//     />
//   );
// };

// export default CustomizedInput;



import React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

type Props = {
  name: string;
  type: string;
  label: string;
};

const CustomizedInput = (props: Props) => {
  return (
    <TextField
      margin="normal"
      name={props.name}
      label={props.label}
      type={props.type}
      variant="outlined"
      InputLabelProps={{ style: { color: "white", fontSize: "16px" } }}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "gray", // Default border color
          },
          "&:hover fieldset": {
            borderColor: "yellow", // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "orange", // Border color on focus
          },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "orange", // Label color on focus
        },
      }}
    />
  );
};

export default CustomizedInput;
