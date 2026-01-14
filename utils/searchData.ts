export type CategoryItem = {
    name: string;
    image: string;
};

export type SearchCategories = {
    [key: string]: CategoryItem[];
};

export const SEARCH_DATA: SearchCategories = {
    WOMEN: [
        { name: "Outerwear", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=300&auto=format&fit=crop" },
        { name: "Shirts & Blouses", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=300&auto=format&fit=crop" },
        { name: "Bottoms", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=300&auto=format&fit=crop" },
        { name: "Dresses & Skirts", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=300&auto=format&fit=crop" },
        { name: "Loungewear", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300&auto=format&fit=crop" },
        { name: "Innerwear", image: "https://images.unsplash.com/flagged/photo-1553986433-c4193e6ddc6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Accessories", image: "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Sport Utility Wear", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=300&auto=format&fit=crop" },
        { name: "HEATTECH", image: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&w=300&auto=format&fit=crop" },
        { name: "Linen", image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?q=80&w=300&auto=format&fit=crop" },
        { name: "AIRism", image: "https://images.unsplash.com/photo-1617391258031-f8d80b22fb35?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Winter Collection", image: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=300&auto=format&fit=crop" },
        { name: "Maternity Wear", image: "https://images.unsplash.com/photo-1584271854089-9bb3e5168e32?q=80&w=300&auto=format&fit=crop" },
        { name: "Fleece", image: "https://images.unsplash.com/photo-1597767938316-e3b197db76ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "UT (Graphic Tees)", image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=300&auto=format&fit=crop" },
    ],
    MEN: [
        { name: "Outerwear", image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=300&auto=format&fit=crop" },
        { name: "Casual Shirts", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300&auto=format&fit=crop" },
        { name: "Formal Shirts", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=300&auto=format&fit=crop" },
        { name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&auto=format&fit=crop" },
        { name: "Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=300&auto=format&fit=crop" },
        { name: "Pants/Chinos", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=300&auto=format&fit=crop" },
        { name: "Shorts", image: "https://media.istockphoto.com/id/168246624/photo/young-handsome-man-in-jeans-shirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=GauDoSwHpCgHWQgYs4FHS0p2PRRqzvGaTLmr7zcLUiI=" },
        { name: "Activewear", image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=300&auto=format&fit=crop" },
        { name: "Suits & Blazers", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=300&auto=format&fit=crop" },
        { name: "Sweaters", image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=300&auto=format&fit=crop" },
        { name: "Underwear", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=300&auto=format&fit=crop" },
        { name: "Accessories", image: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=300&auto=format&fit=crop" },
        { name: "Shoes", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Belts", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=300&auto=format&fit=crop" },
        { name: "Collaborations", image: "https://images.unsplash.com/photo-1523396870624-dda26c2763f6?q=80&w=300&auto=format&fit=crop" }
    ],
    KIDS: [
        { name: "Tops", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=300&auto=format&fit=crop" },
        { name: "Bottoms", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=300&auto=format&fit=crop" },
        { name: "Dresses", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=300&auto=format&fit=crop" },
        { name: "Outerwear", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=300&auto=format&fit=crop" },
        { name: "Loungewear", image: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?q=80&w=300&auto=format&fit=crop" },
        { name: "Sportswear", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=300&auto=format&fit=crop" },
        { name: "School Essentials", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=300&auto=format&fit=crop" },
        { name: "Innerwear", image: "https://images.unsplash.com/photo-1632232963030-b5d9dd08a1f8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Baby (Newborn)", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=300&auto=format&fit=crop" },
        { name: "Toddler", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=300&auto=format&fit=crop" },
        { name: "Accessories", image: "https://images.unsplash.com/photo-1728280199884-21df1e3b0f5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D" },
        { name: "Shoes", image: "https://images.unsplash.com/photo-1678192568478-9488ee55def6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Character Shop", image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=300&auto=format&fit=crop" },
        { name: "Matching Sets", image: "https://images.unsplash.com/photo-1611428813653-aa606c998586?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { name: "Knitwear", image: "https://plus.unsplash.com/premium_photo-1707816501235-78b637c21cc7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]
};
