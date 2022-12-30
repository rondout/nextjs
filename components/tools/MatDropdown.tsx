import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, Button, Divider, SxProps, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Iconfont from "../tools/Iconfont";
import { t } from "i18next";
import { StyledMenu } from "./StyledMenu";
import { OperationMenu } from "../../model/tool.model";
// import TextButton from "./TextButton";
// import EmptyData from "../table/EmptyData";

/**
 *
 * @interface MatDropdownProps
 * @template T menu的Action的类型
 */
export interface MatDropdownProps<T> {
  menus?: OperationMenu<T>[];
  selected?: T;
  onMenuClick?: (action: T) => void;
  // dropDown组件的触发组件  可以自定义 如果不自定义就是默认的TextButton（在tsx里面可以看到）
  trigger?: React.ReactNode;
  dividerKeys?: T[];
  sx?: SxProps;
  disabled?: boolean;
  open?: boolean;
}

/**
 *
 * @export
 * @template T menu的Action的类型
 * @param {MatDropdownProps<T>} props
 * @returns
 */
export default function MatDropdown<T>(
  props: React.PropsWithChildren<MatDropdownProps<T>>
) {
  const { menus, open = true } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const computedOpen = Boolean(anchorEl) && open;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!props.disabled) {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onMenuClick = (e: T) => {
    if (props.onMenuClick) {
      props.onMenuClick(e);
    }
    handleClose();
  };

  return (
    <Box sx={{ pl: 2, ...props.sx }}>
      {props.trigger ? (
        <Box onClick={handleClick}>{props.trigger}</Box>
      ) : (
        // 如果没有trigger这个props就用默认的TextButton
        <Button
          size="small"
          className={props.disabled ? "btn-disabled" : ""}
          onClick={handleClick}
          sx={{ minWidth: "auto", borderRadius: 2, px: 1 }}
        >
          <MoreVertIcon
            sx={{
              transform: "rotate(90deg)",
              color: (theme) => theme.palette.action.active,
            }}
          />
        </Button>
      )}
      {!props.disabled && (
        <StyledMenu
          sx={{ maxHeight: 450 }}
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={computedOpen}
          onClose={handleClose}
        >
          {props.children}
          {menus?.length > 0 &&
            menus?.map((menu, index) => (
              <Box key={index}>
                <MenuItem
                  disabled={menu.disabled}
                  sx={{ p: 1 }}
                  onClick={() => onMenuClick(menu.action)}
                  selected={props.selected === menu.action}
                  disableRipple
                >
                  {menu.customStartComponent}
                  {/* {menu.icon && <Iconfont fontSize={20} icon={menu.icon} mr={1}></Iconfont>} */}
                  <Typography sx={{ ml: 1 }}>{menu.title}</Typography>
                </MenuItem>
                {menu.showDivider && (
                  <Divider sx={{ m: "0 !important" }}></Divider>
                )}
              </Box>
            ))}
          {menus?.length <= 0 && <Box>No Data</Box>}
        </StyledMenu>
      )}
    </Box>
  );
}
