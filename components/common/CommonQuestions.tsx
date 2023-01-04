import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { StyledAccordion } from "../home/DeviceManageIntro";
import InnerContent from "../layouts/InnerContent";
import SvgIcon from "../tools/SvgIcon";

export class CommonQuestionItem {
  constructor(public title: string, public subtitle: string) {}
}

interface CommonQuestionProps {
  title: string;
  items: CommonQuestionItem[];
}

export default function CommonQuestions(props: CommonQuestionProps) {
  const theme = useTheme();
  const { items = [], title = "" } = props;
  const [expanded, setExpanded] = useState(0);

  const onExpandChange = (expandIndex: number) => {
    // console.log(expandValue);
    setExpanded(expandIndex);
  };

  return (
    <Box
      sx={{
        background:
          "linear-gradient(279.09deg, rgba(110, 128, 225, 0.15) 0%, rgba(110, 128, 225, 0.1) 50%)",
      }}
    >
      <Box
        sx={{
          backgroundImage: "url(/home/curved_line_bg.svg)",
          backgroundSize: "cover",
          maxWidth: 1920,
          margin: "0 auto",
          pb: 19,
          pt: 15,
        }}
      >
        <InnerContent>
          <Typography variant="h4">{title}</Typography>
          <Box sx={{ mt: 2 }}>
            {items.map((item, index) => {
              return (
                <Box key={item.title} sx={{ mt: 3 }}>
                  <StyledAccordion
                    onChange={() => onExpandChange(index)}
                    expanded={index === expanded}
                    sx={{ bgcolor: theme.palette.background.default }}
                  >
                    <AccordionSummary
                      sx={{ py: 1.5, px: 3 }}
                      expandIcon={
                        <SvgIcon
                          icon="ic_arrow_down"
                          width={24}
                          height={24}
                        ></SvgIcon>
                      }
                    >
                      <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pt: 0 }}>
                      {item.subtitle.split("\n").map((text, index) => {
                        return (
                          <Typography
                            sx={{ pr: 4 }}
                            key={index}
                            variant="body2"
                          >
                            {text}
                          </Typography>
                        );
                      })}
                    </AccordionDetails>
                  </StyledAccordion>
                </Box>
              );
            })}
          </Box>
        </InnerContent>
      </Box>
    </Box>
  );
}
