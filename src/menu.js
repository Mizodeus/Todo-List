const categories = [
    {
        name: "Starters",
        dishes: [
            ["Bruschetta", "Grilled bread, fresh tomatoes, basil and garlic", "$8"],
            ["Caprese Salad", "Mozzarella, ripe tomatoes and basil with olive oil", "$11"],
            ["Garlic Bread", "Crispy baguette with roasted garlic butter", "$6"],
        ],
    },
    {
        name: "Main Courses",
        dishes: [
            ["Margherita Pizza", "San Marzano tomatoes, buffalo mozzarella, basil", "$14"],
            ["Spaghetti Carbonara", "Guanciale, egg yolk, pecorino and black pepper", "$16"],
            ["Risotto al Funghi", "Creamy risotto with porcini mushrooms and parmesan", "$18"],
            ["Osso Buco", "Braised veal shank with gremolata over saffron risotto", "$26"],
        ],
    },
    {
        name: "Desserts",
        dishes: [
            ["Tiramisu", "Espresso-soaked ladyfingers and mascarpone cream", "$9"],
            ["Panna Cotta", "Vanilla cream with wild berry coulis", "$8"],
            ["Gelato", "Two scoops of house-made gelato, your choice of flavour", "$6"],
        ],
    },
];

function makeDishCard(name, description, price) {
    const card = document.createElement("article");
    card.className = "dish";

    const heading = document.createElement("div");
    heading.className = "dish-name";

    const title = document.createElement("h3");
    title.textContent = name;

    const priceSpan = document.createElement("span");
    priceSpan.className = "price";
    priceSpan.textContent = price;

    heading.append(title, priceSpan);

    const text = document.createElement("p");
    text.textContent = description;

    card.append(heading, text);
    return card;
}

export default function menu(content) {
    categories.forEach((category) => {
        const section = document.createElement("section");
        section.className = "menu-section";

        const title = document.createElement("h2");
        title.textContent = category.name;

        const grid = document.createElement("div");
        grid.className = "menu-grid";
        category.dishes.forEach(([name, description, price]) => {
            grid.append(makeDishCard(name, description, price));
        });

        section.append(title, grid);
        content.append(section);
    });
}