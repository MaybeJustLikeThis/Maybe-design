import { FC } from "react";
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: "ready" | "uploading" | "success" | "error";
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
interface UploadListProps {
    fileList: UploadFile[];
    onRemove: (file: UploadFile) => void;
}
export declare const UploadList: FC<UploadListProps>;
export default UploadList;
