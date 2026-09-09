export default function home(content) {
    const hero = document.createElement("section");
    hero.className = "hero";

    const title = document.createElement("h1");
    title.textContent = "Just Another Restaurant";

    const tagline = document.createElement("p");
    tagline.className = "tagline";
    tagline.textContent = "Lorem ipsum dolor sit amet.";

    hero.append(title, tagline);

    const info = document.createElement("section");
    info.className = "info";

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Opening hours";

    const hoursList = document.createElement("ul");
    hoursList.className = "hours";

    const hours = [
        ["Monday – Friday", "11:00 – 23:00"],
        ["Saturday", "10:00 – 00:00"],
        ["Sunday", "10:00 – 22:00"],
    ];

    hours.forEach(([day, time]) => {
        const item = document.createElement("li");
        const daySpan = document.createElement("span");
        daySpan.className = "day";
        daySpan.textContent = day;
        const timeSpan = document.createElement("span");
        timeSpan.className = "time";
        timeSpan.textContent = time;
        item.append(daySpan, timeSpan);
        hoursList.append(item);
    });

    info.append(hoursTitle, hoursList);
    content.append(hero, info);
}