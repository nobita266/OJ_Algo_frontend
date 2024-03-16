"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const defaultError = {};

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      router.push("/pages/Homepage");
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden text-3xl font-bold ">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <h1>Test the component</h1>
      )}
    </>
  );
}
