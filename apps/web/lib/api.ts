export interface Restaurant {
    id: string;
    slug: string;
    name: string;
    description: string;
    coverImage: string;
    rating: number;
    location: string;
}

const MOCK_RESTAURANTS: Record<string, Restaurant> = {
    "pad-thai-pratu-pi": {
        id: "1",
        slug: "pad-thai-pratu-pi",
        name: "Pad Thai Pratu Pi",
        description: "Legendary Pad Thai spot in Bangkok, known for its wrappings of egg and generous portions of shrimp.",
        coverImage: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=1200&q=80",
        rating: 4.8,
        location: "Pratu Pi, Bangkok",
    },
    "jay-fai": {
        id: "2",
        slug: "jay-fai",
        name: "Jay Fai",
        description: "Michelin-starred street food queen. Famous for her crab omelet and goggles.",
        coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
        rating: 4.9,
        location: "Mahachai Road, Bangkok",
    },
    "thipsamai": {
        id: "3",
        slug: "thipsamai",
        name: "Thipsamai",
        description: "The oldest Pad Thai restaurant in Thailand, serving authentic flavors since 1966.",
        coverImage: "https://images.unsplash.com/photo-1562565652-a0e8c07d6e44?auto=format&fit=crop&w=1200&q=80",
        rating: 4.5,
        location: "Maha Chai Rd, Bangkok",
    },
};

export async function getRestaurantBySlug(slug: string): Promise<Restaurant | null> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK_RESTAURANTS[slug] || null;
}

export async function getAllRestaurants(): Promise<Restaurant[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const restaurants: Restaurant[] = [];
    const baseRestaurants = Object.values(MOCK_RESTAURANTS);

    // Generate 100 restaurants by repeating and modifying the base data
    for (let i = 0; i < 100; i++) {
        const base = baseRestaurants[i % baseRestaurants.length];
        restaurants.push({
            ...base,
            id: `${i + 1}`,
            slug: `${base.slug}-${i + 1}`,
            name: `${base.name} ${i > 2 ? `Branch ${i - 2}` : ''}`.trim(),
            rating: Math.max(3.5, Math.min(5.0, base.rating + (Math.random() - 0.5) * 0.5)),
        });
    }

    return restaurants;
}
