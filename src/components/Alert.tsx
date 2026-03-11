import React from "react";
import { ReactNode } from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

interface AlertProps{
  children: ReactNode; // Passing text as a child of this component, just name children;
  // The type ReactNode can pass HTML content 
  onClose: () => void;
}

const Alert = ({children, onClose}: AlertProps) => {
  const {value, setValue} = useContext(UserContext);
  return (
    <div className="alert alert-primary alert-dismissible">
      {children} and {value} 
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  )
}

export default Alert