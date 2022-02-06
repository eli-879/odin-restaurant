const loadContact = () => {
    const container = document.createElement("div");
    container.classList.add("contact-body");

    const phoneNumber = document.createElement("div");
    phoneNumber.classList.add("contact-phone");
    phoneNumber.innerText = "📞 0800 838383";
    container.appendChild(phoneNumber);

    const location = document.createElement("div");
    location.classList.add("contact-location");
    location.innerText = "🏠 123 Asia Lane, Javenport, New Zealand";
    container.appendChild(location);

    return container
};

export default loadContact;