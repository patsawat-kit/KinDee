import { Button } from "@kindee/ui-kit";
import { getAllRestaurants } from "../lib/api";
import { RestaurantList } from "../components/RestaurantList";

export default async function Home() {
    const restaurants = await getAllRestaurants();

    return (
        <main className="flex min-h-screen flex-col items-center p-24 bg-gray-50">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
                <h1 className="text-4xl font-bold text-gray-900">KinDee</h1>
                <Button>Get Started</Button>
            </div>

            <div className="w-full max-w-5xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Discover Restaurants ({restaurants.length})
                </h2>
                <RestaurantList restaurants={restaurants} />
            </div>
        </main>
    );
}
