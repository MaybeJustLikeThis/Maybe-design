import { FC, useRef, ChangeEvent, PropsWithChildren, useState } from "react";
import axios from "axios";

import "./index.scss";
import UploadList, { UploadFile } from "./UploadList";

// 上传组件的属性接口定义
export interface UploadProps extends PropsWithChildren {
  action: string;                                           // 上传的接口地址
  headers?: Record<string, any>;                           // 请求头配置
  name?: string;                                           // 上传的文件字段名
  data?: Record<string, any>;                             // 上传时附带的额外参数
  withCredentials?: boolean;                              // 是否携带 cookie
  accept?: string;                                        // 接受上传的文件类型
  multiple?: boolean;                                     // 是否支持多文件上传
  beforeUpload?: (file: File) => boolean | Promise<File>; // 上传前的钩子函数
  onProgress?: (percentage: number, file: File) => void;  // 上传进度回调
  onSuccess?: (data: any, file: File) => void;           // 上传成功回调
  onError?: (err: any, file: File) => void;              // 上传失败回调
  onChange?: (file: File) => void;                       // 上传状态改变回调
  onRemove?: (file: UploadFile) => void;                 // 文件移除回调
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
  } = props;

  // 文件输入框的引用
  const fileInput = useRef<HTMLInputElement>(null);
  // 已上传文件列表状态
  const [fileList, setFileList] = useState<Array<UploadFile>>([]);

  // 更新文件列表中指定文件的属性
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  // 处理文件移除
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid);
    });
    if (onRemove) {
      onRemove(file);
    }
  };

  // 触发文件选择框
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  // 处理文件选择变化
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if (fileInput.current) {
      fileInput.current.value = "";
    }
  };

  // 处理文件上传
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files);
    postFiles.forEach((file) => {
      // 执行 beforeUpload 钩子函数
      if (!beforeUpload) {
        post(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };

  // 执行上传请求
  const post = (file: File) => {
    // 创建上传文件对象
    let uploadFile: UploadFile = {
      uid: Date.now() + "upload-file",
      status: "ready",
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    
    // 添加到文件列表
    setFileList((prevList) => {
      return [uploadFile, ...prevList];
    });

    // 构建 FormData
    const formData = new FormData();
    formData.append(name || "file", file);
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
    }

    // 发送上传请求
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          "Content-Type": "multipart/form-data",
        },
        withCredentials,
        onUploadProgress: (e) => {
          // 计算上传进度
          let percentage = Math.round((e.loaded * 100) / e.total!) || 0;
          if (percentage < 100) {
            updateFileList(uploadFile, {
              percent: percentage,
              status: "uploading",
            });

            onProgress?.(percentage, file);
          }
        },
      })
      .then((resp) => {
        // 上传成功处理
        updateFileList(uploadFile, { status: "success", response: resp.data });
        onSuccess?.(resp.data, file);
        onChange?.(file);
      })
      .catch((err) => {
        // 上传失败处理
        updateFileList(uploadFile, { status: "error", error: err });
        onError?.(err, file);
        onChange?.(file);
      });
  };

  return (
    <div className="upload-component">
      <div className="upload-input" onClick={handleClick}>
        {children}
        <input
          className="upload-file-input"
          type="file"
          ref={fileInput}
          onChange={handleFileChange}
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  );
};

export default Upload;
