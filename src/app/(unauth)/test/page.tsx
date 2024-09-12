"use client";
import { getProviders } from "next-auth/react";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [provider, setProvider] = useState<unknown | null>(null);
  useEffect(() => {
    const p = async () => {
      const setupProviders = await getProviders();
      setProvider(setupProviders);
    };
    p();
  }, []);
  console.log({ provider });

  return <div></div>;
};

export default TestPage;
