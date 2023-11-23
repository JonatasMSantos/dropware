"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fda4c1e2-1b29-4972-9ce5-818b8cad9978");
  }, []);

  return null;
};