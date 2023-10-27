console.log('product_detail.js is working'); // Add this line
document.addEventListener('DOMContentLoaded', function () {
    const productLinks = document.querySelectorAll('.product-link');
    const productTitle = document.getElementById('product-title');
    const productImage = document.getElementById('product-image');
    const productDescription = document.getElementById('product-description');
    const productPrice = document.getElementById('product-price');

    productLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();   

            const productId = link.getAttribute('data-product');
            if (productId === '1') {
                productTitle.textContent = 'Móc khóa da bò Kenta PMK0001';
                productImage.src = 'hình/Gợi ý hôm nay/1_2927cf620c864fb997ef807defd82e7e_master.jpg';
                productDescription.textContent = 'Product 1 description goes here.';
                productPrice.textContent = 'Price: 19,000₫';
            } else if (productId === '2') {
                productTitle.textContent = 'Túi đeo chạy bộ PTX0003';
                productImage.src = 'hình/Gợi ý hôm nay/1_32e4055326d04de6b28f7c12f44550b9_master.jpg';
                productDescription.textContent = 'Product 2 description goes here.';
                productPrice.textContent = 'Price: 250,000₫';
            }
            // Add more conditions for other products

            // Optionally, you can scroll to the product detail section 
            productTitle.scrollIntoView({ behavior: 'smooth' });
        });
    });
});