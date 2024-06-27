import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

export const useSpeed = () => {
  const context = useContext(SpeedContext);

  if (!context) {
    throw new Error("usespeed must be used within the speed provider");
  }

  return context;
};
