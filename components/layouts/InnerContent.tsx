import { Box, SxProps } from "@mui/material";
import { PropsWithChildren } from "react";

interface InnerContentProps {
  sx?: SxProps;
  className?: string;
}

export default function InnerContent(
  props: PropsWithChildren<InnerContentProps>
) {
  const { children, sx = {}, className = "" } = props;

  return (
    <Box className={"content-item " + className} sx={sx}>
      {children}
    </Box>
  );
}
