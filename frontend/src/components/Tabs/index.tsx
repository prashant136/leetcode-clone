// import React, { ReactNode, createContext, useContext } from "react";

// type TabContextProps = {
//     value: number;
//     onChange: (value: number) => void;
// };

// const TabContext = createContext<TabContextProps | null>(null);

// type TabProps = {
//     children: ReactNode;
//     value: number;
//     onChange: (value: number) => void;
// };
// const Tab = ({ children, value, onChange }: TabProps) => (
//     <TabContext.Provider value={{ value, onChange }}>
//         <div>{children}</div>
//     </TabContext.Provider>
// );

// Tab.Heads = ({ children }: { children: ReactNode }) => (
//     <div className="heads">{children}</div>
// );

// type TabItemProps = {
//     index: number;
//     children?: ReactNode;
// };
// Tab.Item = ({ index, children }: TabItemProps) => {
//     const context = useContext(TabContext);
//     if (!context) {
//         throw new Error("Tab.Item must be used within a Tab component.");
//     }

//     const { value, onChange } = context;
//     const handleClick = () => onChange(index);

//     return (
//         <div
//             onClick={handleClick}
//             className={`item ${index === value ? "active" : ""}`}
//         >
//             {children}
//         </div>
//     );
// };

// Tab.ContentWrapper = ({ children }: { children: ReactNode }) => (
//     <div className="contentWrapper">{children}</div>
// );

// Tab.Content = ({ children, index }: TabItemProps) => {
//     const context = useContext(TabContext);
//     if (!context) {
//         throw new Error("Tab.Content must be used within a Tab component.");
//     }

//     const { value } = context;
//     return value === index ? <div>{children}</div> : null;
// };

// export default Tab;

// import React, { useState, ReactNode } from "react";

// // Tabs Component
// type TabsProps = {
//     children: ReactNode;
//     defaultIndex?: number;
//     onTabChange?: (index: number) => void; // Optional callback for external state management
// };

// const Tabs = ({ children, defaultIndex = 0, onTabChange }: TabsProps) => {
//     const [activeIndex, setActiveIndex] = useState(defaultIndex);

//     const handleTabChange = (index: number) => {
//         setActiveIndex(index);
//         onTabChange?.(index);
//     };

//     return (
//         <div className='tabs'>
//             {React.Children.map(children, (child) => {
//                 if (!React.isValidElement(child)) return null;

//                 // Inject props into TabList or TabPanels based on their type
//                 if (child.type === TabList) {
//                     return React.cloneElement(child, {
//                         activeIndex,
//                         onTabChange: handleTabChange
//                     });
//                 }
//                 if (child.type === TabPanels) {
//                     return React.cloneElement(child, { activeIndex });
//                 }
//                 return child;
//             })}
//         </div>
//     );
// };

// // Tab List
// type TabListProps = {
//     children: ReactNode;
//     activeIndex?: number;
//     onTabChange?: (index: number) => void;
// };

// const TabList = ({ children, activeIndex, onTabChange }: TabListProps) => (
//     <div className='tab-list'>
//         {React.Children.map(children, (child, index) => {
//             if (!React.isValidElement(child)) return null;
//             return React.cloneElement(child, {
//                 isActive: activeIndex === index,
//                 onClick: () => onTabChange?.(index)
//             });
//         })}
//     </div>
// );

// // Tab Item
// type TabProps = {
//     children: ReactNode;
//     isActive?: boolean;
//     onClick?: () => void;
// };

// const Tab = ({ children, isActive, onClick }: TabProps) => (
//     <button className={`tab ${isActive ? "tab-active" : ""}`} onClick={onClick}>
//         {children}
//     </button>
// );

// // Tab Panels
// type TabPanelsProps = {
//     children: ReactNode;
//     activeIndex?: number;
// };

// const TabPanels = ({ children, activeIndex }: TabPanelsProps) => (
//     <div className='tab-panels'>
//         {React.Children.map(children, (child, index) =>
//             index === activeIndex ? child : null
//         )}
//     </div>
// );

// // Tab Panel
// type TabPanelProps = {
//     children: ReactNode;
// };

// const TabPanel = ({ children }: TabPanelProps) => (
//     <div className='tab-panel'>{children}</div>
// );

// // Export Components
// export { Tabs, TabList, Tab, TabPanels, TabPanel };

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
