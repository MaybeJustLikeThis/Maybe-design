import React, { PropsWithChildren } from "react";
import { SizeType } from ".";
export interface ConfigContextType {
    space?: {
        size?: SizeType;
    };
}
export declare const ConfigContext: React.Context<ConfigContextType>;
interface ConfigProviderProps extends PropsWithChildren<ConfigContextType> {
}
export declare function ConfigProvider(props: ConfigProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
