import { HTMLAttributes, forwardRef } from "react";

export interface SkeletonCardProps extends HTMLAttributes<HTMLDivElement> { }

export const SkeletonCard = forwardRef<HTMLDivElement, SkeletonCardProps>(
    ({ className, ...props }, ref) => {
        return (
            <div ref={ref} className={`animate-pulse ${className || ""}`} {...props}>
                {/* Hero Section Skeleton */}
                <div className="h-[400px] w-full bg-gray-300" />

                {/* Content Skeleton */}
                <div className="max-w-5xl mx-auto px-8 py-12">
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        {/* Title */}
                        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4" />

                        {/* Description lines */}
                        <div className="space-y-3 mb-8">
                            <div className="h-4 bg-gray-200 rounded w-full" />
                            <div className="h-4 bg-gray-200 rounded w-5/6" />
                            <div className="h-4 bg-gray-200 rounded w-4/6" />
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <div className="h-10 bg-gray-300 rounded w-32" />
                            <div className="h-10 bg-gray-200 rounded w-24" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

SkeletonCard.displayName = "SkeletonCard";
