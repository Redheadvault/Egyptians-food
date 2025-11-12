// ========================================
// EGYPTIAN FOOD - MAIN JAVASCRIPT
// ========================================

// Menu data in all languages
const menuData = {
    en: [
        {
            category: "Soups",
            items: [
                { name: "Chicken Soup", description: "Traditional chicken broth with vegetables" },
                { name: "Vegetable Soup", description: "Fresh seasonal vegetables in savory broth" },
                { name: "Seafood Soup", description: "Rich seafood broth with shrimp, fish, and aromatic herbs" },
                { name: "Cream of Tomato Soup", description: "Smooth tomato soup with cream" },
                { name: "Lissan Asfour Soup", description: "Egyptian orzo pasta soup in rich broth" },
                { name: "Cream of Broccoli Soup", description: "Velvety broccoli soup with cream" }
            ]
        },
        {
            category: "Appetizers & Sides",
            items: [
                { name: "Kibbeh", description: "Bulgur and meat croquettes with savory filling" },
                { name: "Sambousek - Chicken", description: "Crispy pastries filled with seasoned chicken" },
                { name: "Sambousek - Meat", description: "Crispy pastries filled with spiced meat" },
                { name: "Sambousek - Cheese", description: "Crispy pastries filled with melted cheese" },
                { name: "Spring Rolls - Chicken", description: "Crispy rolls with chicken filling" },
                { name: "Spring Rolls - Meat", description: "Crispy rolls with meat filling" },
                { name: "Goulash - Meat", description: "Savory pastry filled with seasoned meat" },
                { name: "Goulash - Cheese", description: "Savory pastry filled with melted cheese" }
            ]
        },
        {
            category: "Mahshi (Stuffed Vegetables)",
            items: [
                { name: "Mombar", description: "Rice-stuffed sausage with aromatic herbs and spices" },
                { name: "Stuffed Grape Leaves (Vegetarian)", description: "Vine leaves filled with seasoned rice" },
                { name: "Stuffed Grape Leaves with Meat", description: "Vine leaves with rice and ground meat" },
                { name: "Stuffed Cabbage Leaves", description: "Tender cabbage rolls with savory filling" },
                { name: "Stuffed Bell Peppers", description: "Colorful peppers filled with rice and meat" },
                { name: "Stuffed Zucchini", description: "Fresh zucchini with herb-seasoned filling" },
                { name: "Stuffed Eggplant", description: "Roasted eggplant with flavorful stuffing" },
                { name: "Stuffed Onions", description: "Sweet onions filled with rice mixture" },
                { name: "Stuffed Potatoes", description: "Hearty potatoes with savory filling" },
                { name: "Stuffed Artichokes with Meat", description: "Tender artichokes with meat and rice" }
            ]
        },
        {
            category: "Salads",
            items: [
                { name: "Egyptian Salad", description: "Fresh vegetables with lemon and olive oil" },
                { name: "Tuna Salad", description: "Tuna with crisp vegetables and dressing" },
                { name: "Shrimp Salad", description: "Succulent shrimp with fresh greens" },
                { name: "Chicken Salad", description: "Tender chicken with vegetables and mayo" },
                { name: "Beet Salad", description: "Roasted beets with tangy dressing" },
                { name: "Macaroni Salad", description: "Classic pasta salad with vegetables" },
                { name: "Tahini Salad", description: "Fresh vegetables with creamy tahini dressing" },
                { name: "Yogurt Salad", description: "Cucumber and herbs in cool yogurt" },
                { name: "Baba Ghanoush", description: "Smoky roasted eggplant with tahini" }
            ]
        },
        {
            category: "Chicken Dishes",
            items: [
                { name: "Chicken Pané", description: "Breaded and fried chicken cutlets" },
                { name: "Chicken Piccata", description: "Pan-seared chicken in lemon butter sauce" },
                { name: "Chicken Rolls", description: "Chicken breast stuffed with smoked turkey and cheese, breaded" },
                { name: "Grilled Chicken", description: "Perfectly seasoned grilled chicken" },
                { name: "BBQ Chicken", description: "Tender chicken with smoky BBQ glaze" },
                { name: "Stuffed Chicken with Freekeh or Rice", description: "Whole chicken filled with aromatic grains" },
                { name: "Chicken Casserole with Garlic Butter & Sumac", description: "Baked chicken with rich garlic butter" }
            ]
        },
        {
            category: "Meat Dishes",
            items: [
                { name: "Breaded Steak (Escalope)", description: "Tender veal or beef cutlet, breaded and fried" },
                { name: "Grilled Steak with Butter", description: "Juicy steak with herb butter" },
                { name: "Lamb Shank", description: "Slow-braised lamb shank, fall-off-the-bone tender" },
                { name: "Kebab Casserole", description: "Spiced ground meat baked to perfection" },
                { name: "Kofta BBQ", description: "Grilled spiced meatballs with smoky flavor" },
                { name: "Kofta Pané", description: "Breaded and fried seasoned meatballs" },
                { name: "Kofta with Tahini", description: "Meatballs in creamy tahini sauce" },
                { name: "Kofta Daoud Pasha", description: "Meatballs in rich tomato sauce with pomegranate molasses" },
                { name: "Kebda Alexandria", description: "Alexandrian-style liver with cumin, garlic and peppers" },
                { name: "Kebda Pané", description: "Breaded and fried liver cutlets" },
                { name: "Chicken Liver (Awaness)", description: "Sautéed chicken livers with aromatic spices" }
            ]
        },
        {
            category: "Fish & Seafood",
            items: [
                { name: "Shrimp au Beurre", description: "Succulent shrimp in rich garlic butter sauce" },
                { name: "Shrimp à la Crème", description: "Creamy shrimp in velvety white sauce" },
                { name: "Shrimp Pané", description: "Breaded and fried shrimp, crispy and golden" },
                { name: "Calamari Pané", description: "Breaded calamari rings, fried to perfection" },
                { name: "Stuffed Calamari (Calmar Mahshi)", description: "Calamari stuffed with seasoned rice and herbs" },
                { name: "Baked Fish (Poisson au Four)", description: "Fresh fish baked with herbs and lemon" },
                { name: "Fried Fish (Poisson Frit)", description: "Crispy fried fish with aromatic spices" },
                { name: "Fish Casserole", description: "Tender fish baked in savory tomato sauce" },
                { name: "Salt-Crusted Fish (Poisson Cuit à Sel)", description: "Whole fish baked in salt crust, incredibly moist and flavorful" }
            ]
        },
        {
            category: "Vegetables in Sauce",
            items: [
                { name: "Okra Stew", description: "Tender okra in tomato sauce (with or without meat)" },
                { name: "Green Bean Stew", description: "Fresh beans in savory tomato sauce" },
                { name: "Pea Stew", description: "Sweet peas in aromatic sauce" },
                { name: "Zucchini Stew", description: "Fresh zucchini in light tomato sauce" },
                { name: "Moussaka (Eggplant)", description: "Layered eggplant in rich tomato sauce" },
                { name: "Fava Bean Stew", description: "Whole fava beans in savory broth" },
                { name: "Swiss Chard", description: "Tender greens with garlic and lemon" },
                { name: "Potato Stew", description: "Hearty potatoes in spiced sauce" }
            ]
        },
        {
            category: "Béchamel Dishes",
            items: [
                { name: "Pasta Béchamel", description: "Layered pasta with creamy béchamel and meat" },
                { name: "Zucchini Béchamel", description: "Sliced zucchini baked with béchamel sauce" },
                { name: "Moussaka Béchamel", description: "Eggplant layered with meat and béchamel" }
            ]
        },
        {
            category: "Rice Specialties",
            items: [
                { name: "Creamy Rice with Choice of Meat", description: "Rich, creamy rice with your selection of protein" },
                { name: "Seafood Rice", description: "Aromatic rice with shrimp, fish, and Mediterranean spices" },
                { name: "Rice with Vermicelli", description: "Golden vermicelli mixed with fluffy rice" },
                { name: "Biryani Rice", description: "Fragrant basmati rice with aromatic spices" },
                { name: "Rice with Almonds, Meat & Cranberries", description: "Festive rice with sweet and savory toppings" },
                { name: "Maqluba (Upside-Down Rice)", description: "Layered rice with eggplant and meat, flipped to serve" },
                { name: "Kabsa (Saudi Rice)", description: "Spiced rice with meat, tomatoes and Middle Eastern flavors" }
            ]
        },
        {
            category: "Desserts",
            items: [
                { name: "Basbousa", description: "Semolina cake soaked in sweet syrup" },
                { name: "Konafa with Cream", description: "Crispy shredded phyllo with sweet cream filling" },
                { name: "Konafa with Nuts", description: "Crispy shredded phyllo with mixed nuts" },
                { name: "Mahalabia", description: "Creamy milk pudding with rose water and pistachios" },
                { name: "Rice Pudding (Roz bel Laban)", description: "Creamy rice pudding with cinnamon" },
                { name: "Pumpkin Béchamel Cream", description: "Sweet pumpkin dessert with béchamel" },
                { name: "Bouchées - Assorted Flavors", description: "Delicate pastries filled with nuts, cream, or other sweet fillings" }
            ]
        }
    ],
    fr: [
        {
            category: "Soupes",
            items: [
                { name: "Soupe de Poulet", description: "Bouillon de poulet traditionnel avec légumes" },
                { name: "Soupe de Légumes", description: "Légumes frais de saison dans un bouillon savoureux" },
                { name: "Soupe de Fruits de Mer", description: "Riche bouillon de fruits de mer avec crevettes, poisson et herbes aromatiques" },
                { name: "Crème de Tomate", description: "Soupe de tomate onctueuse avec crème" },
                { name: "Soupe Lissan Asfour", description: "Soupe égyptienne aux pâtes orzo dans un bouillon riche" },
                { name: "Crème de Brocoli", description: "Soupe veloutée au brocoli avec crème" }
            ]
        },
        {
            category: "Entrées et Accompagnements",
            items: [
                { name: "Kibbeh", description: "Croquettes de boulgour et viande avec farce savoureuse" },
                { name: "Sambousek - Poulet", description: "Pâtisseries croustillantes farcies au poulet assaisonné" },
                { name: "Sambousek - Viande", description: "Pâtisseries croustillantes farcies à la viande épicée" },
                { name: "Sambousek - Fromage", description: "Pâtisseries croustillantes farcies au fromage fondant" },
                { name: "Rouleaux de Printemps - Poulet", description: "Rouleaux croustillants avec garniture de poulet" },
                { name: "Rouleaux de Printemps - Viande", description: "Rouleaux croustillants avec garniture de viande" },
                { name: "Goulash - Viande", description: "Pâtisserie savoureuse farcie à la viande assaisonnée" },
                { name: "Goulash - Fromage", description: "Pâtisserie savoureuse farcie au fromage fondant" }
            ]
        },
        {
            category: "Mahshi (Légumes Farcis)",
            items: [
                { name: "Mombar", description: "Saucisse farcie au riz avec herbes et épices aromatiques" },
                { name: "Feuilles de Vigne Farcies (Végétarien)", description: "Feuilles de vigne farcies au riz assaisonné" },
                { name: "Feuilles de Vigne Farcies à la Viande", description: "Feuilles de vigne avec riz et viande hachée" },
                { name: "Feuilles de Chou Farcies", description: "Rouleaux de chou tendres avec garniture savoureuse" },
                { name: "Poivrons Mahshi", description: "Poivrons colorés farcis au riz et viande" },
                { name: "Courgettes Mahshi", description: "Courgettes fraîches avec garniture aux herbes" },
                { name: "Aubergines Mahshi", description: "Aubergines rôties avec farce savoureuse" },
                { name: "Oignons Mahshi", description: "Oignons doux farcis au mélange de riz" },
                { name: "Pommes de Terre Mahshi", description: "Pommes de terre copieuses avec garniture savoureuse" },
                { name: "Artichauts Mahshi à la Viande", description: "Artichauts tendres avec viande et riz" }
            ]
        },
        {
            category: "Salades",
            items: [
                { name: "Salade Égyptienne", description: "Légumes frais au citron et huile d'olive" },
                { name: "Salade au Thon", description: "Thon avec légumes croquants et vinaigrette" },
                { name: "Salade de Crevettes", description: "Crevettes succulentes avec verdures fraîches" },
                { name: "Salade de Poulet", description: "Poulet tendre avec légumes et mayonnaise" },
                { name: "Salade de Betteraves", description: "Betteraves rôties avec vinaigrette acidulée" },
                { name: "Salade de Macaroni", description: "Salade de pâtes classique avec légumes" },
                { name: "Salade Tahini", description: "Légumes frais avec vinaigrette crémeuse au tahini" },
                { name: "Salade au Yogourt", description: "Concombre et herbes dans du yogourt frais" },
                { name: "Baba Ghanoush", description: "Aubergine rôtie fumée au tahini" }
            ]
        },
        {
            category: "Plats de Poulet",
            items: [
                { name: "Poulet Pané", description: "Escalopes de poulet panées et frites" },
                { name: "Poulet Piccata", description: "Poulet poêlé au citron et beurre" },
                { name: "Roulés de Poulet", description: "Poitrine de poulet farcie à la dinde fumée et fromage, panée" },
                { name: "Poulet Grillé", description: "Poulet grillé parfaitement assaisonné" },
                { name: "Poulet BBQ", description: "Poulet tendre avec glaçage BBQ fumé" },
                { name: "Poulet Farci au Freekeh ou Riz", description: "Poulet entier farci aux grains aromatiques" },
                { name: "Casserole de Poulet au Beurre d'Ail et Sumac", description: "Poulet au four avec beurre d'ail riche" }
            ]
        },
        {
            category: "Plats de Viande",
            items: [
                { name: "Steak Pané (Escalope)", description: "Escalope de veau ou boeuf tendre, panée et frite" },
                { name: "Steak Grillé au Beurre", description: "Steak juteux avec beurre aux herbes" },
                { name: "Jarret d'Agneau", description: "Jarret d'agneau braisé lentement, fondant" },
                { name: "Casserole de Kebab", description: "Viande hachée épicée cuite au four" },
                { name: "Kofta BBQ", description: "Boulettes de viande épicées grillées avec saveur fumée" },
                { name: "Kofta Pané", description: "Boulettes de viande assaisonnées, panées et frites" },
                { name: "Kofta au Tahini", description: "Boulettes de viande dans une sauce tahini crémeuse" },
                { name: "Kofta Daoud Pacha", description: "Boulettes de viande en sauce tomate riche avec mélasse de grenade" },
                { name: "Kebda d'Alexandrie", description: "Foie à l'alexandrine avec cumin, ail et poivrons" },
                { name: "Kebda Pané", description: "Escalopes de foie panées et frites" },
                { name: "Foie de Poulet (Awaness)", description: "Foies de poulet sautés aux épices aromatiques" }
            ]
        },
        {
            category: "Poissons et Fruits de Mer",
            items: [
                { name: "Crevettes au Beurre", description: "Crevettes succulentes dans une riche sauce au beurre à l'ail" },
                { name: "Crevettes à la Crème", description: "Crevettes crémeuses dans une sauce blanche veloutée" },
                { name: "Crevettes Panées", description: "Crevettes panées et frites, croustillantes et dorées" },
                { name: "Calamars Panés", description: "Anneaux de calamars panés, frits à la perfection" },
                { name: "Calamars Farcis (Calmar Mahshi)", description: "Calamars farcis au riz assaisonné et aux herbes" },
                { name: "Poisson au Four", description: "Poisson frais cuit au four avec herbes et citron" },
                { name: "Poisson Frit", description: "Poisson frit croustillant aux épices aromatiques" },
                { name: "Casserole de Poisson", description: "Poisson tendre cuit au four dans une sauce tomate savoureuse" },
                { name: "Poisson Cuit à Sel", description: "Poisson entier cuit en croûte de sel, incroyablement moelleux et savoureux" }
            ]
        },
        {
            category: "Légumes en Sauce",
            items: [
                { name: "Ragoût de Bamia", description: "Gombo tendre en sauce tomate (avec ou sans viande)" },
                { name: "Ragoût de Haricots Verts", description: "Haricots frais en sauce tomate savoureuse" },
                { name: "Ragoût de Pois", description: "Petits pois dans une sauce aromatique" },
                { name: "Ragoût de Courgettes", description: "Courgettes fraîches en sauce tomate légère" },
                { name: "Moussaka (Aubergine)", description: "Aubergines en couches en sauce tomate riche" },
                { name: "Ragoût de Fèves", description: "Fèves entières dans un bouillon savoureux" },
                { name: "Blettes", description: "Légumes verts tendres à l'ail et citron" },
                { name: "Ragoût de Pommes de Terre", description: "Pommes de terre copieuses en sauce épicée" }
            ]
        },
        {
            category: "Plats Béchamel",
            items: [
                { name: "Pâtes Béchamel", description: "Pâtes en couches avec béchamel crémeuse et viande" },
                { name: "Courgettes Béchamel", description: "Courgettes tranchées cuites avec sauce béchamel" },
                { name: "Moussaka Béchamel", description: "Aubergines en couches avec viande et béchamel" }
            ]
        },
        {
            category: "Spécialités de Riz",
            items: [
                { name: "Riz Crémeux avec Choix de Viande", description: "Riz riche et crémeux avec votre choix de protéine" },
                { name: "Riz aux Fruits de Mer", description: "Riz aromatique avec crevettes, poisson et épices méditerranéennes" },
                { name: "Riz avec Vermicelles", description: "Vermicelles dorées mélangées au riz moelleux" },
                { name: "Riz Biryani", description: "Riz basmati parfumé aux épices aromatiques" },
                { name: "Riz aux Amandes, Viande et Canneberges", description: "Riz festif avec garnitures sucrées et salées" },
                { name: "Maqluba (Riz Renversé)", description: "Riz en couches avec aubergine et viande, retourné pour servir" },
                { name: "Kabsa (Riz Saoudien)", description: "Riz épicé avec viande, tomates et saveurs du Moyen-Orient" }
            ]
        },
        {
            category: "Desserts",
            items: [
                { name: "Basbousa", description: "Gâteau de semoule trempé dans un sirop sucré" },
                { name: "Konafa à la Crème", description: "Pâte phyllo croustillante avec garniture à la crème sucrée" },
                { name: "Konafa aux Noix", description: "Pâte phyllo croustillante avec noix mélangées" },
                { name: "Mahalabia", description: "Pouding au lait crémeux à l'eau de rose et pistaches" },
                { name: "Riz au Lait (Roz bel Laban)", description: "Pouding au riz crémeux à la cannelle" },
                { name: "Crème de Citrouille Béchamel", description: "Dessert sucré à la citrouille avec béchamel" },
                { name: "Bouchées - Saveurs Assorties", description: "Pâtisseries délicates farcies de noix, crème ou autres garnitures sucrées" }
            ]
        }
    ],
    ar: [
        {
            category: "الشوربات",
            items: [
                { name: "شوربة دجاج", description: "مرق دجاج تقليدي مع خضار" },
                { name: "شوربة خضار", description: "خضار موسمية طازجة في مرق لذيذ" },
                { name: "شوربة فواكه البحر", description: "مرق غني بفواكه البحر مع روبيان وسمك وأعشاب عطرية" },
                { name: "شوربة كريمة الطماطم", description: "شوربة طماطم ناعمة مع كريمة" },
                { name: "شوربة لسان عصفور", description: "شوربة مصرية بمعكرونة الأورزو في مرق غني" },
                { name: "شوربة كريمة البروكلي", description: "شوربة بروكلي مخملية مع كريمة" }
            ]
        },
        {
            category: "المقبلات والمحشي",
            items: [
                { name: "كبة", description: "كرات البرغل واللحم بالحشوة اللذيذة" },
                { name: "سمبوسك - دجاج", description: "معجنات مقرمشة محشوة بالدجاج المتبل" },
                { name: "سمبوسك - لحم", description: "معجنات مقرمشة محشوة باللحم المتبل" },
                { name: "سمبوسك - جبنة", description: "معجنات مقرمشة محشوة بالجبن الذائب" },
                { name: "لفائف الربيع - دجاج", description: "لفائف مقرمشة بحشوة الدجاج" },
                { name: "لفائف الربيع - لحم", description: "لفائف مقرمشة بحشوة اللحم" },
                { name: "جولاش - لحم", description: "معجنات لذيذة محشوة باللحم المتبل" },
                { name: "جولاش - جبنة", description: "معجنات لذيذة محشوة بالجبن الذائب" }
            ]
        },
        {
            category: "المحشي",
            items: [
                { name: "ممبار", description: "نقانق محشوة بالأرز مع أعشاب وتوابل عطرية" },
                { name: "ورق عنب (نباتي)", description: "أوراق عنب محشوة بالأرز المتبل" },
                { name: "ورق عنب باللحمة", description: "أوراق عنب بالأرز واللحم المفروم" },
                { name: "ورق كرنب محشي", description: "لفائف ملفوف طرية بحشوة لذيذة" },
                { name: "فلفل محشي", description: "فلفل ملون محشو بالأرز واللحم" },
                { name: "كوسة محشية", description: "كوسة طازجة بحشوة متبلة بالأعشاب" },
                { name: "باذنجان محشي", description: "باذنجان مشوي بحشوة لذيذة" },
                { name: "بصل محشي", description: "بصل حلو محشو بخليط الأرز" },
                { name: "بطاطس محشية", description: "بطاطس شهية بحشوة لذيذة" },
                { name: "خرشوف محشي باللحمة", description: "خرشوف طري باللحم والأرز" }
            ]
        },
        {
            category: "السلطات",
            items: [
                { name: "سلطة مصرية", description: "خضار طازجة بالليمون وزيت الزيتون" },
                { name: "سلطة التونة", description: "تونة مع خضار مقرمشة وصلصة" },
                { name: "سلطة الجمبري", description: "جمبري شهي مع خضار طازجة" },
                { name: "سلطة الدجاج", description: "دجاج طري مع خضار ومايونيز" },
                { name: "سلطة الشمندر", description: "شمندر محمص مع صلصة حامضة" },
                { name: "سلطة المعكرونة", description: "سلطة معكرونة كلاسيكية مع خضار" },
                { name: "سلطة الطحينة", description: "خضار طازجة مع صلصة الطحينة الكريمية" },
                { name: "سلطة الزبادي", description: "خيار وأعشاب في زبادي بارد" },
                { name: "بابا غنوج", description: "باذنجان محمص مدخن مع الطحينة" }
            ]
        },
        {
            category: "أطباق الدجاج",
            items: [
                { name: "دجاج بانيه", description: "قطع دجاج مقلية ومغطاة بالبقسماط" },
                { name: "دجاج بيكاتا", description: "دجاج مقلي بصلصة الليمون والزبدة" },
                { name: "رولات الدجاج", description: "صدر دجاج محشو بالديك الرومي المدخن والجبن، مقلي" },
                { name: "دجاج مشوي", description: "دجاج مشوي متبل بشكل مثالي" },
                { name: "دجاج باربيكيو", description: "دجاج طري مع صلصة باربيكيو مدخنة" },
                { name: "دجاج محشي بالفريكة أو الأرز", description: "دجاج كامل محشو بالحبوب العطرية" },
                { name: "طاجن دجاج بالزبدة والثوم والسماق", description: "دجاج مخبوز بزبدة الثوم الغنية" }
            ]
        },
        {
            category: "أطباق اللحوم",
            items: [
                { name: "إسكالوب (لحم مقلي)", description: "شرائح لحم بتلو أو بقري طرية، مقلية" },
                { name: "ستيك مشوي بالزبدة", description: "ستيك عصير مع زبدة الأعشاب" },
                { name: "موزة الخروف", description: "موزة خروف مطهية ببطء، طرية جداً" },
                { name: "طاجن كباب", description: "لحم مفروم متبل مخبوز بالكمال" },
                { name: "كفتة مشوية", description: "كرات لحم متبلة مشوية بنكهة مدخنة" },
                { name: "كفتة بانيه", description: "كرات لحم متبلة ومقلية" },
                { name: "كفتة بالطحينة", description: "كرات لحم في صلصة طحينة كريمية" },
                { name: "كفتة داود باشا", description: "كرات لحم في صلصة طماطم غنية مع دبس الرمان" },
                { name: "كبدة إسكندراني", description: "كبدة على الطريقة الإسكندرانية بالكمون والثوم والفلفل" },
                { name: "كبدة بانيه", description: "شرائح كبدة مقلية ومغطاة بالبقسماط" },
                { name: "كبدة الدجاج (عوانس)", description: "كبدة دجاج مقلية بالتوابل العطرية" }
            ]
        },
        {
            category: "الأسماك وفواكه البحر",
            items: [
                { name: "جمبري بالزبدة", description: "جمبري شهي في صلصة زبدة الثوم الغنية" },
                { name: "جمبري بالكريمة", description: "جمبري كريمي في صلصة بيضاء مخملية" },
                { name: "جمبري بانيه", description: "جمبري مغطى بالبقسماط ومقلي، مقرمش وذهبي" },
                { name: "كاليماري بانيه", description: "حلقات كاليماري مغطاة بالبقسماط، مقلية بالكمال" },
                { name: "كاليماري محشي", description: "كاليماري محشو بالأرز المتبل والأعشاب" },
                { name: "سمك مشوي في الفرن", description: "سمك طازج مشوي مع أعشاب وليمون" },
                { name: "سمك مقلي", description: "سمك مقلي مقرمش مع توابل عطرية" },
                { name: "طاجن سمك", description: "سمك طري مخبوز في صلصة طماطم لذيذة" },
                { name: "سمك مطبوخ بالملح", description: "سمك كامل مطبوخ في قشرة الملح، رطب ولذيذ بشكل لا يصدق" }
            ]
        },
        {
            category: "خضار بالصلصة",
            items: [
                { name: "بامية", description: "بامية طرية في صلصة الطماطم (مع أو بدون لحم)" },
                { name: "فاصوليا خضراء", description: "فاصوليا طازجة في صلصة طماطم لذيذة" },
                { name: "بازلاء", description: "بازلاء حلوة في صلصة عطرية" },
                { name: "كوسة بالصلصة", description: "كوسة طازجة في صلصة طماطم خفيفة" },
                { name: "مسقعة (باذنجان)", description: "باذنجان متعدد الطبقات في صلصة طماطم غنية" },
                { name: "فول", description: "فول كامل في مرق لذيذ" },
                { name: "سلق", description: "خضار طرية بالثوم والليمون" },
                { name: "بطاطس بالصلصة", description: "بطاطس شهية في صلصة متبلة" }
            ]
        },
        {
            category: "أطباق البشاميل",
            items: [
                { name: "مكرونة بشاميل", description: "مكرونة متعددة الطبقات مع بشاميل كريمي ولحم" },
                { name: "كوسة بشاميل", description: "كوسة مقطعة مخبوزة مع صلصة بشاميل" },
                { name: "مسقعة بشاميل", description: "باذنجان متعدد الطبقات مع لحم وبشاميل" }
            ]
        },
        {
            category: "تخصصات الأرز",
            items: [
                { name: "أرز بالكريمة مع اختيار اللحم", description: "أرز كريمي غني مع اختيارك من البروتين" },
                { name: "أرز بفواكه البحر", description: "أرز عطري مع روبيان وسمك وتوابل البحر الأبيض المتوسط" },
                { name: "أرز بالشعيرية", description: "شعيرية ذهبية ممزوجة بالأرز الرقيق" },
                { name: "أرز بريياني", description: "أرز بسمتي عطري مع توابل عطرية" },
                { name: "أرز باللوز واللحم والتوت البري", description: "أرز احتفالي مع طبقات حلوة ومالحة" },
                { name: "مقلوبة", description: "أرز متعدد الطبقات مع الباذنجان واللحم، مقلوب للتقديم" },
                { name: "كبسة (أرز سعودي)", description: "أرز متبل باللحم والطماطم ونكهات الشرق الأوسط" }
            ]
        },
        {
            category: "الحلويات",
            items: [
                { name: "بسبوسة", description: "كعكة السميد المنقوعة في شراب حلو" },
                { name: "كنافة بالقشطة", description: "عجينة فيلو مقرمشة مع حشوة كريمة حلوة" },
                { name: "كنافة بالمكسرات", description: "عجينة فيلو مقرمشة مع مكسرات مشكلة" },
                { name: "مهلبية", description: "حلوى حليب كريمية بماء الورد والفستق" },
                { name: "أرز بالحليب (رز بلبن)", description: "حلوى أرز بالحليب الكريمي مع القرفة" },
                { name: "كريمة القرع بالبشاميل", description: "حلوى قرع حلوة مع البشاميل" },
                { name: "بوشيه - نكهات متنوعة", description: "معجنات لذيذة محشوة بالمكسرات أو الكريمة أو حشوات حلوة أخرى" }
            ]
        }
    ]
};

// Current language
let currentLanguage = 'en';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    setupMobileMenu();
    setupLanguageSwitcher();

    // Initialize menu if on menu page
    if (document.getElementById('menuContainer')) {
        renderMenu();
        setupMenuControls();
    }

    // Setup contact form if on contact page
    if (document.getElementById('contactForm')) {
        setupContactForm();
    }
});

// ========================================
// LANGUAGE FUNCTIONS
// ========================================
function initializeLanguage() {
    // Check localStorage for saved language
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        const translation = element.getAttribute('data-' + lang);
        if (translation) {
            element.textContent = translation;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(element => {
        const placeholder = element.getAttribute('data-placeholder-' + lang);
        if (placeholder) {
            element.placeholder = placeholder;
        }
    });

    // Set RTL for Arabic
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Re-render menu if on menu page
    if (document.getElementById('menuContainer')) {
        renderMenu();
    }
}

function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// ========================================
// MOBILE MENU
// ========================================
function setupMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }
}

// ========================================
// MENU RENDERING
// ========================================
function renderMenu() {
    const container = document.getElementById('menuContainer');
    if (!container) return;

    container.innerHTML = '';
    const menu = menuData[currentLanguage];

    menu.forEach((section, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'menu-section';

        sectionDiv.innerHTML = `
            <button class="menu-section-header" data-section="${index}">
                <h3 class="menu-section-title">${section.category}</h3>
                <div class="menu-section-info">
                    <span class="item-count">${section.items.length} ${currentLanguage === 'en' ? 'items' : currentLanguage === 'fr' ? 'plats' : 'أطباق'}</span>
                    <span class="expand-icon expanded">→</span>
                </div>
            </button>
            <div class="menu-items open">
                <div class="menu-items-content">
                    ${section.items.map(item => `
                        <div class="menu-item">
                            <div class="menu-item-content">
                                <h4 class="menu-item-name">${item.name}</h4>
                                <p class="menu-item-description">${item.description}</p>
                            </div>
                            <button class="add-to-cart-btn" onclick="addToCart('${item.name.replace(/'/g, "\\'")}', '${item.description.replace(/'/g, "\\'")}', '${section.category.replace(/'/g, "\\'")}')">
                                <span>+</span>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.appendChild(sectionDiv);

        // Setup toggle for this section
        const header = sectionDiv.querySelector('.menu-section-header');
        const items = sectionDiv.querySelector('.menu-items');
        const icon = sectionDiv.querySelector('.expand-icon');

        header.addEventListener('click', () => {
            items.classList.toggle('open');
            icon.classList.toggle('expanded');
        });
    });
}

function setupMenuControls() {
    const expandAll = document.getElementById('expandAll');
    const collapseAll = document.getElementById('collapseAll');

    if (expandAll) {
        expandAll.addEventListener('click', () => {
            document.querySelectorAll('.menu-items').forEach(items => {
                items.classList.add('open');
            });
            document.querySelectorAll('.expand-icon').forEach(icon => {
                icon.classList.add('expanded');
            });
        });
    }

    if (collapseAll) {
        collapseAll.addEventListener('click', () => {
            document.querySelectorAll('.menu-items').forEach(items => {
                items.classList.remove('open');
            });
            document.querySelectorAll('.expand-icon').forEach(icon => {
                icon.classList.remove('expanded');
            });
        });
    }
}

// ========================================
// CONTACT FORM
// ========================================
function setupContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // For now, just log to console (you can integrate with a backend service later)
            console.log('Form submission:', data);

            // Show success message
            alert(currentLanguage === 'en'
                ? 'Thank you! We\'ll get back to you soon.'
                : currentLanguage === 'fr'
                ? 'Merci! Nous vous répondrons bientôt.'
                : 'شكراً! سنتواصل معك قريباً.');

            // Reset form
            form.reset();
        });
    }
}

// ========================================
// CART FUNCTIONALITY
// ========================================
let cart = [];

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('egyptiansFood_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('egyptiansFood_cart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(itemName, itemDescription, category) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            description: itemDescription,
            category: category,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showCartNotification();
}

// Remove item from cart
function removeFromCart(itemName) {
    cart = cart.filter(item => item.name !== itemName);
    saveCart();
    updateCartUI();
}

// Update item quantity
function updateQuantity(itemName, change) {
    const item = cart.find(item => item.name === itemName);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemName);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Clear entire cart
function clearCart() {
    const confirmMsg = currentLanguage === 'en'
        ? 'Are you sure you want to clear your entire cart?'
        : currentLanguage === 'fr'
        ? 'Êtes-vous sûr de vouloir vider complètement votre panier?'
        : 'هل أنت متأكد من أنك تريد مسح سلة التسوق بالكامل؟';

    if (confirm(confirmMsg)) {
        cart = [];
        saveCart();
        updateCartUI();
    }
}

// Update cart UI
function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartItems = document.getElementById('cartItems');
    const cartTotalCount = document.getElementById('cartTotalCount');

    if (!cartBadge || !cartItems || !cartTotalCount) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartTotalCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">🍽️</span>
                <p>${currentLanguage === 'en'
                    ? 'Your cart is empty. Add items from the menu!'
                    : currentLanguage === 'fr'
                    ? 'Votre panier est vide. Ajoutez des plats du menu!'
                    : 'سلة التسوق فارغة. أضف أطباق من القائمة!'}</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-header">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.name.replace(/'/g, "\\'")}')">×</button>
                </div>
                <p class="cart-item-description">${item.description}</p>
                <div class="cart-item-quantity">
                    <span class="quantity-label">${currentLanguage === 'en' ? 'Quantity:' : currentLanguage === 'fr' ? 'Quantité:' : 'الكمية:'}</span>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.name.replace(/'/g, "\\'")}', -1)">−</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.name.replace(/'/g, "\\'")}', 1)">+</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Show cart notification
function showCartNotification() {
    const btn = document.getElementById('cartBtn');
    if (btn) {
        btn.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 300);
    }
}

// Setup cart
function setupCart() {
    loadCart();

    const cartBtn = document.getElementById('cartBtn');
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartSidebar = document.getElementById('cartSidebar');
    const cartClear = document.getElementById('cartClear');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            // If cart sidebar doesn't exist (not on menu page), redirect to menu
            if (!cartSidebar || !cartOverlay) {
                window.location.href = 'menu.html';
                return;
            }

            cartSidebar.classList.add('open');
            cartOverlay.classList.add('open');
        });
    }

    if (cartClose) {
        cartClose.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('open');
        });
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
            cartOverlay.classList.remove('open');
        });
    }

    if (cartClear) {
        cartClear.addEventListener('click', clearCart);
    }
}

// Initialize cart on page load
if (document.getElementById('cartBtn')) {
    setupCart();
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    if (revealElements.length === 0) return;

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Initialize scroll reveal on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupScrollReveal);
} else {
    setupScrollReveal();
}

// ========================================
// ANIMATED COUNTERS
// ========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.floor(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

function setupCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length === 0) return;

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                entry.target.dataset.counted = 'true';
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(element => {
        counterObserver.observe(element);
    });
}

// Initialize counters on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupCounters);
} else {
    setupCounters();
}

// ========================================
// PARALLAX EFFECTS
// ========================================
function setupParallax() {
    const parallaxElements = document.querySelectorAll('.hieroglyph, .timeline-icon, .feature-card');
    const storyContent = document.querySelector('.story-content');

    if (parallaxElements.length === 0 && !storyContent) return;

    let ticking = false;
    let mouseX = 0;
    let mouseY = 0;

    function updateParallax() {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed * 0.05);
            element.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    // Mouse tracking for 3D tilt effect on story content
    if (storyContent) {
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth - 0.5;
            mouseY = e.clientY / window.innerHeight - 0.5;

            const rect = storyContent.getBoundingClientRect();
            const isNearContent = (
                e.clientX >= rect.left - 100 &&
                e.clientX <= rect.right + 100 &&
                e.clientY >= rect.top - 100 &&
                e.clientY <= rect.bottom + 100
            );

            if (isNearContent) {
                const tiltX = mouseY * 3;
                const tiltY = -mouseX * 3;
                storyContent.style.transform = `perspective(1500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            } else {
                storyContent.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg)';
            }
        });
    }

    window.addEventListener('scroll', requestTick, { passive: true });
}

// Initialize parallax on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupParallax);
} else {
    setupParallax();
}

// ========================================
// GALLERY FILTERING
// ========================================
function setupGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length === 0 || galleryItems.length === 0) return;

    // Initially show all items
    galleryItems.forEach(item => {
        item.classList.add('visible');
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items with staggered animation
            galleryItems.forEach((item, index) => {
                const category = item.dataset.category;
                const shouldShow = filter === 'all' || category === filter;

                if (shouldShow) {
                    // Stagger the reveal
                    setTimeout(() => {
                        item.classList.remove('hidden');
                        item.classList.add('visible');
                    }, index * 80);
                } else {
                    item.classList.remove('visible');
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// Initialize gallery filters on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupGalleryFilters);
} else {
    setupGalleryFilters();
}

// ========================================
// MOUSE CURSOR EFFECTS
// ========================================
function setupCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dotX = e.clientX;
        dotY = e.clientY;
    });

    function animateCursor() {
        // Smooth follow effect
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .feature-card, .stat-card');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorDot.classList.add('active');
        });

        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorDot.classList.remove('active');
        });
    });
}

// Initialize custom cursor on desktop only
if (window.innerWidth > 768) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupCustomCursor);
    } else {
        setupCustomCursor();
    }
}
