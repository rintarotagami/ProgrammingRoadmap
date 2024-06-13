import React from 'react';

interface FormRowProps {
    label: string;
    type: string;
    id: string;
    register: any;
    errors: any;
    className?: string;
}

const FormRow: React.FC<FormRowProps> = ({ label, type, id, register, errors, className }) => {
    return (
        <div className={`flex flex-col w-full ${className}`}>
            <label htmlFor={id} className="font-semibold text-gray-700">{label}</label>
            <input type={type} id={id} {...register(id)} className="border-2 border-gray-300 h-10 px-2 mb-2 w-80" />
            <p className="text-xs font-bold text-red-500">{errors[id]?.message}</p>
        </div>
    );
};

export default FormRow;
