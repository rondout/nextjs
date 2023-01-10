import { alpha, Box, Theme, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import InnerContent from "../layouts/InnerContent";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, SwiperOptions } from "swiper";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme: Theme) => {
  return {
    active: {
      backgroundColor: theme.palette.primary.main + "!important",
      opacity: 1,
      width: "80px !important",
      borderRadius: 6,
    },
  };
});

export default function CommentItem() {
  const { background, primary } = useTheme().palette;
  const [comments] = useState([1, 2, 3]);
  const classes = useStyle();

  const pagination: SwiperOptions["pagination"] = {
    clickable: true,
    type: "bullets",
    // class: "sssss",
    bulletActiveClass: classes.active,
    // type: "custom",
    renderBullet: function (index, className) {
      // console.log(index, className);
      return `<div class="${className}" style="background-color:#fff; width:12px;opacity: 1;height:12px"></div>`;
    },
    // renderCustom(swiper, current, total) {
    //   console.log(swiper, current, total);
    //   const items = [];
    //   let elString = "";
    //   for (let index = 0; index < comments.length; index++) {
    //     items.push(index);
    //     elString += `<div style="width:12px; height:12px;background-color:red;margin:0 8px">${
    //       index + 1
    //     }</div>`;
    //   }
    //   return `<div class="flex">${elString}</div>`;
    // },
  };

  return (
    <Box
      sx={{
        pt: 144 / 8,
        pb: 100 / 8,
        backgroundImage: (theme) => theme.custom.pageItemBackImg,
      }}
    >
      <InnerContent>
        <Box
          sx={{
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Swiper loop pagination={pagination} modules={[Pagination]}>
            {comments.map((item) => (
              <SwiperSlide key={item}>
                <Box
                  sx={{
                    // my: 144 / 8,
                    p: 7,
                    overflow: "hidden",
                    bgcolor: background.default,
                    borderRadius: 2,
                    boxShadow: (theme) => theme.custom.boxShadow,
                  }}
                  className="flex items-start flex-wrap"
                >
                  <Box sx={{ flex: 1, height: 1, mr: 4 }}>
                    <Box className="relative-position">
                      <Typography
                        sx={{ whiteSpace: "nowrap" }}
                        color={(theme) => theme.palette.text.primary}
                        variant="body2"
                      >
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
                    <Typography sx={{ mt: 101 / 8, mb: 7 }}>
                      As someone in a Support leadership role, it means a lot to
                      get my team more insight into how their hard work
                      translates into a happier experience for our customers.
                      Using Temper helps us know where we can improve, rather
                      than constantly guessing. It&apos;s now an incredibly
                      important part of our support workflow. We love using
                      Temper!
                    </Typography>
                    <Box className="flex-btw">
                      <Box>
                        <Typography variant="h6" fontWeight={"bold"}>
                          JOSH D.
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
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
                <Box sx={{ mt: 6 }}></Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </InnerContent>
    </Box>
  );
}
