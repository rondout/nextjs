import { alpha, Chip, styled } from "@mui/material";

const MatChip = styled(Chip)(({ theme }) => {
  return {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    color: theme.palette.primary.main,
    fontSize: 14,
    // paddingRight: 6,
  };
});

export default MatChip;
