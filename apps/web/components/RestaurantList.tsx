"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Restaurant } from "../lib/api";

interface RestaurantListProps {
    restaurants: Restaurant[];
}

const PLACEHOLDER_BLUR =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==";

export function RestaurantList({ restaurants }: RestaurantListProps) {
    const parentRef = useRef<HTMLDivElement>(null);

    const virtualizer = useVirtualizer({
        count: restaurants.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 120,
        overscan: 5,
    });

    return (
        <div
            ref={parentRef}
            className="h-[600px] overflow-auto border border-gray-200 rounded-lg"
        >
            <div
                style={{
                    height: `${virtualizer.getTotalSize()}px`,
                    width: "100%",
                    position: "relative",
                }}
            >
                {virtualizer.getVirtualItems().map((virtualItem) => {
                    const restaurant = restaurants[virtualItem.index];
                    return (
                        <Link
                            key={virtualItem.key}
                            href={`/restaurant/${restaurant.slug}`}
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: `${virtualItem.size}px`,
                                transform: `translateY(${virtualItem.start}px)`,
                            }}
                            className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
                        >
                            <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                                <Image
                                    src={restaurant.coverImage}
                                    alt={restaurant.name}
                                    fill
                                    sizes="96px"
                                    className="object-cover"
                                    placeholder="blur"
                                    blurDataURL={PLACEHOLDER_BLUR}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 truncate">
                                    {restaurant.name}
                                </h3>
                                <p className="text-sm text-gray-600 truncate">
                                    {restaurant.location}
                                </p>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-yellow-500 text-sm">★</span>
                                    <span className="text-sm text-gray-700">
                                        {restaurant.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
