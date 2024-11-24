const searchInput = document.getElementById("searchInput");
const sectionSelect = document.getElementById("sectionSelect");
const sections = document.querySelectorAll(".product-section");
const menu = document.querySelector(".menu");

function filterSections() {
    const filter = searchInput.value.toLowerCase();
    const selectedSection = sectionSelect.value;

    sections.forEach(section => {
        const sectionName = section.getAttribute("data-section");
        const cards = section.querySelectorAll(".product-card");
        let sectionVisible = false;

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const matchesFilter = text.includes(filter);
            card.style.display = matchesFilter ? "flex" : "none";
            if (matchesFilter) sectionVisible = true;
        });

        section.style.display = 
            (selectedSection === "all" || selectedSection === sectionName) && sectionVisible
                ? "block"
                : "none";
    });
}
function searchProducts() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('.product-section');

    sections.forEach(section => {
        let hasVisibleProducts = false;
        const products = section.querySelectorAll('.product-card');

        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase();

            if (productName.includes(input)) {
                product.style.display = ''; // Show matching product
                hasVisibleProducts = true;
            } else {
                product.style.display = 'none'; // Hide non-matching product
            }
        });

        // Show or hide the entire section based on if it has visible products
        section.style.display = hasVisibleProducts ? '' : 'none';
    });
}

searchInput.addEventListener("keyup", filterSections);
sectionSelect.addEventListener("change", filterSections);

function toggleMenu() {
    menu.classList.toggle("hidden");
}
function searchProducts() {
    const input = document.getElementById('search-input').value.toLowerCase(); // قيمة البحث بالحروف الصغيرة
    const sections = document.querySelectorAll('.product-section'); // تحديد كل الأقسام

    sections.forEach(section => {
        let hasVisibleProducts = false; // متغير لمعرفة إذا كان هناك منتجات مرئية في القسم
        const products = section.querySelectorAll('.product-card'); // المنتجات داخل القسم

        products.forEach(product => {
            const productName = product.querySelector('h3').textContent.toLowerCase(); // اسم المنتج

            // مقارنة اسم المنتج مع النص المدخل
            if (productName.includes(input)) {
                product.style.display = ''; // إظهار المنتج المطابق
                hasVisibleProducts = true;
            } else {
                product.style.display = 'none'; // إخفاء المنتج غير المطابق
            }
        });

        // إظهار أو إخفاء القسم بناءً على وجود منتجات مطابقة
        section.style.display = hasVisibleProducts ? '' : 'none';
    });
}