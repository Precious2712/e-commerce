"use client";

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
}

const products: Product[] = [
    {
        id: "1",
        name: "Wireless Headphones",
        price: 99.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaKaaMeJXnea_vv7fr8sD_jyTl9yO1eoYLTg&s",
        description:
            "Experience superior sound quality with our premium wireless headphones. Designed for comfort and long-lasting battery life, these headphones provide high-definition audio with noise cancellation technology, ensuring an immersive listening experience whether you are at home, in the office, or on the go."
    },
    {
        id: "2",
        name: "Smart Watch",
        price: 199.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9gvjVqz-LJmDLi8MT6t-wjDpXIb9t_QYgQ&s",
        description:
            "Stay connected and monitor your health with our latest smartwatch. Featuring a sleek and modern design, this watch includes real-time heart rate monitoring, step tracking, and seamless integration with your smartphone for notifications, calls, and music control. Perfect for fitness enthusiasts and professionals alike."
    },
    {
        id: "3",
        name: "Gaming Mouse",
        price: 49.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4gvZ55jOo-xfRdvxEcai2LsqQkr2oa_qWg&s",
        description:
            "Enhance your gaming experience with our high-performance gaming mouse. Designed for precision and speed, this ergonomic mouse features customizable buttons, adjustable DPI settings, and RGB lighting to match your setup. Whether you're a casual gamer or a professional, this mouse delivers unmatched accuracy and control."
    },
    {
        id: "4",
        name: "Mechanical Keyboard",
        price: 129.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXBMcvkZ_NLRIh7MPJT7b6FuhIe5Bdh5oRg&s",
        description:
            "Take your typing and gaming experience to the next level with our mechanical keyboard. Equipped with high-quality mechanical switches, customizable RGB lighting, and an ergonomic design, this keyboard ensures fast response times and ultimate comfort. Ideal for gamers, programmers, and content creators."
    },
    {
        id: "5",
        name: "4K Ultra HD Monitor",
        price: 349.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXhn3N5kxEZOK5aSlBNm-qZQ-XCr3bg5KZA&s",
        description:
            "Upgrade your workspace with a stunning 4K Ultra HD monitor. Featuring a crisp display, vibrant colors, and ultra-smooth refresh rates, this monitor is perfect for creative professionals, gamers, and anyone who wants the best visual experience. Built with an ergonomic stand and multiple connectivity options for seamless integration."
    },
    {
        id: "6",
        name: "Speaker",
        price: 79.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekjsaDY-yNOpOtTe9e81FC54rYCqseW_-ew&s",
        description:
            "Enjoy powerful and crystal-clear sound wherever you go with our portable Bluetooth speaker. With deep bass, waterproof design, and long-lasting battery life, this speaker is perfect for outdoor adventures, parties, and everyday use. Connect wirelessly to your devices and experience music like never before."
    },
    {
        id: "7",
        name: "Wireless Charging Pad",
        price: 39.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8rTW2AI2EG_HJkq1J6hMo_-BTkEnfpd2vg&s",
        description:
            "Charge your devices effortlessly with our sleek and efficient wireless charging pad. Designed to support fast charging, this pad is compatible with a variety of smartphones and wireless-enabled gadgets. Its ultra-slim profile makes it perfect for any desk or nightstand setup."
    },
    {
        id: "8",
        name: "Smart Security Camera",
        price: 149.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghscR5eMKKAld8wwdcXO8nPMgWG9cdqCF0w&s",
        description:
            "Protect your home with our advanced smart home security camera. Equipped with night vision, motion detection, and two-way audio, this camera allows you to monitor your home remotely from your smartphone. Get instant alerts and keep an eye on your loved ones with crystal-clear video quality."
    },
    {
        id: "9",
        name: "Ergonomic Office Chair",
        price: 299.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMWlf-G72pYUfWxZbd2RqSU4Dqx5Ggnvq4A&s",
        description:
            "Enhance your comfort and productivity with our ergonomic office chair. Featuring adjustable lumbar support, breathable mesh material, and a sturdy base, this chair is perfect for long hours of work or gaming. Say goodbye to back pain and hello to comfort."
    },
    {
        id: "10",
        name: "Professional DSLR Camera",
        price: 1199.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJrMebfAdd3QBm4Jc4Rc1V-k9vBJ3ErrAPg&s",
        description:
            "Capture stunning photos and videos with our professional DSLR camera. Equipped with a high-resolution sensor, advanced autofocus system, and a range of customizable settings, this camera is ideal for both beginners and experienced photographers. Take your photography skills to the next level."
    }
];

export default products;