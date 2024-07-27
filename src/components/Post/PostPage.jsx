import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const PostPage = () => {
  return (
    <Box sx={{ bgcolor: "white", p: 2, my: 2, borderRadius: "7px" }}>
      {/* HEADING */}
      <Typography
        fontSize="35px"
        fontWeight="bold"
        lineHeight="45px"
        sx={{ mt: 5, mb: 2 }}
        textAlign="center"
      >
        Navigating Political Polarization: A Global Analysis of Divisive Trends
      </Typography>
      {/*SUBHEADING*/}
      <Typography
        fontSize="16px"
        textAlign="center"
        sx={{ color: "grey", mt: 2, mb: 5 }}
      >
        Exploring the Rising Divide in U.S., Indian, and European Politics:
        Impacts and Implications
      </Typography>

      {/*IMAGE*/}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: { xs: "200px", sm: "500px" },
          width: "100%",
          borderRadius: "10px",
          my: 2,
        }}
      >
        <Image
          src="/images/img1.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Typography>
        <span style={{ fontSize: "30px" }} lineHeight="28px">
          P
        </span>
        olitical polarization has always been the hottest trend in pattern, and
        the chambers are the places to be. Forget about engaging in meaningful
        conversations with differing viewpoints, these days- it’s all about
        retreating into your bubble, cancelling anyone who dares to disagree and
        building ideological walls higher than ever before.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        Political leaders worldwide are mastering the art of ignoring valid
        opinions, preferring instead to dismiss arguments that don’t fit their
        narratives.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        The governance challenges accompanied by contentious campaigns as the
        backdrop, the stage is set for a drama of epic proportions where no one
        listens, and everyone yells.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        Social media is becoming the fairy godmother to this havoc, turning
        platforms like Twitter, Facebook and Instagram into tailor-made
        chambers.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        We are all becoming experts in ignoring anything that doesn’t fit into
        our pre-existing beliefs.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        It is the very own <span style={{ fontWeight: "bold" }}>“us”</span> vs
        <span style={{ fontWeight: "bold" }}>“them”</span> mentality.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        Let’s look at the Partisan circus across countries:
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        If you’re looking for a prime example of political polarization, look no
        further than the United States.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        The current spectacle involves former president Donald trump and
        president Joe Biden, whose lives are now akin to a soap opera.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        Trump, currently juggling multiple indictments ranging from mishandling
        classified documents to allegedly trying to overturn the 2020 election
        results, remains as polarizing as ever.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        His legal woes have done nothing to diminish his star power within the
        Republican party. If anything, they’ve only amplified his status as the
        victim of a supposed “deep state conspiracy”.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        On the flip side, Biden’s administration is stumbling through it’s own
        set of crises. Recent footage of Biden’s “malfunctions” and his infamous
        gibberish speeches have given critics endless fodder.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        Let’s not forget the media’s role in all this, Conservatives love to
        highlight Trump’s legal battles and recent shooting incident as proof of
        a biased justice system. Meanwhile, liberal networks like CNN can’t get
        enough of calling for accountability and denouncing political violence.
      </Typography>
      <Typography
        sx={{
          mt: 6,
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        The Indian way
      </Typography>
      {/*IMAGE*/}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: { xs: "200px", sm: "400px" },
          width: "100%",
          borderRadius: "10px",
          mb: 2,
          mt: 1,
        }}
      >
        <Image
          src="/images/img2.png"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </Box>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        In one corner, we have the{" "}
        <span style={{ fontWeight: "bold" }}>Bharatiya Janata Party (BJP)</span>
        , led by{" "}
        <span style={{ fontWeight: "bold" }}>Prime Minister Narendra Modi</span>
        , who’s been accused of turning the dial up on Hindu nationalism to
        eleven.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        The BJP’s policies like the Citizenship Amendment Act(CAA) and the
        revocation of Article 370 are being slammed by critics as delightfully
        exclusionary.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        Apparently, making laws that favor one religious over another is the
        latest fashion statement in Indian politics. On the other hand, we have
        the INC and other opposition parties who have donned their capes to save
        secularism and minority rights.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        This discourse, however has become vitriolic, with little room for
        nuanced debate or middle ground.
      </Typography>
      <Typography
        sx={{
          mt: 6,
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        The European Context
      </Typography>
      {/*IMAGE*/}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: { xs: "200px", sm: "400px" },
          width: "100%",
          borderRadius: "10px",
          mb: 2,
          mt: 1,
        }}
      >
        <Image
          src="/images/img3.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Typography sx={{ my: 3 }}>
        Europe is not immune to these trends either.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        The 2024 elections for the European parliament have highlighted deep
        divisions between pro- European Union(EU) parties and Eurosceptic
        factions (being opposed to increasing powers of EU).
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        In countries, like Italy and Hungary, populist leaders such as{" "}
        <b>Giorgia Meloni</b> and <b>Viktor Orban</b> have rallied against EU
        regulations and immigration policies, tapping into nationalist
        sentiments.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        Conversely, pro-EU leaders like <b>Macron of France</b> and{" "}
        <b>Olaf Scholz</b> of Germany advocate for greater European integration
        and possess liberal democratic values.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        Well, the consequences of political polarization are troubling.
        Governance becomes increasingly difficult due to the erosion of
        bipartisan cooperation.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        The 2024 elections around the world highlight the deepening effect of
        polarization that poses significant challenges to democratic governance.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        So in thought, political polarization is not a result of differing
        opinions, but rather failing to respect and engage with those
        differences.
      </Typography>
      <Typography sx={{ my: 3 }} lineHeight="28px">
        And this too reminds me of a leader’s words that how{" "}
        <span style={{ fontWeight: "bold" }}>
          “we must learn to live together as brothers or perish together as
          fools”
        </span>
      </Typography>
      <Typography sx={{ mt: 6 }}>
        Well, the choice is ultimately ours!
      </Typography>
    </Box>
  );
};
