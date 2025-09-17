import { forwardRef, HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onClose, children, className = '', ...props }, ref) => {
    if (!open) return null;
    return (
      <div
        ref={ref}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 ${className}`}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
        onClick={onClose}
        {...props}
      >
        <div className="bg-white rounded-lg shadow-lg p-6" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  }
);
Modal.displayName = 'Modal';
