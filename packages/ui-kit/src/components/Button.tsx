import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", ...props }, ref) => {
        const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
        const variants = {
            primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
            secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
            outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${className || ""}`}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
