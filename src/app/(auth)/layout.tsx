import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col w-full h-screen text-sm items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900">
        {children}
      </div>
    </>
  )
}