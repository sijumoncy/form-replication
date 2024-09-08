import React, { useEffect } from "react";
import "./App.css";
import { fetchSitecoredata } from "./store/dataSlice";
import { Box, Container } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./configs/routes";
import { useAppDispatch } from "./shared/hooks/redux";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSitecoredata());
    console.log("Initial data load - sitecore");
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <Box
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <RouterProvider router={router} />
      </Box>
    </Container>
  );
}

export default App;
