"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

export function useToast() {
  return useContext(ToastContext);
}

const icons: Record<ToastType, string> = {
  success: "ph:check-circle-bold",
  error: "ph:x-circle-bold",
  info: "ph:info-bold",
};

const styles = {
  success: "bg-[#0d1435] border-green-500/40 text-green-400",
  error: "bg-[#0d1435] border-red-500/40 text-red-400",
  info: "bg-[#0d1435] border-[#00c2ff]/40 text-[#00c2ff]",
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const counter = useRef(0);

  const showToast = useCallback((message: string, type: ToastType = "success") => {
    const id = ++counter.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container */}
      <div className="fixed bottom-24 right-6 z-[9998] flex flex-col gap-3 items-end pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl shadow-black/30 text-sm font-medium max-w-xs ${styles[toast.type]}`}
            >
              <span className="flex-shrink-0"><Icon icon={icons[toast.type]} className="w-5 h-5" /></span>
              <span className="text-white">{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
