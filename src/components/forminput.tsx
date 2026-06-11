interface FormInputProps {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    isTextarea?: boolean;
    rows?: number;
}

const FormInput = ({
    label,
    name,
    type = "text",
    placeholder,
    required = false,
    error,
    value,
    onChange,
    isTextarea = false,
    rows = 4
}: FormInputProps) => {
    const baseClasses = "w-full bg-transparent border-b border-[#8F8F8F] text-[#FFF] text-sm md:text-base focus:outline-none placeholder:text-[#71717A]";
    
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-[#D5D5D5] whitespace-nowrap text-sm md:text-base font-medium">
                {label}{required && <span className="text-[#D5D5D5]">*</span>}
            </label>
            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${baseClasses} resize-none`}
                    required={required}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={baseClasses}
                    required={required}
                />
            )}
            {error && (
                <span className="text-[#EF4444] text-xs">{error}</span>
            )}
        </div>
    );
};

export default FormInput;
