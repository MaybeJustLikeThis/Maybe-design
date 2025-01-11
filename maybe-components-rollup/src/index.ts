import Calendar, { CalendarProps } from "./Calendar";
import Watermark, { WatermarkProps } from "./Watermark";
import { MessageProps, Position, MessageRef } from "./Message";
import { useMessage } from "./Message/useMessage";
import { ConfigProvider } from "./Message/ConfigProvider";
// import Upload, { UploadProps } from "./Upload";
// import UploadList, { UploadFile } from "./Upload/UploadList";
import Icon, { IconProps } from "./icon";
import { IconAdd } from "./icon/icons/iconAdd";
import { IconEmail } from "./icon/icons/iconEmail";
import Form from "./Form";
import Space, { SpaceProps } from "./Space";
export {
  Calendar,
  Watermark,
  ConfigProvider,
  useMessage,
  // Upload,
  // UploadList,
  Icon,
  IconAdd,
  IconEmail,
  Form,
  Space,
};

export type {
  CalendarProps,
  WatermarkProps,
  MessageProps,
  Position,
  MessageRef,
 // UploadProps
  // UploadFile,
  IconProps,
  SpaceProps,
};
