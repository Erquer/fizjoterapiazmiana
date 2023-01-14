import { FC } from "react";

export interface PageProps{
    children?: React.ReactElement;
}
export const Page:FC<PageProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
}