import type { Word } from "./content"
import type { Scene } from "./SceneCanvas"
import { getVocabularyPhoto } from "./VocabularyImagery"

interface VocabularyGroup {
  category: string
  subcategory: string
  art: string
  sentence: string
  entries: string
  partOfSpeech: string
}
const groups: VocabularyGroup[] = []
function group(
  category: string,
  subcategory: string,
  art: string,
  sentence: string,
  entries: string,
  partOfSpeech = "noun",
) {
  groups.push({ category, subcategory, art, sentence, entries, partOfSpeech })
}

group(
  "Food",
  "Fruits",
  "orange",
  "The fruit salad includes {word}.",
  "apple~A crisp fruit with red or green skin;banana~A long fruit with a yellow skin;orange~A round citrus fruit;pear~A sweet fruit with a narrow top;peach~A soft fruit with fuzzy skin;plum~A small fruit with a smooth purple skin;mango~A sweet tropical fruit;pineapple~A tropical fruit with a spiky skin",
)
group(
  "Food",
  "Vegetables",
  "carrot",
  "The soup contains {word}.",
  "carrot~An orange root vegetable;potato~A starchy vegetable that grows underground;onion~A vegetable with strong-smelling layers;tomato~A juicy red fruit often used as a vegetable;cucumber~A long green vegetable;lettuce~A leafy vegetable used in salads;broccoli~A green vegetable with small flower heads;spinach~A vegetable with dark green leaves",
)
group(
  "Food",
  "Meat & seafood",
  "fish",
  "We serve {word} with vegetables.",
  "chicken~Meat from a chicken;beef~Meat from a cow;lamb~Meat from a young sheep;turkey~Meat from a large farm bird;pork~Meat from a pig;salmon~A fish with pink flesh;tuna~A large ocean fish eaten as food;shrimp~A small sea animal with a curved shell",
)
group(
  "Food",
  "Dairy & eggs",
  "milk",
  "We keep the {word} in the refrigerator.",
  "milk~A white drink produced by mammals;cheese~A food made from milk;yogurt~A thick food made with cultured milk;butter~A soft fat made from cream;cream~The thick fatty part of milk;egg~An oval food with a shell;cottage cheese~Soft cheese with small curds;ice cream~A frozen sweet food made with milk",
)
group(
  "Food",
  "Drinks",
  "cup",
  "We offer {word} with the meal.",
  "water~A clear liquid needed for life;tea~A drink made by soaking leaves in hot water;coffee~A drink made from roasted coffee beans;juice~Liquid squeezed from fruit;lemonade~A drink made from lemons and water;smoothie~A thick drink made from blended fruit;hot chocolate~A warm chocolate drink;sparkling water~Water containing bubbles of gas",
)
group(
  "Food",
  "Desserts & baking",
  "bread",
  "We made {word} for the celebration.",
  "cake~A sweet baked food;cookie~A small sweet baked snack;pie~A pastry with a filling;pudding~A soft sweet dessert;chocolate~A sweet food made from cocoa;flour~A powder used to make bread;sugar~A sweet substance used in food;pastry~A baked food made from flour and fat",
)
group(
  "Food",
  "Cooking ingredients",
  "salad",
  "The recipe calls for {word}.",
  "rice~Small grains cooked as food;pasta~Food made from flour and water;salt~A substance used to season food;pepper~A spice used to add flavor;olive oil~Oil made from olives;garlic~A plant with strong-smelling cloves;ginger~A spicy root used in cooking;vinegar~A sour liquid used in cooking",
)
group(
  "Food",
  "Kitchen equipment",
  "kettle",
  "I use the {word} when preparing a meal.",
  "saucepan~A deep pan with a handle;frying pan~A shallow pan for frying food;colander~A bowl with holes for draining food;whisk~A tool for mixing ingredients;grater~A tool for shredding food;cutting board~A surface used for cutting food;measuring cup~A cup used to measure ingredients;spatula~A flat tool for lifting or spreading food",
)

group(
  "Home",
  "Rooms",
  "house",
  "The {word} is clean and bright.",
  "kitchen~A room for preparing food;bedroom~A room for sleeping;bathroom~A room for washing;living room~A room for relaxing together;dining room~A room for eating meals;hallway~A passage connecting rooms;basement~A room below ground level;attic~A space just below a roof",
)
group(
  "Home",
  "Furniture",
  "sofa",
  "We put the {word} near the window.",
  "sofa~A long comfortable seat;armchair~A comfortable chair with arms;table~Furniture with a flat raised surface;chair~A seat for one person;desk~A table used for work;bed~Furniture used for sleeping;wardrobe~A cupboard for clothes;bookshelf~Furniture for storing books",
)
group(
  "Home",
  "Appliances",
  "refrigerator",
  "We check the {word} before using it.",
  "refrigerator~An appliance that keeps food cold;freezer~An appliance that freezes food;oven~An enclosed appliance for baking;microwave~An appliance that heats food quickly;dishwasher~A machine that washes dishes;washing machine~A machine that washes clothes;dryer~A machine that dries clothes;vacuum cleaner~A machine that collects dust",
)
group(
  "Home",
  "Household objects",
  "lamp",
  "The {word} is in our living room.",
  "lamp~An object that provides light;clock~An object that shows time;mirror~A surface that reflects an image;curtain~Fabric used to cover a window;carpet~A soft covering for a floor;cushion~A soft pad used on a seat;vase~A container for flowers;picture frame~A border that holds a picture",
)
group(
  "Home",
  "Cleaning",
  "broom",
  "I put the {word} in the cleaning cupboard.",
  "broom~A tool for sweeping;dustpan~A small pan for collecting swept dirt;mop~A tool for washing floors;bucket~A container with a handle;sponge~A soft object used for cleaning;detergent~A cleaning substance;bleach~A strong cleaning and whitening liquid;rubber gloves~Protective hand coverings for cleaning",
)
group(
  "Home",
  "Repairs & tools",
  "hammer",
  "The repair worker uses the {word}.",
  "hammer~A tool for hitting nails;screwdriver~A tool for turning screws;wrench~A tool for gripping nuts and bolts;pliers~A tool for gripping small objects;drill~A tool for making holes;ladder~Equipment for climbing higher;paintbrush~A tool for applying paint;tape measure~A flexible strip for measuring length",
)
group(
  "Home",
  "Bedding & laundry",
  "bed",
  "We keep the {word} in the bedroom.",
  "pillow~A soft support for your head;blanket~A warm covering for a bed;sheet~A thin covering for a mattress;duvet~A thick quilt used on a bed;mattress~A padded surface for sleeping;laundry basket~A container for clothes that need washing;hanger~An object for hanging clothes;ironing board~A padded board for ironing clothes",
)
group(
  "Home",
  "Doors & outside spaces",
  "door",
  "We inspect the {word} outside the house.",
  "front door~The main entrance to a home;doorbell~A button that rings at an entrance;porch~A covered area at an entrance;balcony~A raised outdoor platform;garage~A building for keeping a car;fence~A barrier around land;gate~An opening in a fence;roof~The covering on top of a building",
)

group(
  "People",
  "Stages of life",
  "child",
  "I met a {word} at the community event.",
  "baby~A very young child;toddler~A child learning to walk;child~A young person;teenager~A person aged thirteen to nineteen;adult~A fully grown person;senior~An older adult;newborn~A baby recently born;youngster~A young person",
)
group(
  "People",
  "Personality",
  "friendly",
  "My friend is {word}.",
  "friendly~Kind and pleasant toward others;patient~Able to wait calmly;kind~Caring about other people;honest~Truthful and fair;generous~Willing to give and share;confident~Sure of your own abilities;shy~Nervous about meeting people;creative~Good at making new ideas",
  "adjective",
)
group(
  "People",
  "Feelings",
  "happy",
  "Today I feel {word}.",
  "happy~Feeling pleased;sad~Feeling unhappy;angry~Feeling strong displeasure;excited~Feeling eager and interested;worried~Feeling concerned about something;calm~Feeling peaceful;tired~Needing rest;proud~Feeling pleased about an achievement",
  "adjective",
)
group(
  "People",
  "Appearance",
  "eye",
  "Our drawing lesson explores {word}.",
  "hair~Strands growing on the head;beard~Hair growing on the chin;mustache~Hair growing above the upper lip;freckles~Small brown spots on skin;wrinkles~Small lines in skin;ponytail~Hair tied together behind the head;braid~Hair woven into connected strands;hairstyle~The way hair is arranged",
)
group(
  "People",
  "Describing people",
  "family",
  "The person in the story is {word}.",
  "tall~Above average height;short~Below average height;young~Early in life;elderly~Advanced in age;polite~Showing good manners;helpful~Willing to assist others;quiet~Making little noise;lively~Full of energy",
  "adjective",
)
group(
  "People",
  "Relationships",
  "friend",
  "We welcome each {word} to our group.",
  "friend~Someone you like and trust;neighbor~Someone who lives near you;classmate~Someone in the same class;colleague~Someone you work with;guest~Someone invited to visit;visitor~Someone who comes to a place;partner~Someone who shares an activity;teammate~Someone on the same team",
)
group(
  "People",
  "Social roles",
  "teacher",
  "The {word} joins our meeting.",
  "volunteer~A person who helps without being paid;leader~A person who guides a group;member~A person belonging to a group;customer~A person who buys goods;host~A person who welcomes guests;stranger~A person you do not know;mentor~An experienced person who gives guidance;resident~A person who lives in a place",
)
group(
  "People",
  "Personal information",
  "report",
  "The form asks for my {word}.",
  "first name~A personal name given at birth;last name~A family name;age~The number of years someone has lived;birthday~The anniversary of a birth;address~Details of where someone lives;nationality~Membership of a nation;occupation~A person's job;phone number~Numbers used to contact a telephone",
)

group(
  "Family",
  "Close relatives",
  "family",
  "My {word} is visiting today.",
  "mother~A female parent;father~A male parent;parent~A person who raises a child;son~A male child of a parent;daughter~A female child of a parent;brother~A male sibling;sister~A female sibling;sibling~A brother or sister",
)
group(
  "Family",
  "Extended relatives",
  "family",
  "I enjoy talking with my {word}.",
  "grandmother~The mother of a parent;grandfather~The father of a parent;grandparent~The parent of a parent;grandson~A son's or daughter's son;granddaughter~A son's or daughter's daughter;aunt~A parent's sister or a relative by marriage;uncle~A parent's brother or a relative by marriage;cousin~A child of an aunt or uncle",
)
group(
  "Family",
  "Marriage & partnerships",
  "friendly",
  "Our family story includes a {word}.",
  "husband~A married male partner;wife~A married female partner;spouse~A married partner;fiancé~A man engaged to be married;fiancée~A woman engaged to be married;partner~A person sharing a close relationship;newlywed~A person recently married;couple~Two people in a relationship",
)
group(
  "Family",
  "Families by marriage",
  "family",
  "My {word} came to the family meal.",
  "mother-in-law~The mother of a spouse;father-in-law~The father of a spouse;sister-in-law~A sister related by marriage;brother-in-law~A brother related by marriage;daughter-in-law~The wife of a person's child;son-in-law~The husband of a person's child;stepmother~A parent's wife who is not a birth mother;stepfather~A parent's husband who is not a birth father",
)
group(
  "Family",
  "Family relationships",
  "child",
  "We learn about each {word} in the family story.",
  "stepbrother~A son of a stepparent;stepsister~A daughter of a stepparent;half brother~A brother with one shared parent;half sister~A sister with one shared parent;guardian~A person responsible for a child's care;foster parent~A person providing temporary family care;godparent~A person chosen to support a child's upbringing;only child~A child with no siblings",
)
group(
  "Family",
  "Family occasions",
  "calendar",
  "We are planning the {word} together.",
  "wedding~A ceremony celebrating a marriage;anniversary~A date remembering an important event;birthday party~A celebration of someone's birth date;family reunion~A gathering of relatives;graduation~An event celebrating completed studies;engagement~An agreement to marry;family dinner~A meal shared by relatives;baby shower~A celebration before a baby's birth",
)
group(
  "Family",
  "Growing up",
  "baby",
  "Our family discusses {word} together.",
  "childhood~The time when someone is a child;adolescence~The period between childhood and adulthood;adulthood~The time when someone is an adult;generation~People born at about the same time;upbringing~The way a child is raised;family history~Stories and events from a family's past;tradition~A custom passed between generations;inheritance~Property received from someone who has died",
)
group(
  "Family",
  "Family life",
  "house",
  "We make time for {word} at home.",
  "caregiving~Looking after someone who needs help;childcare~Looking after children;housework~Work done to keep a home clean;storytelling~Sharing a story aloud;playtime~Time spent playing;bedtime~The usual time for going to bed;homework~School work done outside school;family time~Time spent with relatives",
)

group(
  "School",
  "School life",
  "school",
  "We discuss the {word} at school.",
  "student~A person who is learning;teacher~A person who teaches;principal~The leader of a school;class~A group learning together;lesson~A period of teaching;term~One part of an academic year;timetable~A schedule of lessons;assembly~A gathering of students and staff",
)
group(
  "School",
  "School subjects",
  "book",
  "We study {word} at school.",
  "mathematics~The study of numbers and patterns;science~The study of the natural world;history~The study of the past;geography~The study of places and environments;biology~The study of living things;chemistry~The study of substances;physics~The study of matter and energy;literature~The study of written works",
)
group(
  "School",
  "Arts & languages",
  "drawing",
  "We have a lesson in {word} today.",
  "art~Creative work such as drawing;music~Sounds organized into rhythm and melody;drama~Acting and performing stories;English~The English language;French~The French language;Spanish~The Spanish language;physical education~Lessons involving exercise and sports;computer studies~Lessons about computers and computing",
)
group(
  "School",
  "School places",
  "library",
  "Our class visits the {word}.",
  "classroom~A room for teaching;library~A place for reading and borrowing books;laboratory~A room for experiments;gymnasium~A room for indoor exercise;playground~An outdoor area for playing;cafeteria~A place where meals are served;auditorium~A hall with seats for an audience;staff room~A room used by teachers",
)
group(
  "School",
  "School supplies",
  "pencil",
  "I bring the {word} to school.",
  "notebook~A book for writing notes;pencil~A tool with a graphite core;pen~A tool that writes with ink;eraser~An object for removing pencil marks;ruler~A tool for drawing and measuring lines;backpack~A bag carried on the back;calculator~A device for working with numbers;dictionary~A book or tool that explains words",
)
group(
  "School",
  "Learning & assessment",
  "exam",
  "The teacher explains the {word}.",
  "exam~A formal test of knowledge;quiz~A short test;assignment~A task set for a learner;project~A planned piece of work;presentation~Information shared with an audience;grade~A mark showing performance;feedback~Advice about work or performance;revision~Reviewing material before a test",
)
group(
  "School",
  "University",
  "university",
  "We learn about the {word} at university.",
  "university~An institution of higher education;college~An institution offering further education;campus~The buildings and grounds of an institution;lecture~A talk given to teach a subject;seminar~A small discussion-based class;professor~A senior university teacher;degree~A qualification from higher education;scholarship~Money awarded to support study",
)
group(
  "School",
  "Study skills",
  "reading",
  "I practice {word} during study time.",
  "reading~Understanding written words;writing~Producing written words;listening~Paying attention to sounds;speaking~Using the voice to communicate;note-taking~Writing down important points;research~Finding and studying information;problem-solving~Finding answers to difficulties;teamwork~Working together toward a goal",
)

group(
  "Classroom",
  "Writing tools",
  "pencil",
  "I put the {word} on my desk.",
  "pencil~A tool used to write with graphite;pen~A tool used to write with ink;marker~A pen with a broad tip;highlighter~A pen for marking important text;chalk~A soft stick for writing on a board;crayon~A colored wax stick;eraser~An object that removes pencil marks;sharpener~A tool that makes a pencil point sharp",
)
group(
  "Classroom",
  "Paper & books",
  "book",
  "We use the {word} in this lesson.",
  "textbook~A book used to teach a subject;workbook~A book containing practice tasks;notebook~A book for notes;worksheet~A page containing learning tasks;folder~A cover for holding papers;binder~A cover with rings for holding paper;index card~A small card for notes;graph paper~Paper printed with small squares",
)
group(
  "Classroom",
  "Furniture",
  "desk",
  "The {word} is beside the wall.",
  "desk~A table for writing or studying;chair~A seat for one person;whiteboard~A smooth board for writing with markers;blackboard~A dark board for writing with chalk;bookshelf~Furniture with shelves for books;cupboard~Furniture for storing materials;noticeboard~A board for displaying information;teacher's desk~A desk used by the teacher",
)
group(
  "Classroom",
  "Technology",
  "laptop",
  "We use the {word} during class.",
  "computer~An electronic device for processing information;tablet~A flat touchscreen computer;projector~A device that displays an image on a surface;screen~A surface showing images;keyboard~Keys used for entering information;mouse~A device used to control a pointer;headphones~Equipment worn over the ears to hear sound;speaker~A device that produces sound",
)
group(
  "Classroom",
  "Measuring & making",
  "ruler",
  "I need the {word} for my project.",
  "ruler~A tool for measuring straight lengths;protractor~A tool for measuring angles;compass~A tool for drawing circles;scissors~A tool for cutting materials;glue~A sticky substance for joining things;tape~A narrow strip used for joining things;stapler~A tool for attaching papers;hole punch~A tool for making holes in paper",
)
group(
  "Classroom",
  "Lesson language",
  "report",
  "The teacher explains the {word} clearly.",
  "question~A request for information;answer~A response to a question;instruction~A direction explaining what to do;example~Something showing how an idea works;paragraph~A group of related sentences;sentence~A group of words expressing a thought;vocabulary~Words used in a language;pronunciation~The way a word is spoken",
)
group(
  "Classroom",
  "Class activities",
  "meeting",
  "Today's lesson includes {word}.",
  "discussion~Talking about a subject;group work~A task completed with others;pair work~A task completed by two learners;role-play~Acting out a situation;experiment~A test used to discover something;demonstration~Showing how something is done;brainstorming~Sharing ideas freely;revision~Reviewing previously learned material",
)
group(
  "Classroom",
  "Everyday classroom items",
  "backpack",
  "The {word} is in the classroom.",
  "clock~An object showing the time;calendar~A chart showing dates;map~A picture showing places;poster~A large printed display;trash bin~A container for waste;water bottle~A container for drinking water;pencil case~A small bag for writing tools;name tag~A label showing a person's name",
)

group(
  "Clothing",
  "Everyday clothes",
  "shirt",
  "I chose the {word} for today.",
  "shirt~Clothing for the upper body;T-shirt~A casual top with short sleeves;blouse~A light top worn on the upper body;sweater~A warm knitted top;cardigan~A knitted top that opens in front;jeans~Trousers made from denim;trousers~Clothing covering both legs;shorts~Short clothing covering the legs",
)
group(
  "Clothing",
  "Outerwear",
  "jacket",
  "I hang the {word} by the door.",
  "jacket~A short outer covering;coat~A long outer covering;raincoat~A waterproof coat;hoodie~A casual top with a hood;vest~A sleeveless piece of clothing;blazer~A tailored jacket;poncho~A loose covering with a head opening;windbreaker~A lightweight jacket against wind",
)
group(
  "Clothing",
  "Shoes",
  "shoe",
  "I clean the {word} before going out.",
  "shoe~A covering for the foot;sneaker~A soft shoe for everyday use;boot~Footwear covering the ankle or higher;sandal~Footwear with an open design;slipper~Soft footwear worn indoors;loafer~A low shoe without laces;heel~A shoe with a raised back support;running shoe~A shoe designed for running",
)
group(
  "Clothing",
  "Accessories",
  "hat",
  "The {word} matches my outfit.",
  "hat~A covering for the head;cap~A soft hat with a front brim;scarf~Fabric worn around the neck;glove~A covering for the hand;belt~A strip worn around the waist;tie~A long narrow neck accessory;watch~An object worn to show time;sunglasses~Dark glasses that protect eyes from sunlight",
)
group(
  "Clothing",
  "Special outfits",
  "family",
  "The shop has a new {word}.",
  "dress~One-piece clothing covering the body;skirt~Clothing hanging from the waist;suit~A matching jacket and trousers or skirt;uniform~Clothing worn by members of a group;swimsuit~Clothing worn for swimming;pajamas~Clothing worn for sleeping;robe~A loose long covering;apron~A protective covering worn over clothes",
)
group(
  "Clothing",
  "Parts of clothes",
  "shirt",
  "The tailor checks the {word}.",
  "sleeve~The part covering an arm;collar~The part around the neck;cuff~The end of a sleeve;pocket~A small attached storage space;button~A small fastener;zipper~A fastener with interlocking teeth;seam~A line where fabric is joined;hem~The folded edge of clothing",
)
group(
  "Clothing",
  "Fabrics",
  "towel",
  "This fabric is made from {word}.",
  "cotton~A soft natural fiber;wool~Fiber from sheep;silk~A fine fiber produced by silkworms;linen~Fiber made from flax;denim~A strong cotton fabric;leather~Material made from animal skin;polyester~A manufactured fiber;velvet~A fabric with a soft raised surface",
)
group(
  "Clothing",
  "Clothing descriptions",
  "shirt",
  "This shirt is {word}.",
  "striped~Having lines of different colors;plain~Without a pattern;checked~Having a pattern of squares;loose~Not fitting tightly;tight~Fitting closely;casual~Suitable for informal occasions;formal~Suitable for official occasions;waterproof~Not allowing water through",
  "adjective",
)

group(
  "Health",
  "Body",
  "hand",
  "The doctor checks my {word}.",
  "head~The upper part of the body;neck~The part connecting head and body;shoulder~The joint at the top of an arm;arm~A limb from shoulder to hand;elbow~The joint in the middle of an arm;wrist~The joint between hand and arm;hand~The body part with fingers;finger~One of the digits on a hand",
)
group(
  "Health",
  "More body parts",
  "eye",
  "I point to my {word} in the diagram.",
  "eye~The organ used for seeing;ear~The organ used for hearing;nose~The part used for smelling;mouth~The opening used for eating and speaking;tooth~A hard structure used for biting;tongue~The organ inside the mouth;knee~The joint in the middle of a leg;ankle~The joint between foot and leg",
)
group(
  "Health",
  "Care professionals",
  "doctor",
  "The {word} explains my treatment.",
  "doctor~A person trained to treat illness;nurse~A person trained to provide medical care;dentist~A person who treats teeth;pharmacist~A person who prepares and supplies medicines;surgeon~A doctor who performs operations;therapist~A professional providing treatment;paramedic~A professional providing emergency medical care;optician~A person who fits glasses",
)
group(
  "Health",
  "Symptoms",
  "cough",
  "I tell the nurse about my {word}.",
  "fever~An unusually high body temperature;cough~A sudden release of air from the throat;headache~Pain in the head;stomachache~Pain in the stomach;sore throat~Pain or irritation in the throat;runny nose~A nose releasing extra fluid;dizziness~A feeling of losing balance;fatigue~Strong tiredness",
)
group(
  "Health",
  "Medicine & care",
  "medicine",
  "The pharmacist explains how to use the {word}.",
  "medicine~A substance used to treat illness;tablet~A small compressed dose of medicine;capsule~Medicine inside a small container;ointment~A thick substance put on skin;bandage~Material used to cover an injury;thermometer~An instrument for measuring temperature;inhaler~A device for breathing in medicine;eye drops~Liquid medicine placed in the eyes",
)
group(
  "Health",
  "Doctor's office",
  "hospital",
  "The doctor explains the {word}.",
  "appointment~An arranged time to meet someone;checkup~A routine medical examination;prescription~Instructions for obtaining medicine;diagnosis~Identification of a condition;treatment~Care given for a health problem;vaccination~Giving a vaccine to prevent illness;blood test~An examination of a blood sample;X-ray~An image of the inside of the body",
)
group(
  "Health",
  "Healthy habits",
  "exercise",
  "I make time for {word} each day.",
  "exercise~Physical activity for health;walking~Moving on foot;stretching~Extending the muscles;hydration~Taking in enough water;sleep~A period of rest with reduced awareness;relaxation~Resting without tension;meditation~Calm focused attention;handwashing~Cleaning hands with water and soap",
)
group(
  "Health",
  "Safety & recovery",
  "bandage",
  "The first-aid lesson covers {word}.",
  "first aid~Immediate help for injury or illness;recovery~Getting better after an illness;allergy~A reaction to a normally harmless substance;infection~Illness caused by germs;injury~Damage to the body;sprain~An injury to a joint's ligaments;bruise~A dark mark caused by damage under skin;emergency~A serious situation requiring immediate help",
)

group(
  "Jobs",
  "Education & care",
  "teacher",
  "The {word} helps people every day.",
  "teacher~A person who teaches;professor~A senior university teacher;tutor~A person giving individual instruction;doctor~A person trained to treat illness;nurse~A person providing medical care;dentist~A person treating teeth;therapist~A person providing specialized treatment;librarian~A person managing a library",
)
group(
  "Jobs",
  "Food & services",
  "chef",
  "The {word} is working today.",
  "chef~A professional cook;baker~A person who makes bread and cakes;waiter~A person who serves meals;barista~A person who prepares coffee;cashier~A person who handles customer payments;receptionist~A person who welcomes visitors;hairdresser~A person who cuts and styles hair;cleaner~A person who cleans places",
)
group(
  "Jobs",
  "Skilled trades",
  "hammer",
  "The {word} checks the tools.",
  "carpenter~A person who makes things from wood;plumber~A person who repairs water systems;electrician~A person who works on electrical systems;mechanic~A person who repairs machines;builder~A person who constructs buildings;painter~A person who paints surfaces;welder~A person who joins metal;gardener~A person who cares for gardens",
)
group(
  "Jobs",
  "Office professions",
  "office",
  "The {word} attends our meeting.",
  "accountant~A person who manages financial records;manager~A person who organizes work;secretary~A person who handles office tasks;lawyer~A person who advises on law;engineer~A person who designs technical systems;architect~A person who designs buildings;designer~A person who plans how things look;programmer~A person who writes computer code",
)
group(
  "Jobs",
  "Public & outdoor work",
  "farmer",
  "The {word} starts work early.",
  "farmer~A person who grows crops or raises animals;firefighter~A person who puts out fires;police officer~A person who enforces the law;pilot~A person who flies aircraft;driver~A person who drives a vehicle;postal worker~A person who handles mail;delivery worker~A person who transports orders;park ranger~A person who protects a park",
)
group(
  "Jobs",
  "Creative professions",
  "camera",
  "The {word} shares a new project.",
  "artist~A person who creates art;musician~A person who performs music;actor~A person who performs in plays or films;writer~A person who writes professionally;journalist~A person who reports news;photographer~A person who takes photographs;translator~A person who changes text into another language;interpreter~A person who translates spoken language",
)
group(
  "Jobs",
  "Workplace",
  "meeting",
  "We discuss the {word} at work.",
  "office~A place for administrative work;workshop~A place for making or repairing things;factory~A place where goods are manufactured;meeting~A gathering for discussion;shift~A scheduled period of work;deadline~The latest time to complete a task;salary~Regular payment for work;contract~A formal agreement",
)
group(
  "Jobs",
  "Looking for work",
  "report",
  "The career adviser explains the {word}.",
  "résumé~A summary of experience and education;application~A formal request for a position;interview~A meeting to assess an applicant;vacancy~A job that needs to be filled;qualification~Evidence of learning or ability;experience~Knowledge gained by doing things;reference~A person or statement supporting an applicant;training~Learning skills needed for a job",
)

group(
  "Transportation",
  "Road vehicles",
  "car",
  "We saw a {word} on the road.",
  "car~A road vehicle for passengers;bus~A large passenger vehicle;truck~A vehicle for carrying goods;van~A covered vehicle for people or goods;taxi~A car hired with a driver;motorcycle~A motor vehicle with two wheels;bicycle~A two-wheeled vehicle powered by pedals;scooter~A small two-wheeled vehicle",
)
group(
  "Transportation",
  "Rail & water",
  "train",
  "The guide explains how the {word} travels.",
  "train~Connected vehicles running on rails;tram~A passenger vehicle running on street rails;subway~An urban railway often underground;ferry~A boat transporting people or vehicles;boat~A small vessel traveling on water;ship~A large vessel traveling on water;canoe~A narrow boat moved with a paddle;sailboat~A boat powered by wind",
)
group(
  "Transportation",
  "Vehicle parts",
  "car",
  "The mechanic checks the {word}.",
  "wheel~A round part that turns;tire~A rubber covering around a wheel;engine~A machine producing power;brake~A device for slowing movement;steering wheel~A wheel used to control direction;windshield~The front glass of a vehicle;headlight~A light at the front of a vehicle;seat belt~A safety strap worn in a vehicle",
)
group(
  "Transportation",
  "Public transport",
  "station",
  "We check the {word} before traveling.",
  "bus stop~A place where buses pick up passengers;station~A place where trains stop;platform~An area beside railway tracks;ticket~Proof of payment for travel;fare~The price of a journey;route~The way a vehicle travels;timetable~A schedule of departures;passenger~A person traveling in a vehicle",
)
group(
  "Transportation",
  "Roads",
  "traffic",
  "The driving lesson explains the {word}.",
  "road~A route for vehicles;highway~A major road for fast travel;intersection~A place where roads meet;roundabout~A circular road junction;crosswalk~A marked place for pedestrians;sidewalk~A path beside a road;bridge~A structure crossing an obstacle;tunnel~An underground passage",
)
group(
  "Transportation",
  "Traffic & safety",
  "traffic",
  "We noticed the {word} near the crossing.",
  "traffic light~A signal controlling traffic;stop sign~A sign telling drivers to stop;speed limit~The maximum permitted speed;traffic jam~A line of slowly moving vehicles;parking meter~A device for paying to park;cycle lane~A road area reserved for bicycles;helmet~Protective equipment worn on the head;pedestrian~A person traveling on foot",
)
group(
  "Transportation",
  "At the airport",
  "airplane",
  "The airport staff explain the {word}.",
  "airplane~A powered aircraft with wings;helicopter~An aircraft with rotating blades;airport~A place where aircraft arrive and depart;runway~A surface for aircraft takeoff and landing;terminal~A building serving air travelers;boarding pass~A document allowing entry to a flight;baggage~Bags carried while traveling;flight~A journey by air",
)
group(
  "Transportation",
  "Travel services",
  "map",
  "We arrange the {word} before the journey.",
  "car rental~Hiring a car for a period;reservation~An arrangement to keep a place available;transfer~Changing between transport services;departure~The act of leaving;arrival~The act of reaching a destination;commute~A regular journey to work or school;delivery~Transporting goods to a receiver;fuel~A substance used to provide energy",
)

group(
  "Places",
  "Local shops",
  "store",
  "We visit the {word} this afternoon.",
  "supermarket~A large shop selling everyday goods;bakery~A shop selling bread and cakes;pharmacy~A shop supplying medicines;bookstore~A shop selling books;butcher shop~A shop selling meat;florist~A shop selling flowers;convenience store~A small shop selling common goods;shopping mall~A building containing many shops",
)
group(
  "Places",
  "Public services",
  "hospital",
  "The {word} is near the town center.",
  "hospital~A place for medical treatment;clinic~A place for outpatient healthcare;post office~A place for sending and collecting mail;police station~A building used by police;fire station~A building housing firefighters;town hall~A building used by local government;courthouse~A building where legal cases are heard;embassy~An office representing a country abroad",
)
group(
  "Places",
  "Learning & culture",
  "library",
  "Our group visits the {word}.",
  "school~A place where students learn;university~A place for higher education;library~A place for borrowing books;museum~A place displaying important objects;art gallery~A place displaying art;theater~A place for live performances;cinema~A place for watching films;concert hall~A place for musical performances",
)
group(
  "Places",
  "Food & accommodation",
  "restaurant",
  "We meet outside the {word}.",
  "restaurant~A business serving prepared meals;café~A small place serving drinks and light meals;hotel~A place offering paid accommodation;hostel~An inexpensive shared lodging place;guesthouse~A small place offering accommodation;campsite~An area where tents can be set up;food court~An area with several food sellers;canteen~A place serving meals at an institution",
)
group(
  "Places",
  "Outdoor recreation",
  "park",
  "Families gather at the {word}.",
  "park~A public green area;playground~An area with equipment for children;beach~Land beside a sea or lake;garden~Land used to grow plants;stadium~A large sports venue;sports center~A building for sports activities;swimming pool~A place for swimming;zoo~A place where animals are kept for visitors",
)
group(
  "Places",
  "Town spaces",
  "house",
  "The map shows the {word}.",
  "street~A road within a town;avenue~A wide town road;square~An open public space;neighborhood~A local area where people live;suburb~A residential area near a city;city center~The central part of a city;residential area~An area mainly containing homes;industrial area~An area mainly containing factories",
)
group(
  "Places",
  "Transport places",
  "station",
  "We wait at the {word}.",
  "airport~A place serving aircraft;railway station~A place serving trains;bus station~A place where many buses stop;harbor~A sheltered place for ships;port~A place handling ships and cargo;parking lot~An area for parking vehicles;gas station~A place selling vehicle fuel;bus terminal~A major starting point for bus routes",
)
group(
  "Places",
  "Geographical places",
  "map",
  "Our geography lesson describes the {word}.",
  "city~A large urban settlement;town~A settlement smaller than a city;village~A small settlement;countryside~Land outside towns and cities;farm~Land used for crops or animals;island~Land surrounded by water;coast~Land beside the sea;valley~Low land between hills",
)

group(
  "Nature",
  "Weather",
  "rain",
  "Our weather lesson explains {word}.",
  "rain~Water falling from clouds;snow~Frozen water falling as flakes;wind~Moving air;fog~A cloud close to the ground;hail~Small pieces of ice falling from clouds;thunder~A loud sound following lightning;lightning~A bright electrical flash;frost~A thin covering of ice crystals",
)
group(
  "Nature",
  "Sky & seasons",
  "sun",
  "We observe the {word} from the window.",
  "sun~The star that lights Earth;moon~Earth's natural satellite;star~A glowing body far away in space;cloud~Visible water droplets in the sky;rainbow~An arc of colors in the sky;sunrise~The time the sun appears;sunset~The time the sun disappears;horizon~The apparent line where sky meets land",
)
group(
  "Nature",
  "Landscapes",
  "mountain",
  "Our journey takes us past the {word}.",
  "mountain~A high natural area of land;hill~A raised area lower than a mountain;valley~Low land between hills;forest~A large area covered with trees;desert~A very dry area of land;plain~A large flat area;cliff~A steep rock face;cave~A natural space inside rock",
)
group(
  "Nature",
  "Water & coast",
  "river",
  "The guide tells us about the {word}.",
  "river~A large flowing stream;stream~A small flowing body of water;lake~A large inland body of water;pond~A small inland body of water;waterfall~Water flowing over a steep drop;ocean~A very large body of salt water;bay~A curved area of sea surrounded partly by land;wetland~Land covered or soaked with water",
)
group(
  "Nature",
  "Plants",
  "leaf",
  "We examine the {word} during our nature walk.",
  "tree~A tall plant with a woody trunk;flower~The colorful reproductive part of a plant;leaf~A flat green part of a plant;root~A plant part that absorbs water from soil;stem~The part supporting leaves and flowers;branch~A part growing out from a tree trunk;seed~A small structure that can grow into a plant;bud~A young unopened flower or leaf",
)
group(
  "Nature",
  "Garden & soil",
  "flower",
  "We learn about {word} in the garden.",
  "grass~Low green plants covering the ground;shrub~A woody plant smaller than a tree;hedge~A row of closely planted shrubs;moss~A small plant forming a soft green covering;soil~The material in which plants grow;compost~Decayed material used to improve soil;pollen~Fine powder produced by flowers;nectar~A sweet liquid produced by flowers",
)
group(
  "Nature",
  "Environment",
  "recycling",
  "Our class explores {word} and its effects.",
  "recycling~Turning waste into reusable material;pollution~Harmful substances entering the environment;conservation~Protecting natural resources;habitat~The place where a living thing lives;ecosystem~Living things and their environment;climate~Typical weather over a long period;biodiversity~The variety of living things;renewable energy~Energy from sources naturally replenished",
)
group(
  "Nature",
  "Earth & materials",
  "mountain",
  "The display contains {word} from the region.",
  "rock~A solid natural mineral material;stone~A small piece of rock;sand~Small loose grains of rock;clay~Fine earth that becomes soft when wet;pebble~A small smooth stone;mineral~A natural substance found in Earth;crystal~A solid with a regular geometric structure;fossil~A preserved trace of ancient life",
)

group(
  "Animals",
  "Pets",
  "dog",
  "We learn how to care for a {word}.",
  "dog~A common pet that often barks;cat~A common pet with whiskers;rabbit~A small animal with long ears;hamster~A small rodent often kept as a pet;guinea pig~A small pet rodent;goldfish~A small freshwater fish;parrot~A bird that can imitate sounds;budgie~A small pet parakeet",
)
group(
  "Animals",
  "Farm animals",
  "cow",
  "We saw a {word} on the farm.",
  "cow~A large farm animal raised for milk or meat;sheep~An animal with a woolly coat;goat~A farm animal with horns;pig~A farm animal with a broad snout;horse~A large animal used for riding;donkey~An animal related to a horse;chicken~A farm bird raised for eggs or meat;duck~A bird with a broad bill and webbed feet",
)
group(
  "Animals",
  "Wild mammals",
  "rabbit",
  "The wildlife guide describes the {word}.",
  "lion~A large wild cat with a mane;tiger~A large striped wild cat;elephant~A large animal with a trunk;giraffe~A tall animal with a long neck;zebra~An animal with black and white stripes;bear~A large animal with thick fur;wolf~A wild animal related to dogs;fox~A wild animal with a bushy tail",
)
group(
  "Animals",
  "Small wild animals",
  "rabbit",
  "The camera recorded a {word} in the woods.",
  "squirrel~A small animal with a bushy tail;hedgehog~A small animal covered with spines;mouse~A small rodent with a long tail;rat~A rodent larger than a mouse;bat~A mammal that can fly;deer~A grazing animal often with antlers;beaver~An animal that builds dams;otter~An animal adapted to living near water",
)
group(
  "Animals",
  "Birds",
  "bird",
  "We spotted a {word} near the water.",
  "eagle~A large bird of prey;owl~A bird of prey often active at night;sparrow~A small common bird;pigeon~A common bird found in towns;peacock~A bird with a colorful spreading tail;penguin~A flightless seabird;flamingo~A long-legged pink bird;swan~A large waterbird with a long neck",
)
group(
  "Animals",
  "Sea animals",
  "fish",
  "The aquarium has information about the {word}.",
  "dolphin~An intelligent sea mammal;whale~A very large sea mammal;shark~A fish with a cartilaginous skeleton;octopus~A sea animal with eight arms;jellyfish~A soft sea animal with tentacles;crab~A shellfish with claws;lobster~A large shellfish with a long body;seahorse~A small fish with a horse-shaped head",
)
group(
  "Animals",
  "Reptiles & amphibians",
  "fish",
  "Our nature book describes the {word}.",
  "snake~A long reptile without legs;lizard~A small reptile usually with four legs;crocodile~A large reptile with strong jaws;alligator~A large reptile with a broad snout;turtle~A reptile with a shell;tortoise~A land-dwelling shelled reptile;frog~An amphibian with strong hind legs;toad~An amphibian usually with rough skin",
)
group(
  "Animals",
  "Insects & small creatures",
  "butterfly",
  "We found a {word} in the garden.",
  "butterfly~An insect with broad colorful wings;bee~An insect that collects nectar;ant~A small insect living in colonies;beetle~An insect with hard wing covers;ladybug~A small spotted beetle;grasshopper~An insect with strong jumping legs;dragonfly~An insect with a long body and large wings;spider~An eight-legged animal that may spin webs",
)

group(
  "Sports",
  "Team sports",
  "ball",
  "We play {word} after school.",
  "football~A team game played with a ball and goals;basketball~A game of shooting a ball through a hoop;volleyball~A game of hitting a ball over a net;hockey~A game played with sticks and a ball or puck;baseball~A game played with a bat and ball;cricket~A team game played with a bat and wickets;rugby~A team game played with an oval ball;handball~A team game of throwing a ball into a goal",
)
group(
  "Sports",
  "Individual sports",
  "tennis",
  "I practice {word} on weekends.",
  "tennis~A racket sport played across a net;badminton~A racket sport played with a shuttlecock;table tennis~A racket sport played on a table;golf~A game of hitting a ball into holes;boxing~A sport of punching with gloves;wrestling~A sport of grappling opponents;gymnastics~A sport involving controlled body movements;archery~A sport of shooting arrows",
)
group(
  "Sports",
  "Water sports",
  "swimming",
  "The club offers lessons in {word}.",
  "swimming~Moving through water using the body;diving~Entering water headfirst;surfing~Riding waves on a board;sailing~Traveling in a boat powered by wind;rowing~Moving a boat with oars;kayaking~Moving a narrow boat with a double paddle;water polo~A team ball game played in water;snorkeling~Swimming while breathing through a tube",
)
group(
  "Sports",
  "Outdoor sports",
  "bicycle",
  "We enjoy {word} in the fresh air.",
  "cycling~Riding a bicycle;running~Moving quickly on foot;hiking~Walking in the countryside;climbing~Moving upward on rocks or structures;skiing~Moving over snow on skis;snowboarding~Moving over snow on a board;skating~Moving on skates;skateboarding~Riding a board with wheels",
)
group(
  "Sports",
  "Equipment",
  "ball",
  "The coach checks the {word} before practice.",
  "ball~A round object used in games;racket~A tool used to hit a ball;bat~A tool used to strike a ball;net~Mesh used to divide or catch in games;goal~A target into which players score;helmet~Protective equipment for the head;goggles~Protective eyewear;jersey~A shirt worn by a player",
)
group(
  "Sports",
  "People in sports",
  "team",
  "The {word} prepares for the match.",
  "athlete~A person who takes part in sports;player~A person participating in a game;coach~A person who trains players;referee~A person who enforces game rules;captain~The leader of a team;opponent~A person competing against someone;teammate~A member of the same team;supporter~A person who encourages a team",
)
group(
  "Sports",
  "Competition",
  "trophy",
  "Our sports lesson explains the {word}.",
  "match~A contest between players or teams;tournament~A series of competitions;championship~A competition to decide a champion;score~The number of points earned;medal~An award worn for an achievement;trophy~An object awarded to a winner;record~The best performance achieved;finish line~The line marking the end of a race",
)
group(
  "Sports",
  "Fitness",
  "exercise",
  "My training plan includes {word}.",
  "warm-up~Light activity before exercise;cool-down~Gentle activity after exercise;stretching~Extending muscles;strength~The ability to use muscular force;balance~The ability to stay steady;endurance~The ability to continue activity;speed~How quickly someone moves;agility~The ability to change direction quickly",
)

group(
  "Technology",
  "Devices",
  "laptop",
  "I use the {word} for my work.",
  "computer~An electronic information-processing device;laptop~A portable computer;tablet~A flat touchscreen computer;smartphone~A phone with computer functions;smartwatch~A watch with digital features;camera~A device for making photographs;printer~A device for producing paper copies;scanner~A device for creating digital copies",
)
group(
  "Technology",
  "Computer parts",
  "keyboard",
  "The technician checks the {word}.",
  "keyboard~Keys for entering text;mouse~A device controlling a pointer;monitor~A screen for displaying computer output;processor~A component that executes instructions;memory~Storage used while programs run;hard drive~A device for long-term data storage;battery~A source of stored electrical power;charger~A device for replenishing a battery",
)
group(
  "Technology",
  "Accessories",
  "headphones",
  "I connect the {word} to my computer.",
  "headphones~Equipment worn over the ears;microphone~A device for capturing sound;speaker~A device that produces sound;webcam~A camera used for online video;USB cable~A cable for data or power;flash drive~A small portable data storage device;router~A device that connects computer networks;adapter~A device that connects different fittings",
)
group(
  "Technology",
  "Internet",
  "globe",
  "Our computer lesson explains the {word}.",
  "internet~A worldwide system of connected networks;website~A collection of pages on the internet;browser~A program for opening web pages;search engine~A service for finding online information;link~A connection to another page;download~Transferring data to your device;upload~Transferring data from your device;Wi-Fi~Wireless networking technology",
)
group(
  "Technology",
  "Software",
  "phone",
  "The lesson shows how to use the {word}.",
  "application~A program for a particular task;software~Programs used by a computer;operating system~Software managing a computer's basic functions;spreadsheet~A program organizing data in cells;document~A digital file containing information;presentation~A set of slides for an audience;update~A newer version of software;installation~The process of adding software",
)
group(
  "Technology",
  "Files & storage",
  "report",
  "We organize the {word} on the computer.",
  "file~A named collection of digital data;folder~A place for grouping files;backup~An extra copy of data;cloud storage~Saving data on remote servers;attachment~A file included with a message;filename~The name identifying a file;database~An organized collection of data;archive~A collection kept for future reference",
)
group(
  "Technology",
  "Digital safety",
  "lock",
  "The safety lesson explains {word}.",
  "password~A secret used to access an account;username~A name identifying an account;privacy~Control over personal information;encryption~Encoding data to protect it;firewall~A system limiting network access;malware~Software intended to cause harm;phishing~A trick to obtain private information;authentication~Checking that an identity is genuine",
)
group(
  "Technology",
  "Modern technology",
  "calculator",
  "Our workshop introduces {word}.",
  "robot~A machine that performs programmed tasks;sensor~A device that detects changes;automation~Using systems to do tasks automatically;artificial intelligence~Computing that performs tasks involving learned patterns;virtual reality~An immersive computer-created environment;touchscreen~A screen controlled by touch;Bluetooth~Short-range wireless communication;3D printer~A machine that builds three-dimensional objects",
)

group(
  "Communication",
  "Written messages",
  "letter",
  "We read the {word} together.",
  "letter~A written message sent to someone;email~A message sent electronically;postcard~A card sent by mail;note~A short written message;text message~A short message sent by phone;invitation~A request to attend an event;announcement~A public statement;memo~A short workplace message",
)
group(
  "Communication",
  "Conversation",
  "message",
  "Our language lesson practices the {word}.",
  "greeting~Words used when meeting someone;introduction~Presenting yourself or another person;question~A request for information;answer~A response to a question;request~Asking someone to do something;reply~A response to a message;apology~Words expressing regret;compliment~An expression of praise",
)
group(
  "Communication",
  "Speaking situations",
  "meeting",
  "We prepare for the {word}.",
  "conversation~An exchange of spoken ideas;discussion~Talking about a subject;debate~A structured exchange of different views;speech~A talk given to an audience;presentation~Information presented to listeners;interview~A meeting involving questions and answers;phone call~A conversation over a telephone;video call~A call with live video",
)
group(
  "Communication",
  "Media",
  "camera",
  "We learn from the {word}.",
  "newspaper~A publication of news;magazine~A publication containing articles;radio~A system broadcasting sound;television~A system broadcasting images and sound;podcast~An audio program available online;blog~A regularly updated online journal;newsletter~A publication sent to interested readers;social media~Online services for sharing content",
)
group(
  "Communication",
  "Message parts",
  "report",
  "We check the {word} before sending the email.",
  "subject line~A short title for an email;recipient~The person receiving a message;sender~The person sending a message;attachment~A file added to a message;signature~A name or sign identifying a sender;address~Details used to reach a recipient;envelope~A paper cover for a letter;stamp~A label showing postage has been paid",
)
group(
  "Communication",
  "Language",
  "book",
  "We study {word} in our English lesson.",
  "word~A unit of language;sentence~Words forming a complete thought;paragraph~A group of related sentences;grammar~The rules for using a language;vocabulary~The words of a language;pronunciation~The way words are spoken;accent~A distinctive way of pronouncing words;translation~Expressing meaning in another language",
)
group(
  "Communication",
  "Nonverbal communication",
  "hand",
  "The lesson explores {word}.",
  "gesture~A movement expressing meaning;expression~A look showing a feeling;eye contact~Looking into another person's eyes;body language~Communication through body movements;handshake~A greeting using joined hands;wave~A hand movement used to greet;nod~A head movement often meaning yes;smile~A facial expression of pleasure",
)
group(
  "Communication",
  "Communication qualities",
  "friendly",
  "The message is {word}.",
  "clear~Easy to understand;polite~Showing respect;formal~Using official language;informal~Using relaxed everyday language;brief~Short and concise;accurate~Correct and precise;persuasive~Able to influence an opinion;confidential~Intended to remain private",
  "adjective",
)

group(
  "Travel",
  "Planning a trip",
  "suitcase",
  "I check the {word} before traveling.",
  "passport~An official identity document for travel;visa~Official permission to enter a country;ticket~Proof of a paid journey;itinerary~A plan of travel details;reservation~An arrangement to keep a service available;destination~The place someone is traveling to;travel insurance~Financial protection for travel problems;budget~A plan for spending money",
)
group(
  "Travel",
  "Packing",
  "suitcase",
  "I pack the {word} for the journey.",
  "suitcase~A case for carrying clothes;backpack~A bag carried on the back;luggage tag~A label identifying a bag;toiletry bag~A small bag for personal-care items;travel adapter~A connector for different electrical sockets;guidebook~A book with travel information;map~A representation of places;water bottle~A container for drinking water",
)
group(
  "Travel",
  "Airport journey",
  "airplane",
  "The airport sign shows the {word}.",
  "check-in desk~A place where travelers register for a flight;boarding pass~A document permitting entry to a flight;security check~An inspection for safety;departure gate~The exit used to board a flight;boarding~Entering a plane or other vehicle;layover~A wait between parts of a journey;baggage claim~A place where arriving travelers collect bags;customs~Checks on goods crossing a border",
)
group(
  "Travel",
  "Accommodation",
  "hotel",
  "I ask about the {word} at the hotel.",
  "hotel~A business offering accommodation;hostel~A low-cost shared lodging place;reception~A desk where guests receive help;single room~A room intended for one guest;double room~A room with a bed for two guests;room key~A key giving access to a guest room;check-in~Registering upon arrival;check-out~Completing departure from accommodation",
)
group(
  "Travel",
  "Sightseeing",
  "camera",
  "The guide explains the {word}.",
  "tour~An organized visit;tourist~A person visiting for pleasure;landmark~A well-known feature or building;monument~A structure remembering a person or event;museum~A place displaying important objects;souvenir~An object kept to remember a visit;excursion~A short organized trip;viewpoint~A place with a good view",
)
group(
  "Travel",
  "Getting around",
  "map",
  "The transport desk explains the {word}.",
  "train station~A place where trains stop;bus stop~A place where buses pick up people;taxi stand~A place where taxis wait;car rental~Hiring a vehicle;ferry~A boat carrying people or vehicles;platform~An area beside railway tracks;timetable~A schedule of transport services;return ticket~A ticket for travel there and back",
)
group(
  "Travel",
  "Travel experiences",
  "park",
  "Our trip includes {word}.",
  "camping~Staying outdoors in a tent;hiking~Walking in natural areas;sightseeing~Visiting interesting places;road trip~A journey made by road;cruise~A holiday journey by ship;city break~A short holiday in a city;backpacking~Traveling with a backpack;safari~A trip to observe wild animals",
)
group(
  "Travel",
  "Travel situations",
  "report",
  "The traveler asks about the {word}.",
  "delay~A wait longer than expected;cancellation~The decision not to run a service;lost luggage~Bags that cannot be found;exchange rate~The value of one currency in another;currency~Money used in a country;emergency contact~A person to reach in a serious situation;time zone~A region sharing the same standard time;jet lag~Tiredness after crossing time zones",
)

group(
  "Community",
  "People",
  "family",
  "The {word} helps at the community event.",
  "neighbor~A person living nearby;resident~A person living in a particular place;volunteer~A person helping without payment;mayor~The leader of a town or city;councilor~A member of a local council;librarian~A person working in a library;organizer~A person arranging an activity;visitor~A person coming to a place",
)
group(
  "Community",
  "Local services",
  "hospital",
  "We visit the {word} for help.",
  "community center~A place for local activities;library~A place for borrowing books;clinic~A place providing healthcare;post office~A place handling mail;fire station~A building used by firefighters;police station~A building used by police;town hall~A local government building;recycling center~A place collecting recyclable materials",
)
group(
  "Community",
  "Shared spaces",
  "park",
  "We look after the {word} together.",
  "park~A shared green space;playground~An area for children to play;community garden~A garden shared by local people;public square~An open space for gatherings;sports field~An outdoor area for sports;walking trail~A path for walking;bus shelter~A covered waiting area for buses;noticeboard~A board displaying local information",
)
group(
  "Community",
  "Events",
  "calendar",
  "Our neighborhood is planning a {word}.",
  "festival~A celebration with organized activities;fair~An event with stalls and entertainment;parade~A procession through a public place;concert~A live musical performance;fundraiser~An event collecting money for a cause;workshop~A practical learning session;meeting~A gathering for discussion;cleanup~An activity to remove waste",
)
group(
  "Community",
  "Helping others",
  "friendly",
  "Our community values {word}.",
  "donation~Something given to help a cause;charity~An organization helping people in need;food bank~A service distributing food to people in need;support group~People who share advice and encouragement;mentoring~Guidance from someone experienced;caregiving~Looking after someone needing help;cooperation~Working together;inclusion~Making people feel welcome and involved",
)
group(
  "Community",
  "Local government",
  "report",
  "The council discusses the {word}.",
  "council~A local governing group;election~Choosing representatives by voting;vote~A formal choice;public service~A service provided for the community;permit~Official permission for an activity;regulation~An official rule;petition~A written request supported by signatures;public notice~An announcement for local people",
)
group(
  "Community",
  "Neighborhood life",
  "house",
  "We talk about the {word} in our neighborhood.",
  "neighborhood~A local area where people live;apartment building~A building containing separate homes;housing~Homes provided for people;rent~Money paid for using a property;local market~A nearby place selling goods;small business~An independently run small company;street lighting~Lights illuminating public roads;waste collection~A service removing household rubbish",
)
group(
  "Community",
  "Safety & accessibility",
  "traffic",
  "The safety meeting discusses the {word}.",
  "emergency number~A telephone number for urgent help;crosswalk~A marked pedestrian crossing;wheelchair ramp~A sloping path for wheelchair access;accessible entrance~An entrance usable by people with varied needs;fire alarm~A warning of possible fire;first aid~Immediate care for illness or injury;evacuation~Moving people away from danger;neighborhood watch~Neighbors cooperating to improve safety",
)

group(
  "Daily Activities",
  "Morning routine",
  "clock",
  "I make time for {word} in the morning.",
  "waking up~Stopping sleeping;getting up~Leaving the bed;washing~Cleaning with water;showering~Washing under running water;brushing teeth~Cleaning teeth with a toothbrush;getting dressed~Putting on clothing;making breakfast~Preparing the morning meal;packing a bag~Putting needed items into a bag",
)
group(
  "Daily Activities",
  "Around the home",
  "broom",
  "My routine includes {word}.",
  "cooking~Preparing food;cleaning~Removing dirt;washing dishes~Cleaning plates and utensils;doing laundry~Washing clothes;ironing~Smoothing clothes with heat;making the bed~Arranging bed coverings;taking out trash~Moving waste outside;watering plants~Giving water to plants",
)
group(
  "Daily Activities",
  "Work & study",
  "book",
  "I spend part of my day {word}.",
  "reading~Understanding written words;writing~Producing written words;studying~Learning through focused attention;working~Doing a job or task;typing~Entering text with keys;taking notes~Recording important information;checking email~Reading received electronic messages;attending meetings~Taking part in work discussions",
)
group(
  "Daily Activities",
  "Getting around",
  "bicycle",
  "I spend time {word} during my day.",
  "walking~Moving on foot;cycling~Riding a bicycle;driving~Controlling a road vehicle;commuting~Traveling regularly to work or school;catching a bus~Taking a bus journey;buying a ticket~Paying for permission to travel;crossing the street~Walking from one side of a road to the other;parking~Leaving a vehicle in a suitable place",
)
group(
  "Daily Activities",
  "Errands",
  "store",
  "Today's errands include {word}.",
  "shopping~Buying goods;buying groceries~Buying everyday food;paying bills~Paying money that is owed;visiting the bank~Going to a financial service;sending a parcel~Mailing a package;picking up medicine~Collecting prescribed medicine;making an appointment~Arranging a time to meet;collecting a delivery~Receiving an ordered package",
)
group(
  "Daily Activities",
  "Relaxing",
  "reading",
  "I enjoy {word} in my free time.",
  "listening to music~Hearing music for enjoyment;watching television~Viewing television programs;playing games~Taking part in games;drawing~Making pictures with lines;gardening~Caring for plants;exercising~Doing physical activity;meditating~Practicing calm focused attention;resting~Relaxing without strenuous activity",
)
group(
  "Daily Activities",
  "Social life",
  "meeting",
  "I make time for {word} each week.",
  "calling a friend~Talking to a friend by telephone;visiting family~Spending time with relatives;meeting friends~Gathering with people you know;helping a neighbor~Assisting someone living nearby;having lunch~Eating the midday meal;sharing a meal~Eating together;chatting~Having an informal conversation;volunteering~Helping without payment",
)
group(
  "Daily Activities",
  "Evening routine",
  "moon",
  "My evening routine includes {word}.",
  "preparing dinner~Making the evening meal;setting the table~Arranging items for a meal;clearing the table~Removing items after a meal;taking a bath~Washing in a bath;changing clothes~Putting on different clothing;planning tomorrow~Deciding on the next day's tasks;going to bed~Getting into bed to sleep;falling asleep~Beginning to sleep",
)

group(
  "Home",
  "Around the room",
  "house",
  "The {word} is part of this room.",
  "rug~A thick covering placed on a floor;floor~The surface you walk on indoors;wall~A vertical surface forming the side of a room;ceiling~The upper inside surface of a room;cabinet~A cupboard for storing things;plant~A living thing with leaves and roots;bedside table~A small table next to a bed;sink~A basin used for washing;faucet~A tap that controls the flow of water;stove~An appliance used for cooking;countertop~A flat kitchen work surface;air conditioner~A machine that cools indoor air",
)
group(
  "Home",
  "Tableware",
  "plate",
  "We put the {word} on the table.",
  "bowl~A deep round container used for food;glass~A transparent container used for drinking",
)
group(
  "Food",
  "Market produce",
  "tomato",
  "You can find {word} in the produce aisle.",
  "bell pepper~A hollow vegetable with a sweet crisp flesh;lemon~A yellow citrus fruit with a sour taste;cabbage~A vegetable with tightly packed leaves",
)
group(
  "Health",
  "Care equipment",
  "medicine",
  "The nurse checks the {word}.",
  "IV drip~Equipment that delivers liquid medicine into a vein",
)
group(
  "Nature",
  "At the park",
  "tree",
  "We notice the {word} on our walk.",
  "bench~A long seat for more than one person;path~A narrow route for walking;leaf~A flat green part of a plant",
)
group(
  "Travel",
  "At the airport",
  "airplane",
  "We can see the {word} from the terminal.",
  "boarding bridge~A covered walkway connecting a terminal to an airplane;wing~A long flat part that helps an airplane fly",
)
group(
  "Transportation",
  "At the station",
  "train",
  "Look for the {word} at the station.",
  "railway track~The metal rails on which trains travel",
)
group(
  "Places",
  "Street landmarks",
  "house",
  "We walk past the {word}.",
  "building~A structure with a roof and walls",
)

group(
  "Transportation",
  "Street details",
  "car",
  "We can see the {word} beside the road.",
  "streetlight~A tall lamp that lights a street;pedestrian signal~A light that shows pedestrians when it is safe to cross a road",
)

group(
  "Classroom",
  "Classroom surfaces",
  "whiteboard",
  "Our classroom has a {word}.",
  "blackboard~A dark board used for writing with chalk",
)

group(
  "Home",
  "Window details",
  "window",
  "We look at the {word} beside the window.",
  "window frame~The border that holds the glass of a window",
)
group(
  "Health",
  "Hospital equipment",
  "medicine",
  "The nurse uses the {word} in the hospital room.",
  "IV stand~A tall pole used for hanging fluid bags during care",
)

group(
  "Clothing",
  "Everyday bags",
  "backpack",
  "She carries a {word} when she goes out.",
  "handbag~A small bag used for carrying personal items",
)

group(
  "Travel",
  "Aircraft parts",
  "airplane",
  "We can see the {word} before boarding.",
  "aircraft engine~A machine that provides power for an airplane",
)

export function completeCategoryCatalog(
  existing: Word[],
  sceneList: Scene[] = [],
): Word[] {
  const words = existing.map((word) => ({ ...word }))
  const pronunciations = new Map(
    existing.map((word) => [word.word.toLowerCase(), word.pronunciation]),
  )
  const keys = new Set(
    existing.map((word) => `${word.topic}|${word.word.toLowerCase()}`),
  )
  for (const source of groups) {
    for (const entry of source.entries.split(";")) {
      const [word, meaning] = entry.split("~")
      const key = `${source.category}|${word.toLowerCase()}`
      if (keys.has(key)) continue
      keys.add(key)
      words.push({
        id: `${source.category.toLowerCase().replace(/\s+/g, "-")}--${word
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/-$/, "")}`,
        word,
        pronunciation:
          pronunciations.get(word.toLowerCase()) || "Listen for pronunciation",
        topic: source.category,
        group: source.subcategory,
        definition: `${meaning}.`,
        example: source.sentence.replace("{word}", word),
        partOfSpeech:
          source.category === "Daily Activities"
            ? "verb phrase"
            : source.partOfSpeech,
        level:
          word.includes(" ") || word.length > 10 ? "Intermediate" : "Beginner",
        art: source.art,
        related: [],
        visualKind: "symbol",
      })
    }
  }
  const legacyContexts = [
    ["home--scene-book", "book", "Home"],
    ["home--scene-flower", "flower", "Home"],
    ["home--scene-apple", "apple", "Home"],
    ["classroom--scene-teacher", "teacher", "Classroom"],
    ["food--scene-shopping", "shopping", "Food"],
    ["health--scene-bed", "bed", "Health"],
    ["travel--scene-clock", "clock", "Travel"],
    ["jobs--scene-desk", "desk", "Jobs"],
    ["jobs--scene-laptop", "laptop", "Jobs"],
    ["jobs--scene-chair", "chair", "Jobs"],
    ["jobs--scene-printer", "printer", "Jobs"],
    ["jobs--scene-clock", "clock", "Jobs"],
    ["nature--scene-bird", "bird", "Nature"],
    ["nature--scene-dog", "dog", "Nature"],
    ["nature--scene-butterfly", "butterfly", "Nature"],
  ]
  for (const [id, sourceId, topic] of legacyContexts) {
    const original = words.find((word) => word.id === sourceId)
    const key = `${topic}|${original?.word.toLowerCase()}`
    if (!original || keys.has(key)) continue
    keys.add(key)
    words.push({
      ...original,
      id,
      topic,
      group: "Scene vocabulary",
      related: [],
    })
  }
  for (const scene of sceneList) {
    for (const object of scene.objects) {
      const original = words.find((word) => word.id === object.id)
      if (!original) continue
      const key = `${scene.topic}|${original.word.toLowerCase()}`
      if (keys.has(key)) {
        const contextual = words.find(
          (word) =>
            word.topic === scene.topic &&
            word.word.toLowerCase() === original.word.toLowerCase(),
        )!
        contextual.art = original.art
        contextual.visualKind = original.visualKind
        contextual.pronunciation = original.pronunciation
        continue
      }
      keys.add(key)
      words.push({
        ...original,
        id: `${scene.topic.toLowerCase().replace(/\s+/g, "-")}--scene-${original.id}`,
        topic: scene.topic,
        group: "Scene vocabulary",
        related: [],
      })
    }
  }
  return words.map((word) => ({
    ...word,
    image: getVocabularyPhoto(word).src,
    visualKind: "photo",
    audio: { text: word.word, language: "en-US" },
    related: [
      ...new Set([
        ...word.related.filter((id) =>
          words.some((other) => other.id === id && other.topic === word.topic),
        ),
        ...words
          .filter(
            (other) =>
              other.topic === word.topic &&
              other.group === word.group &&
              other.id !== word.id,
          )
          .map((other) => other.id),
        ...words
          .filter((other) => other.topic === word.topic && other.id !== word.id)
          .map((other) => other.id),
      ]),
    ].slice(0, 5),
  }))
}
