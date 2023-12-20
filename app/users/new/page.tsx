"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUsersPage = () => {
  const router = useRouter();
  return (
    <div>
      <p>NewUsersPage</p>
      <button onClick={() => router.push("/users")} className="btn btn-accent">
        Create
      </button>
    </div>
  );
};

export default NewUsersPage;
