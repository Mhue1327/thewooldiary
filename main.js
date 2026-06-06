document.addEventListener("DOMContentLoaded", () => {
    // === 1. QUẢN LÝ GIỎ HÀNG BẰNG LOCALSTORAGE ===
    let cart = JSON.parse(localStorage.getItem('wooldiary_cart')) || [];

    function updateCartBadge() {
        const badge = document.getElementById('cart-badge');
        if (badge) {
            badge.innerText = cart.length;
            badge.style.transform = "scale(1.2)";
            setTimeout(() => badge.style.transform = "scale(1)", 200);
        }
    }

    window.addToCart = function(id, name, price) {
        cart.push({ id, name, price });
        localStorage.setItem('wooldiary_cart', JSON.stringify(cart));
        updateCartBadge();
        alert(`Đã thêm thành công "${name}" vào giỏ hàng!`);
    };

    updateCartBadge();

    // === 2. BẬT/TẮT CHATBOX ===
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');

    if (chatToggle && chatWindow) {
        chatToggle.addEventListener('click', () => {
            chatWindow.style.display = (chatWindow.style.display === "block") ? "none" : "block";
        });
    }

    // === 3. MENU MOBILE HAMBURGER ===
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                mobileBtn.classList.remove('fa-bars');
                mobileBtn.classList.add('fa-xmark');
            } else {
                mobileBtn.classList.remove('fa-xmark');
                mobileBtn.classList.add('fa-bars');
            }
        });
    }
});