import React, { ReactNode, createContext, useContext } from "react";

type TabContextProps = {
    value: number;
    onChange: (value: number) => void;
};

const TabContext = createContext<TabContextProps | null>(null);

type TabProps = {
    children: ReactNode;
    value: number;
    onChange: (value: number) => void;
};
const Tab = ({ children, value, onChange }: TabProps) => (
    <TabContext.Provider value={{ value, onChange }}>
        <div>{children}</div>
    </TabContext.Provider>
);

Tab.Heads = ({ children }: { children: ReactNode }) => (
    <div className="heads">{children}</div>
);

type TabItemProps = {
    index: number;
    children?: ReactNode;
};
Tab.Item = ({ index, children }: TabItemProps) => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error("Tab.Item must be used within a Tab component.");
    }

    const { value, onChange } = context;
    const handleClick = () => onChange(index);

    return (
        <div
            onClick={handleClick}
            className={`item ${index === value ? "active" : ""}`}
        >
            {children}
        </div>
    );
};

Tab.ContentWrapper = ({ children }: { children: ReactNode }) => (
    <div className="contentWrapper">{children}</div>
);

Tab.Content = ({ children, index }: TabItemProps) => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error("Tab.Content must be used within a Tab component.");
    }

    const { value } = context;
    return value === index ? <div>{children}</div> : null;
};

export default Tab;

// import { cloneElement } from 'react';

// // ...
// const clonedElement = cloneElement(
//   <Row title="Cabbage">
//     Hello
//   </Row>,
//   { isHighlighted: true },
//   'Goodbye'
// );

// console.log(clonedElement); // <Row title="Cabbage" isHighlighted={true}>Goodbye</Row>
