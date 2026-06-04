"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/services/authService";
import AdminLoginHeader from "@/components/admin/login/AdminLoginHeader";
import LoginBackground from "@/components/admin/login/LoginBackground";
import AdminLoginHero from "@/components/admin/login/AdminLoginHero";
import AdminLoginForm from "@/components/admin/login/AdminLoginForm";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Email dan password wajib diisi.");
      return;
    }

    try {
      setIsLoading(true);

      await loginAdmin(email, password);

      router.push("/admin/dashboard");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Login gagal.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#111c2d] font-sans flex flex-col">
      <AdminLoginHeader />

      <main className="flex-grow relative overflow-hidden">
        <LoginBackground />

        <div className="relative z-10 min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AdminLoginHero />

            <AdminLoginForm
              email={email}
              password={password}
              showPassword={showPassword}
              isLoading={isLoading}
              errorMessage={errorMessage}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onTogglePassword={() =>
                setShowPassword((current) => !current)
              }
              onSubmit={handleLogin}
            />
          </div>
        </div>
      </main>
    </div>
  );
}