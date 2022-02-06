const loadMenu = () => {
    const container = document.createElement("div");
    container.classList.add("menu-body");

    const menu_title = document.createElement("div");
    menu_title.classList.add("menu-title");
    menu_title.innerText = "Menu...";
    container.appendChild(menu_title);


    const item_1 = document.createElement("div");
    item_1.classList.add("menu-item-container");
    const item_1_title = document.createElement("div");
    item_1_title.classList.add("menu-item-title");
    item_1_title.innerText = "Asian BBQ Chicken";
    item_1.appendChild(item_1_title);
    const item_1_description = document.createElement("div");
    item_1_description.classList.add("menu_item-desc");
    item_1_description.innerText = "Chicken cooked to perfection dipped in beautiful BBQ sauce";
    item_1.appendChild(item_1_description);
    container.appendChild(item_1);

    const item_2 = document.createElement("div");
    item_2.classList.add("menu-item-container");
    const item_2_title = document.createElement("div");
    item_2_title.classList.add("menu-item-title");
    item_2_title.innerText = "Sweet and Sour Pork";
    item_2.appendChild(item_2_title);
    const item_2_description = document.createElement("div");
    item_2_description.classList.add("menu_item-desc");
    item_2_description.innerText = "Unbelievable pork drizzled with sweet and sour sauce";
    item_2.appendChild(item_2_description);
    container.appendChild(item_2);

    const item_3 = document.createElement("div");
    item_3.classList.add("menu-item-container");
    const item_3_title = document.createElement("div");
    item_3_title.classList.add("menu-item-title");
    item_3_title.innerText = "Black Bean Beef";
    item_3.appendChild(item_3_title);
    const item_3_description = document.createElement("div");
    item_3_description.classList.add("menu_item-desc");
    item_3_description.innerText = "Sticky rice, black bean sauce, sesame oil mixed with red pepper";
    item_3.appendChild(item_3_description);
    container.appendChild(item_3);

    const item_4 = document.createElement("div");
    item_4.classList.add("menu-item-container");
    const item_4_title = document.createElement("div");
    item_4_title.classList.add("menu-item-title");
    item_4_title.innerText = "Combination Vegetable";
    item_4.appendChild(item_4_title);
    const item_4_description = document.createElement("div");
    item_4_description.classList.add("menu_item-desc");
    item_4_description.innerText = "A vegetarian option consisting of a vegetable potpourri and others";
    item_4.appendChild(item_4_description);
    container.appendChild(item_4);
    
    
    return container;
};

export default loadMenu;