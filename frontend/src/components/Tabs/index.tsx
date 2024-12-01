/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import React, { ReactNode, createContext, useContext } from "react";

type TabContextProps = {
    value: number;
    onChange: (value: number) => void;
};
const TabContext = createContext<TabContextProps>(null);

type TabProps = {
    children: ReactNode;
    value: number;
    onChange: (value: number) => void;
};
const Tab = ({ children, value, onChange }: TabProps) => {
    return (
        <div>
            <TabContext.Provider value={{ value, onChange }}>
                {children}
            </TabContext.Provider>
        </div>
    );
};

Tab.Heads = ({ children }: { children: ReactNode }) => (
    <div className='heads'>{children}</div>
);

type TabItemProps = {
    index: number;
    children?: ReactNode;
};
Tab.Item = ({ index, children }: TabItemProps) => {
    const { value, onChange } = useContext(TabContext);
    const handleClick = () => {
        onChange(index);
    };
    return (
        <div
            onClick={handleClick}
            className={`item ${index === value ? "active" : null}`}
        >
            {children}
        </div>
    );
};

Tab.ContentWrapper = ({ children }: { children: ReactNode }) => {
    return <div className='contentWraper'>{children}</div>;
};

Tab.Content = ({ children, index }: TabItemProps) => {
    const { value } = useContext(TabContext);
    return value === index ? <div>{children}</div> : null;
};

export default Tab;
