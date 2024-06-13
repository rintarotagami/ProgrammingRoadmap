"use client";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationRegistSchema } from "@/validationSchema/validationRegistSchema";
import FormRow from "@/components/elements/form/loginFormrow";

interface Error {
  email: string[];
  password: string[];
  passwordConfirm: string[];
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
    resolver: zodResolver(validationRegistSchema),
  });

  //セッション判定
  if (session) redirect("/");

  //登録処理
  const handleRegist = async (data: any) => {
    const { email, password } = data;
    const res = await fetch("/api/signUp", {
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
        <h1 className="text-3xl font-bold mb-5 text-gray-800">アカウント登録</h1>
        <form onSubmit={handleSubmit(handleRegist)} className="flex flex-col items-center gap-2">
          <FormRow label="メールアドレス" type="text" id="email" register={register} errors={errors} />
          <FormRow label="パスワード" type="password" id="password" register={register} errors={errors} />
          <FormRow label="再確認パスワード" type="password" id="passwordConfirm" register={register} errors={errors} />
          <button type="submit" className="text-white bg-gray-800 w-full h-10 mt-4 hover:bg-gray-700">
            登録
          </button>
        </form>
        <Link href="/signin" className="mt-2 text-gray-300 hover:text-white">
          ログインはこちら
        </Link>
      </div>
    </>
  );
};

export default Page;

