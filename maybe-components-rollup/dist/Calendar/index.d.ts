import { CSSProperties, ReactNode } from "react";
import "./index.scss";
import { Dayjs } from "dayjs";
export interface CalendarProps {
    value?: Dayjs;
    defaultValue?: Dayjs;
    style?: CSSProperties;
    className?: string | string[];
    dateRender?: (currentDate: Dayjs) => ReactNode;
    dateInnerContent?: (currentDate: Dayjs) => ReactNode;
    locale?: string;
    onChange?: (date: Dayjs) => void;
}
declare function Calendar(props: CalendarProps): import("react/jsx-runtime").JSX.Element;
export default Calendar;
