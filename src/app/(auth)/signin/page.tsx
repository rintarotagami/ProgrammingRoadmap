"use client";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationLoginSchema } from "@/validationSchema/validationRegistSchema";
import FormRow from "@/components/elements/form/loginFormrow";
import LoginFormButton from "@/components/elements/form/loginFormbutton";
interface Error {
  email: string[];
  password: string[];
}

const Page = () => {
  const { data: session, status } = useSession();
  const [resError, setResError] = useState<Error>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(validationLoginSchema),
  });

  // セッションがあればリダイレクト
  if (session) redirect("/");

  // ログイン処理
  const handleLogin = async (data: any) => {
    const { email, password } = data;
    const res = await fetch("/api/signIn", {
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    if (res.ok) {
      signIn("credentials", { email, password });
    } else {
      const resError = await res.json();
      setResError(resError.errors);
    }
  };

  return (
    <>
        <div className="flex flex-col items-center justify-center p-10 border-2 border-gray-700 rounded-2xl bg-white shadow-xl">
          <h1 className="text-3xl font-bold mb-5 text-gray-800">ログイン</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col items-center gap-2">
            <FormRow label="メールアドレス" type="text" id="email" register={register} errors={errors} />
            <FormRow label="パスワード" type="password" id="password" register={register} errors={errors} />
            <div className="text-xs font-bold text-red-500 mb-4">
              {resError && Object.values(resError).map((error, index) => <p key={index}>{error}</p>)}
            </div>
            <button type="submit" className="text-white bg-gray-800 w-full h-10 mt-4 hover:bg-gray-700">
              ログイン
            </button>
          </form>
          <hr className="my-4 border-gray-600 w-full" />
          <div className="flex flex-col items-center w-full">
            <LoginFormButton provider="github">Githubでログイン</LoginFormButton>
            <LoginFormButton provider="google">Googleでログイン</LoginFormButton>
            <Link href="/signup" className="mt-2 text-gray-300 hover:text-white">
              新規登録はこちら
            </Link>
          </div>
        </div>
    </>
  );
};

export default Page;
