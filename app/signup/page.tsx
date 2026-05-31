"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Account created successfully!");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 w-80">
        <h1 className="text-3xl font-bold">Sign Up</h1>

        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-black text-white p-2 rounded"
        >
          Create Account
        </button>
      </div>
    </main>
  );
}