import { Box, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "rgb(227,225,214)", py: 2, mt: 2 }}>
        <Box
          sx={{
            border: "1px solid #353535",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 2, md: 0 },
            alignItems: "center",
            justifyContent: "space-between",
            mx: 1,
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", md: "flex-start" },
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ color: "#999991" }}
              fontSize="14px"
              className="sf-medium"
            >
              All right reserved
            </Typography>
            <Typography
              sx={{ color: "#353535" }}
              fontSize="14px"
              className="sf-medium"
            >
              ©{" "}
              <Box
                component={"a"}
                href="https://snowchildstudio.com/"
                target="_blank"
              >
                SnowChild Studios
              </Box>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography
              component={"a"}
              href="/terms-and-condition"
              sx={{ color: "#353535" }}
              fontSize="14px"
              className="sf-medium"
            >
              Terms and condition
            </Typography>

            <Typography
              component={"a"}
              href="/privacy-policy"
              sx={{ color: "#353535" }}
              fontSize="14px"
              className="sf-medium"
            >
              Privacy Policy
            </Typography>
            <Typography
              component={"a"}
              href="/sitemap"
              sx={{ color: "#353535" }}
              fontSize="14px"
              className="sf-medium"
            >
              Sitemap
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
