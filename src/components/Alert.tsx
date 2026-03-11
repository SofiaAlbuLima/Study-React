import { ReactNode } from "react";

interface AlertProps{
  children: ReactNode; // Passing text as a child of this component, just name children;
  // The type ReactNode can pass HTML content 
  onClose: () => void;
}

const Alert = ({children, onClose}: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  )
}

export default Alert