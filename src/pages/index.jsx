import { LastCont } from "@/components/LastCont";
import { MiddleCont } from "@/components/MiddleCont";
import { SongCont } from "@/components/SongCont";
import { TopContainer } from "@/components/TopContainer";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shyna</title>
        <meta name="description" content="Join Shyna, an author and journalist, as she explores the latest trends in economics and information technology. Discover insightful articles and fresh perspectives that inform and inspire." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: { xs: "contents", md: "none" },
        }}
      >
        <Typography
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            color: "#604CC3",
            bgcolor: "#604CC320",
          }}
        >
          Open on Mac / Windows
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "contents" } }}>
        <TopContainer />
        <SongCont />
        <MiddleCont />
        <LastCont />
      </Box>
    </>
  );
}
