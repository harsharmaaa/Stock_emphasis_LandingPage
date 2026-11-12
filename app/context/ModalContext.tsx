"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (service?: string) => void;
  closeModal: () => void;
  selectedService: string;
  selectedSegment: string; // backwards compatibility alias
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = useCallback((service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Requirement: Automatically open 1.5 seconds after every fresh website visit and every full page refresh.
  // Do not use cookies, localStorage or sessionStorage to suppress it.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Prevent background scrolling and handle Escape key
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, closeModal]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
        selectedService,
        selectedSegment: selectedService,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
