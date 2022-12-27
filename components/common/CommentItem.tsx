import { alpha, Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import InnerContent from "../layouts/InnerContent";

export default function CommentItem() {
  const { background, primary } = useTheme().palette;
  return (
    <Box
      sx={{
        py: 144 / 8,
        backgroundImage: (theme) => theme.custom.pageItemBackImg,
      }}
    >
      <InnerContent>
        <Box
          sx={{
            // my: 144 / 8,
            p: 7,
            bgcolor: background.default,
            borderRadius: 2,
            boxShadow: `0px 2px 6px ${alpha(primary.main, 0.08)}`,
          }}
          className="flex items-start flex-wrap"
        >
          <Box sx={{ flex: 1, height: 1, mr: 4 }}>
            <Box className="relative-position">
              <Typography sx={{ whiteSpace: "nowrap" }} variant="body1">
                From our users
              </Typography>
              <Box
                sx={{
                  width: 160,
                  height: 32,
                  top: 8,
                  bgcolor: alpha(primary.main, 0.04),
                }}
                className="abs-position"
              ></Box>
            </Box>
            <Typography sx={{ mt: 101 / 8, mb: 7 }} fontSize="1rem">
              As someone in a Support leadership role, it means a lot to get my
              team more insight into how their hard work translates into a
              happier experience for our customers. Using Temper helps us know
              where we can improve, rather than constantly guessing. It&apos;s
              now an incredibly important part of our support workflow. We love
              using Temper!
            </Typography>
            <Box className="flex-btw">
              <Box>
                <Typography variant="h6" fontWeight={"bold"}>
                  JOSH D.
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                  Sales engineer
                </Typography>
              </Box>
              <Image
                src="/icon/ic_quotation_mark.svg"
                width={69}
                height={64}
                alt=""
                style={{ opacity: 0.2 }}
              ></Image>
            </Box>
          </Box>
          <Box>
            <Image
              width={290}
              height={360}
              //   fill
              alt=""
              src="/home/comment-character.png"
            ></Image>
          </Box>
        </Box>
      </InnerContent>
    </Box>
  );
}
