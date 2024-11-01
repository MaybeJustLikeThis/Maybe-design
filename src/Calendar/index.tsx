import MonthCalendar from "./MonthCalendar";
import { CSSProperties, ReactNode, useState } from "react";
import "./index.scss";
import { Dayjs, locale } from "dayjs";
import cs from "classnames";
import Header from "./Header";
import LocaleContext from "./LocalContext";

export interface CalendarProps {
  value: Dayjs;
  style?: CSSProperties;
  className?: string | string[];
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { value, style, className, locale, onChange } = props;

  const classNames = cs("calendar", className);

  return (
    <LocaleContext.Provider value={{ locale:locale || navigator.language }}>
      <div className={classNames} style={style}>
        <Header></Header>
        <MonthCalendar {...props} />
      </div>
    </LocaleContext.Provider>
  );
}

export default Calendar;
