"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) firstFocusRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-near-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2
            id="modal-title"
            className="font-josefin text-lg font-700 uppercase tracking-wide text-spurs-navy"
          >
            {title}
          </h2>
          <button
            ref={firstFocusRef}
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-spurs-navy/50 transition-colors hover:text-spurs-navy"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
