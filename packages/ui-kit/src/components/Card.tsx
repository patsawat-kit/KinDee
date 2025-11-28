import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    imageSrc: string;
    rating: number;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, title, imageSrc, rating, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 ${className || ""}`}
                {...props}
            >
                <div className="relative h-48 w-full">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <div className="mt-2 flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
                    </div>
                </div>
            </div>
        );
    }
);

Card.displayName = "Card";
