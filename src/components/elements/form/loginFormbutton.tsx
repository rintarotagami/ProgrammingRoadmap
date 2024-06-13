import React from 'react';
import { signIn } from '../../../../auth';

const LoginFormButton = ({ provider, children }: { provider?: string, children: React.ReactNode }) => {
  return (
    <form action={async () => {
      await signIn(provider);
    }}
    >
      <button className="bg-white text-black border-2 border-gray-300 w-full h-10 mb-2">
        {children}
      </button>
    </form>
  );
};

export default LoginFormButton;

