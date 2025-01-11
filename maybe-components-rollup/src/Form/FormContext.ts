import { createContext } from "react";//在 context 里保存 values 也就是 Store 的值。

export interface FormContextProps {
  values?: Record<string, any>;
  setValues?: (values: Record<string, any>) => void; //添加 setValues 来修改 values
  onValueChange?: (key: string, value: any) => void; //onValueChange 监听 value 变化
  validateRegister?: (name: string, cb: Function) => void; //validateRegister 用来注册表单项的校验规则，也就是 rules 指定的那些。
}

export default createContext<FormContextProps>({});
