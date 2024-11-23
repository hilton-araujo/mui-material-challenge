import Feed from "./components/feed";
import RigthBar from "./components/rigthbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import NavBar from "./components/navbar";
import Add from "./components/add";
import { useState } from "react";
import Sidebar from "./components/sidebar";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <RigthBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
