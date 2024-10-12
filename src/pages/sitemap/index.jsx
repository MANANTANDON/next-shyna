import React from "react";
import { Layout } from "@/components/Layout";
import { Home } from "@mui/icons-material";
// import { LocationBreadcrumb } from "@/components/extras/LocationBreadcrumb";
import { Box, Container, Typography } from "@mui/material";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Shyna Gupta Sitemap</title>
        <link rel="canonical" href="https://shynagupta.com/sitemap" />
        <meta property="og:title" content="Sitemap - Shyna Gupta" />

        <meta
          name="description"
          content="Easily navigate through our sitemap to find all the latest news updates. Stay informed with News Arena India."
        />
        <meta
          name="image"
          property="og:image"
          content="https://shynagupta.com/shynaSignature.png"
        />
        <meta property="og:image:alt" content="logo" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SiteNavigationElement",
              name: "HTML Sitemap",
              url: "https://shynagupta.com/sitemap",
            }),
          }}
        />
      </Head>
      <Layout>
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#fff", p: 2, my: 5, height: "60vh" }}>
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: "bolder",
              }}
            >
              SITEMAP
            </Typography>
            <Box textAlign="center" sx={{ my: 2 }}>
              <a href="/">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 0.8,
                    "&:hover": {
                      color: "#6087b5",
                    },
                  }}
                >
                  <Home />
                  <Typography sx={{ mt: 0.8 }}>Home</Typography>
                </Box>
              </a>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export default Index;
