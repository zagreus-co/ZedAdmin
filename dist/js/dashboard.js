let toggleMenu = (sidebarElement = "aside.sidebar") => {
    document.querySelector(sidebarElement).classList.toggle('hidden');
}
document.addEventListener("click", (event) => {
    const mobile_menu = document.querySelector('aside.sidebar');
    let targetElement = event.target; // Clicked element

    do {
        if (targetElement == document.querySelector('#mobileMenuBtn')) return toggleMenu();
        if (targetElement == mobile_menu) return;
        targetElement = targetElement.parentNode;
    } while (targetElement);
    
    if (!mobile_menu.classList.contains('hidden')) mobile_menu.classList.add('hidden');
});

// Scroll to active element [issue #2]
document.querySelector("nav ul li.active").scrollIntoView({ behavior: 'smooth', block: 'end'});
