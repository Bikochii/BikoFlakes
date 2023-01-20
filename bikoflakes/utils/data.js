
const data = {
    users: [
        {
            name: "Biko",
            email: "anton.pelezki@gmail.com",
            password: "12345678",
            isAdmin: true,
    },
],



    products: [
        {
            name: 'BikoFlakes',
            slug: 'flakes',
            category: 'Desert',
            image: 'https://joqwtcqtucsiandrqizn.supabase.co/storage/v1/object/public/images/Flakes.jpg',
            price: 420,
            countInStock: 10,
            rating: 4.5,
            provider: 'Biko',
            numReviews: 69,
            description: 'Flakes from and for Biko made with his own hands',

        },
        {
            name: 'Pizza',
            slug: 'pizza',
            category: 'Pizza',
            image: 'https://joqwtcqtucsiandrqizn.supabase.co/storage/v1/object/public/images/pizza.jpg',
            price: 11.99,
            countInStock: 10,
            provider: 'PizzaBlitz',
            rating: 4.7,
            numReviews: 66,
            description: 'A Pizza with your favorite toppings',

        },
        {
            name: 'Döner',
            slug: 'kebab',
            category: 'Kebab',
            image: 'https://joqwtcqtucsiandrqizn.supabase.co/storage/v1/object/public/images/kebab.jpg',
            price: 4,
            countInStock: 10,
            provider: 'Onkel Grill',
            rating: 4.9,
            numReviews: 6612,
            description: 'The best Kebab in town',

        },
        {
            name: 'Soup',
            slug: 'soup',
            category: 'Soup',
            image: 'https://joqwtcqtucsiandrqizn.supabase.co/storage/v1/object/public/images/soup.jpg',
            price: 3.99,
            countInStock: 10,
            provider: 'Ganesha',
            rating: 4.2,
            numReviews: 62,
            description: 'Good soup',

        },
        {
            name: 'Spaghetti',
            slug: 'spaghetti',
            category: 'Noodles',
            image: 'https://joqwtcqtucsiandrqizn.supabase.co/storage/v1/object/public/images/spaghetti.jpg',
            price: 3.99,
            countInStock: 10,
            provider: 'Venecia',
            rating: 4.2,
            numReviews: 66,
            description: 'somebody touched my spaghet',

        }
        ,
        {
            name: 'American Burger',
            slug: 'burger',
            category: 'Burger',
            image: 'https://joqwtcqtucsiandrqizn.supabase.co/storage/v1/object/public/images/burger.jpg',
            price: 7.99,
            countInStock: 10,
            provider: 'Bullburger' ,
            rating: 4.4,
            numReviews: 1337,
            description: 'A burger with a lot of delicious meat',

        },
    ],
};

export default data;