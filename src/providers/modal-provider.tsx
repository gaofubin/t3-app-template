import { type ReactNode, createContext, useContext, useState } from "react";

const ModalContext = createContext({
    isOpen: false,
    toggleModal: () => {
        /* No Action */
    },
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <ModalContext.Provider value={{ isOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};