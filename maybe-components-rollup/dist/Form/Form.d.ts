import React, { CSSProperties, ReactNode } from "react";
export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    className?: string;
    style?: CSSProperties;
    onFinish?: (values: Record<string, any>) => void;
    onFinishFailed?: (errors: Record<string, any>) => void;
    initialValues?: Record<string, any>;
    children?: ReactNode;
}
export interface FormRefApi {
    getFieldsValue: () => Record<string, any>;
    setFieldsValue: (values: Record<string, any>) => void;
}
declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<FormRefApi>>;
export default Form;
