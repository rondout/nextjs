import { Box, SxProps, Typography } from "@mui/material";

interface PricePlanItemProps {
  title: string;
  price: string;
  desc: string;
  sx?: SxProps;
}

export default function PricePlanItem(props: PricePlanItemProps) {
  const { sx = {} } = props;
  return (
    <Box sx={{ textAlign: "center", ...sx }}>
      <Typography variant="h6" fontWeight={700} textAlign="center">
        {props.title}
      </Typography>
      <Typography
        sx={{ mt: 2, mb: 1 }}
        color="primary"
        variant="h2"
        fontWeight={700}
        textAlign="center"
      >
        {props.price}
      </Typography>
      <Typography textAlign="center" variant="body2">
        {props.desc}
      </Typography>
    </Box>
  );
}
