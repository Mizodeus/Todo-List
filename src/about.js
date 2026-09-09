export default function about(content) {
    const section = document.createElement("section");
    section.className = "about";

    const title = document.createElement("h2");
    title.textContent = "Our story";

    const paragraphs = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis non tortor dictum iaculis. Etiam non gravida magna. Aenean pulvinar in ante ac maximus. Quisque urna tortor, convallis ut enim ut, semper feugiat arcu. Pellentesque sagittis est sed purus vulputate, mollis consequat ipsum pulvinar. Vestibulum dolor eros, sollicitudin sagittis erat vitae, euismod congue quam. Proin sit amet varius tortor. In facilisis velit vitae magna molestie, vitae euismod sapien vulputate. Proin eu cursus quam, non luctus mi. Proin sagittis sapien risus, sed egestas massa iaculis id. In in neque at odio condimentum pharetra. Sed vulputate, est sed vehicula luctus, ante mauris volutpat leo, et ullamcorper nisi dolor nec eros. Vivamus non lectus leo. Aenean vel ex tempor lacus efficitur lobortis. Donec suscipit augue non consequat tempor.",
        "Suspendisse potenti. Proin finibus risus hendrerit feugiat gravida. Etiam sit amet velit quis tellus porttitor rhoncus. Integer elementum rhoncus facilisis. Sed at sapien placerat, cursus nisi ac, tincidunt mauris. Cras maximus diam odio, nec laoreet libero fermentum vitae. Pellentesque nec justo dolor. Nullam suscipit sagittis justo et ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. In rutrum est id suscipit tincidunt. Nam ut congue est. Nullam tincidunt non urna non suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sodales mauris nec lectus bibendum sodales.",
    ];

    paragraphs.forEach((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        section.append(p);
    });

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Find us";

    const contactList = document.createElement("ul");
    contactList.className = "contact";

    const contacts = [
        ["Address", "Your home"],
        ["Phone", "+1 (234) 567-8910"],
        ["Email", "hello@mail.example"],
    ];

    contacts.forEach(([label, value]) => {
        const item = document.createElement("li");
        const strong = document.createElement("strong");
        strong.textContent = label + ": ";
        item.append(strong, value);
        contactList.append(item);
    });

    section.append(contactTitle, contactList);
    content.append(section);
}