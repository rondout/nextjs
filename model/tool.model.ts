import { SxProps } from "@mui/material";
import { ReactNode } from "react";

export enum MonthAbridge {
  January = "Jan.",
  February = "Feb.",
  March = "Mar.",
  April = "Apr.",
  May = "May.",
  June = "Jun.",
  July = "Jul.",
  August = "Aug.",
  September = "Sept.",
  October = "Oct.",
  November = "Nov.",
  December = "Dec.",
}

export const MonthTitleMap = new Map<number, MonthAbridge>([
  [0, MonthAbridge.January],
  [1, MonthAbridge.February],
  [2, MonthAbridge.March],
  [3, MonthAbridge.April],
  [4, MonthAbridge.May],
  [5, MonthAbridge.June],
  [6, MonthAbridge.July],
  [7, MonthAbridge.August],
  [8, MonthAbridge.September],
  [9, MonthAbridge.October],
  [10, MonthAbridge.November],
  [11, MonthAbridge.December],
]);

export function getMonthNumber(time: string | number) {
  const monthNumber = new Date(time).getMonth();
  if (monthNumber < 9) {
    return "0" + (monthNumber + 1);
  }
  return monthNumber + 1 + "";
}

export function getDayNumber(time: string | number) {
  const dateNumber = new Date(time).getDate();
  if (dateNumber < 9) {
    return "0" + dateNumber;
  }
  return dateNumber + "";
}

export function getMonthTitle(time: string | number) {
  const monthNumber = new Date(time).getMonth();
  return {
    dateNumber: getDayNumber(time),
    monthNumber: getMonthNumber(time),
    title: MonthTitleMap.get(monthNumber),
  };
}

export class OperationMenu<T = any> {
  public customStartComponent?: ReactNode;
  constructor(
    public action: T,
    public title: string,
    public icon?: any,
    public showDivider?: boolean,
    public disabled?: boolean
  ) {}
}
// 自定义操作按钮选项
export class CustomOperationMenu<T = any> extends OperationMenu<T> {
  constructor(
    public action: T,
    public title: string,
    public customStartComponent?: ReactNode,
    public icon?: any,
    public showDivider?: boolean,
    public disabled?: boolean
  ) {
    super(action, title, icon, showDivider, disabled);
  }
}
// form表单的类型
export interface MatFormItemProps<T = string> {
  value: T;
  name?: string;
  label?: string;
  // options: MatSelectOption[];
  required?: boolean;
  onBlur?: (e: any) => void;
  onChange?: (e: any) => void;
  onKeyPress?: (e: KeyboardEvent) => void;
  error?: boolean;
  helperText?: string;
  placeholder?: string;
  width?: number;
  disabled?: boolean;
  sx?: SxProps;
  [propsName: string]: any;
}
export function isNull(param: any): boolean {
  return [null, undefined, ""].includes(param);
}

export function calculateBreakpointsByRatio(
  itemLeft: number,
  itemRight: number
) {
  const left = (12 * itemLeft) / (itemLeft + itemRight);
  return [left, 12 - left];
}

export class LinkItem {
  constructor(public title: string, public href: string) {}
}
