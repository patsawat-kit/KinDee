import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRestaurantBySlug } from "../../../lib/api";
import { Button } from "@kindee/ui-kit";
import { PageTransition } from "../../../components/PageTransition";

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const restaurant = await getRestaurantBySlug(params.slug);

    if (!restaurant) {
        return {
            title: "Restaurant Not Found",
        };
    }

    return {
        title: `${restaurant.name} | KinDee`,
        description: restaurant.description,
        openGraph: {
            title: `${restaurant.name} - KinDee`,
            description: restaurant.description,
            images: [
                {
                    url: restaurant.coverImage,
                    width: 1200,
                    height: 630,
                    alt: restaurant.name,
                },
            ],
        },
    };
}

export default async function RestaurantPage({ params }: PageProps) {
    const restaurant = await getRestaurantBySlug(params.slug);

    if (!restaurant) {
        notFound();
    }

    return (
        <PageTransition>
            <main className="min-h-screen bg-gray-50 pb-12">
                {/* Hero Section */}
                <div className="relative h-[400px] w-full">
                    <img
                        src={restaurant.coverImage}
                        alt={restaurant.name}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-5xl mx-auto">
                        <h1 className="text-5xl font-bold mb-4">{restaurant.name}</h1>
                        <div className="flex items-center gap-4 text-lg">
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">
                                ★ {restaurant.rating}
                            </span>
                            <span>{restaurant.location}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-5xl mx-auto px-8 py-12">
                    <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">About</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {restaurant.description}
                        </p>

                        <div className="flex gap-4">
                            <Button>Write a Review</Button>
                            <Button variant="outline">Share</Button>
                        </div>
                    </div>
                </div>
            </main>
        </PageTransition>
    );
}
