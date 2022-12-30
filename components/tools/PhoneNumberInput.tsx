import {
  Box,
  FormControl,
  InputAdornment,
  SxProps,
  TextField,
  useTheme,
} from "@mui/material";
import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { CustomOperationMenu, MatFormItemProps } from "../../model/tool.model";
import { isNull } from "../../model/tool.model";
import countryData, { CountryData } from "../../model/countryData.model";
import MatDropdown from "./MatDropdown";
import styles from "./flag.module.css";
import { Languages } from "../../model/base.model";
import { i18n } from "next-i18next";

interface PhoneNumberInputProps {
  country: string;
  onCountryChange(country: string): void;
  inputProps: MatFormItemProps;
  multiline?: boolean;
  maxRows?: number;
  sx?: SxProps;
  fullWidth?: boolean;
  language?: Languages;
}

const createCountrySelectOptions = (lang: Languages): CustomOperationMenu[] => {
  const key: keyof CountryData = lang === Languages.zh ? "name" : "enName";
  const options = countryData.map((v) => {
    return new CustomOperationMenu(
      v.code,
      v[key] + " " + v.phonePrefix,
      <span className={styles.flag + " " + styles["flag-" + v.code]}></span>
    );
  });
  // 中国下面加一个分隔线
  options[2].showDivider = true;
  return options;
};

export default memo(function PhoneNumberInput(props: PhoneNumberInputProps) {
  const { width, size = "small" } = props.inputProps;
  const { fullWidth = true, inputProps, onCountryChange } = props;
  const country = props.country || "us";
  const { t } = useTranslation();
  const value = isNull(inputProps.value) ? "" : inputProps.value;
  const [selectedCountry, setSelectedCountry] = useState<string>(country);
  //   const language = useSelector(selectLanguage);
  const { language = i18n.language as Languages } = props;
  const theme = useTheme();

  const countrySelectOptions = useMemo(() => {
    return createCountrySelectOptions(language);
  }, [language]);

  const onMenuClick = (code: string) => {
    setSelectedCountry(code);
    onCountryChange(code);
  };

  const placeholder = useMemo(() => {
    return countryData.find((v) => v.code === selectedCountry)?.phonePrefix;
  }, [selectedCountry]);

  return (
    <FormControl
      error={inputProps.error}
      sx={{ maxWidth: width || 1 / 1 }}
      fullWidth={fullWidth}
    >
      {/* eslint-disable-next-line */}
      {/* @ts-ignore */}
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MatDropdown<string>
                sx={{ pl: 0 }}
                trigger={
                  <Box
                    style={{
                      padding: "8px 8px",
                      marginLeft: "-14px",
                      borderRadius: "4px 0 0 4px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      borderRight: "1px solid",
                      borderRightColor: theme.palette.divider,
                    }}
                  >
                    <Box>
                      <span
                        className={styles.flag + " " + styles[selectedCountry]}
                      ></span>
                    </Box>
                    <Box
                      style={{
                        border: "6px solid transparent",
                        borderTopColor: "#0000008f",
                        marginLeft: "8px",
                        marginTop: "6px",
                      }}
                    ></Box>
                  </Box>
                }
                selected={selectedCountry}
                menus={countrySelectOptions}
                onMenuClick={onMenuClick}
              ></MatDropdown>
            </InputAdornment>
          ),
          placeholder,
        }}
        {...inputProps}
        size={size}
        label={inputProps.label && t(inputProps.label)}
        value={value}
      ></TextField>
    </FormControl>
  );
});
