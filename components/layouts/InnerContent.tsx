import { Box, SxProps, Theme } from "@mui/material";
import { PropsWithChildren } from "react";

interface InnerContentProps {
  sx?: SxProps<Theme>;
  className?: string;
}

export default function InnerContent(
  props: PropsWithChildren<InnerContentProps>
) {
  const { children, sx = {} as SxProps, className = "" } = props;

  return (
    <Box className={"content-item " + className} sx={sx}>
      {children}
    </Box>
  );
}
