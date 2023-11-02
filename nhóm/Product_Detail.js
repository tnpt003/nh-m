    // Function to extract the product ID from the URL
    function getProductIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('product');
    }

    // Function to load product details based on the product ID
    function loadProductDetails() {
        const productId = getProductIdFromURL();
        // You can replace this with actual data retrieval based on the product ID
        const productDetails = getProductDetails(productId);

        if (productDetails) {
            // Update the product detail page content
            document.getElementById('product-image').src = productDetails.image; // Set the image source
            document.getElementById('product-title').textContent = productDetails.name;
            document.getElementById('product-description').textContent = productDetails.description;
            document.getElementById('product-price').textContent = `Price: ${productDetails.price}₫`;
            // Add more product-specific content here
        } else {
            // Handle the case when the product details are not found
        }
    }

    // You should replace this with actual data retrieval logic based on the product ID
    function getProductDetails(productId) {
        // Simulated product data based on the product ID
        const products = {
            1: { name: 'Móc khóa da bò Kenta PMK0001', description: 'Product 1 description', price: '19,000₫', image: 'hình/Gợi ý hôm nay/1_2927cf620c864fb997ef807defd82e7e_master.jpg' },
            2: { name: 'Túi đeo chạy bộ PTX0003', description: 'Product 2 description', price: '250,000₫', image: 'hình/Gợi ý hôm nay/1_32e4055326d04de6b28f7c12f44550b9_master.jpg' },
            3: { name: 'Áo Thun Unisex Kenta Studio ATN0146', description: 'Product 3 description', price: '295,000₫', image: 'hình/Gợi ý hôm nay/1_5f0144d452dc453b8f86d3e8d4f3a556_master.jpg' },
            4: { name: 'Áo Thun Unisex Saigonnese ATN014', description: 'Product 4 description', price: '295,000₫', image: 'hình/Gợi ý hôm nay/1_7494176c987d4479bdf849f236df4731_master.jpg' },
            5: { name: 'Combo Áo Quần Thể Thao ATN0149', description: 'Product 5 description', price: '250,000₫', image: 'hình/Gợi ý hôm nay/1_e7ba7f9307774d1b89e626e9c9396238_master.jpg' },
            6: { name: 'Vớ Cổ Dài PE Co Giãn PVO0003', description: 'Product 6 description', price: '45,000₫', image: 'hình/Gợi ý hôm nay/163_5526354919bb4e978ceda314e4483b4a_master.jpg' },
            7: { name: 'Quần tây nam slimfit viền túi QTA0042', description: 'Product 7 description', price: '350,000₫', image: 'hình/Gợi ý hôm nay/2_1a1d5b281a28429e92f730302f765a01_master.jpg' },
            8: { name: 'Quần Kaki Dài Slimfit Nam QKK0048', description: 'Product 8 description', price: '350,000₫', image: 'hình/Gợi ý hôm nay/2_d0c88d0a8dd341a29b72fea28dbb1391_master.jpg' },
            9: { name: 'Vớ Cotton Cổ Ngắn PVO0001', description: 'Product 9 description', price: '39,000₫', image: 'hình/Gợi ý hôm nay/28_7f3fbbe92354429bacccd09bea0b3f59_master.jpg' },
            10: { name: 'hình/Gợi ý hôm nay/29_636e67277ca34eecaf0f9115d556780f_master.jpg', description: 'Product 10 description', price: '320,000₫', image: 'hình/Gợi ý hôm nay/29_636e67277ca34eecaf0f9115d556780f_master.jpg' },
            11: { name: 'Áo Thun Raglan Form Boxy ATN0151', description: 'Product 11 description', price: '295,000₫', image: 'hình/Gợi ý hôm nay/2a_9c6f64259c5b4eb3856f7578861db397_master.jpg' },
            12: { name: 'Áo Thun Unisex Saigonnese ATN0147', description: 'Product 12 description', price: '295,000₫', image: 'hình/Gợi ý hôm nay/6_e778851a63dd4563a25b1c33c4154387_master.jpg' },
            13: { name: 'Ví da nam cao cấp PVN0016', description: 'Product 13 description', price: '395,000₫', image: 'hình/Gợi ý hôm nay/hma00252_2a1c8c08a6e94a43a4fcbd47b2942e25_master.jpg' },
            14: { name: 'Móc Nơ khóa da bò Kenta PMK0001', description: 'Product 14 description', price: '50,000₫', image: 'hình/Gợi ý hôm nay/pnn0002_xl_eee6d499c1f249d199919522dcca1165_1024x1024.jpg' },
            15: { name: 'Quần Jean Skinny Nam QJD0061', description: 'Product 15 description', price: '450,000₫', image: 'hình/Gợi ý hôm nay/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg' },
            // Define details for other products with different IDs
        };
        return products[productId];
    }

    // Call the function to load product details
    loadProductDetails();
