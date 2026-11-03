import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "cellar",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "The lowermost portion of a structure partly or wholly below ground level; often used for storage.",
    "“cellar” means the lowermost portion of a structure partly or wholly below ground level; often used for storage."
  ],
  [
    "cemetery",
    "/ˈsɛm.ɪˌtɹi/",
    "Places",
    "Places & locations",
    "noun",
    "B1",
    "A tract of land used for burials.",
    "“cemetery” means a tract of land used for burials."
  ],
  [
    "censorship",
    "/ˈsɛnsəˌʃɪp/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Deleting parts of publications or correspondence or theatrical performances.",
    "“censorship” means deleting parts of publications or correspondence or theatrical performances."
  ],
  [
    "census",
    "/ˈsɛnsəs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A periodic count of the population.",
    "“census” means a periodic count of the population."
  ],
  [
    "center",
    "/ˈsɛn.tɚ/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "A building dedicated to a particular activity.",
    "They were raising money to build a new center for research."
  ],
  [
    "century",
    "/ˈsɛn.t͡ʃə.ɹiː/",
    "Daily Activities",
    "Time & schedules",
    "noun",
    "B1",
    "A period of 100 years.",
    "“century” means a period of 100 years."
  ],
  [
    "cereal",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "A breakfast food prepared from grain.",
    "“cereal” means a breakfast food prepared from grain."
  ],
  [
    "ceremony",
    "/ˈsɛɹɪməni/",
    "Community",
    "Events",
    "noun",
    "B1",
    "A formal event performed on a special occasion.",
    "A ceremony commemorating Pearl Harbor."
  ],
  [
    "certificate",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A document attesting to the truth of certain stated facts.",
    "“certificate” means a document attesting to the truth of certain stated facts."
  ],
  [
    "chain",
    "/ˈt͡ʃeɪn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A series of (usually metal) rings or links fitted into one another to make a flexible ligament.",
    "“chain” means a series of (usually metal) rings or links fitted into one another to make a flexible ligament."
  ],
  [
    "challenge",
    "/ˈtʃæl.ɪndʒ/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Questioning a statement and demanding an explanation.",
    "His challenge of the assumption that Japan is still our enemy."
  ],
  [
    "champagne",
    "/ʃæmˈpeɪn/",
    "Food",
    "Food & cooking",
    "noun",
    "B2",
    "A white sparkling wine either produced in Champagne or resembling that produced there.",
    "“champagne” means a white sparkling wine either produced in Champagne or resembling that produced there."
  ],
  [
    "champion",
    "/ˈtʃæmpiən/",
    "Sports",
    "Sports vocabulary",
    "noun",
    "B1",
    "Someone who has won first place in a competition.",
    "“champion” means someone who has won first place in a competition."
  ],
  [
    "chance",
    "/tʃæns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A measure of how likely it is that some event will occur; a number expressing the ratio of favorable cases to the whole number of cases possible.",
    "The probability that an unbiased coin will fall with the head up is 0.5."
  ],
  [
    "change",
    "/tʃeɪndʒ/",
    "Community",
    "Events",
    "noun",
    "A2",
    "An event that occurs when something passes from one state or phase to another.",
    "The change was intended to increase sales."
  ],
  [
    "channel",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A television station and its programs.",
    "A satellite TV channel."
  ],
  [
    "chaos",
    "/ˈkeɪ.ɒs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A state of extreme confusion and disorder.",
    "“chaos” means a state of extreme confusion and disorder."
  ],
  [
    "chap",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A long narrow depression in a surface.",
    "“chap” means a long narrow depression in a surface."
  ],
  [
    "chapter",
    "/ˈt͡ʃæptə/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A subdivision of a written work; usually numbered and titled.",
    "He read a chapter every night before falling asleep."
  ],
  [
    "character",
    "/ˈkɛɹ(ə)ktɚ/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A written symbol that is used to represent speech.",
    "The Greek alphabet has 24 characters."
  ],
  [
    "charge",
    "/t͡ʃɑːd͡ʒ/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Request for payment of a debt.",
    "They submitted their charges at the end of each month."
  ],
  [
    "charm",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Something believed to bring good luck.",
    "“charm” means something believed to bring good luck."
  ],
  [
    "chart",
    "/tʃɑɹt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A map designed to assist navigation by air or sea.",
    "“chart” means a map designed to assist navigation by air or sea."
  ],
  [
    "charter",
    "/ˈt͡ʃɑːtə/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A document incorporating an institution and specifying its rights; includes the articles of incorporation and the certificate of incorporation.",
    "“charter” means a document incorporating an institution and specifying its rights; includes the articles of incorporation and the certificate of incorporation."
  ],
  [
    "chauvinist",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person with a prejudiced belief in the superiority of his or her own kind.",
    "“chauvinist” means a person with a prejudiced belief in the superiority of his or her own kind."
  ],
  [
    "check",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "(chess) a direct attack on an opponent's king.",
    "“check” means (chess) a direct attack on an opponent's king."
  ],
  [
    "cheek",
    "/tʃiːk/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Impudent aggressiveness.",
    "He had the cheek to question my honesty."
  ],
  [
    "chemical",
    "/ˈkɛmɪkəl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Material produced by or used in a reaction involving changes in atoms or molecules.",
    "“chemical” means material produced by or used in a reaction involving changes in atoms or molecules."
  ],
  [
    "cheque",
    "/tʃɛk/",
    "Community",
    "Money & possessions",
    "noun",
    "A2",
    "A written order directing a bank to pay money.",
    "He paid all his bills by check."
  ],
  [
    "cherry",
    "/ˈt͡ʃɛɹi/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "A red fruit with a single hard stone.",
    "“cherry” means a red fruit with a single hard stone."
  ],
  [
    "chest",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Furniture with drawers for keeping clothes.",
    "“chest” means furniture with drawers for keeping clothes."
  ],
  [
    "chief",
    "/tʃiːf/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A person who exercises control over workers.",
    "If you want to leave early you have to ask the foreman."
  ],
  [
    "chimney",
    "/ˈtʃɪmni/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "B1",
    "A vertical flue that provides a path through which smoke from a fire is carried away through the wall or roof of a building.",
    "“chimney” means a vertical flue that provides a path through which smoke from a fire is carried away through the wall or roof of a building."
  ],
  [
    "chin",
    "Listen for pronunciation",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "The protruding part of the lower jaw.",
    "“chin” means the protruding part of the lower jaw."
  ],
  [
    "chip",
    "/tʃɪp/",
    "Technology",
    "IT & computers",
    "noun",
    "A1",
    "Electronic equipment consisting of a small crystal of a silicon semiconductor fabricated to carry out a number of electronic functions in an integrated circuit.",
    "“chip” means electronic equipment consisting of a small crystal of a silicon semiconductor fabricated to carry out a number of electronic functions in an integrated circuit."
  ],
  [
    "choice",
    "/tʃɔɪs/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "One of a number of things from which only one can be chosen.",
    "My only choice is to refuse."
  ],
  [
    "chord",
    "/kɔː(ɹ)d/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A combination of three or more notes that blend harmoniously when sounded together.",
    "“chord” means a combination of three or more notes that blend harmoniously when sounded together."
  ],
  [
    "chorus",
    "/ˈkɔːɹəs/",
    "Community",
    "Groups & organizations",
    "noun",
    "A2",
    "A group of people assembled to sing together.",
    "“chorus” means a group of people assembled to sing together."
  ],
  [
    "church",
    "/t͡ʃɜːt͡ʃ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A place for public (especially Christian) worship.",
    "The church was empty."
  ],
  [
    "cigarette",
    "/ˈsɪ.ɡə.ɹɛt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "Finely ground tobacco wrapped in paper; for smoking.",
    "“cigarette” means finely ground tobacco wrapped in paper; for smoking."
  ],
  [
    "circle",
    "/ˈsɜɹkəl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Ellipse in which the two axes are of equal length; a plane curve generated by one point moving at a constant distance from a fixed point.",
    "He calculated the circumference of the circle."
  ],
  [
    "circulation",
    "/ˌsɜː(ɹ).kjʊˈleɪ.ʃən/",
    "Nature",
    "Natural phenomena",
    "noun",
    "B2",
    "Movement through a circuit; especially the movement of blood through the heart and blood vessels.",
    "“circulation” means movement through a circuit; especially the movement of blood through the heart and blood vessels."
  ],
  [
    "circumstance",
    "/ˈsɝ.kəm.ˌstæns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "The set of facts or circumstances that surround a situation or event.",
    "The historical context."
  ],
  [
    "citizen",
    "/ˈsɪtɪzən/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A native or naturalized member of a state or other political community.",
    "“citizen” means a native or naturalized member of a state or other political community."
  ],
  [
    "civilization",
    "/ˌsɪv.ɪ.laɪˈzeɪ.ʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "C1",
    "A society in an advanced state of social development (e.g., with complex legal and political and religious organizations).",
    "The people slowly progressed from barbarism to civilization."
  ],
  [
    "claim",
    "/kleɪm/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Demand for something as rightful or due.",
    "They struck in support of their claim for a shorter work day."
  ],
  [
    "clash",
    "/klaʃ/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A state of conflict between persons.",
    "“clash” means a state of conflict between persons."
  ],
  [
    "clearance",
    "/ˈklɪəɹən(t)s/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Vertical space available to allow easy passage under something.",
    "“clearance” means vertical space available to allow easy passage under something."
  ],
  [
    "clerk",
    "/klɑːk/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "An employee who performs clerical work (e.g., keeps records or accounts).",
    "“clerk” means an employee who performs clerical work (e.g., keeps records or accounts)."
  ],
  [
    "clothes",
    "/kləʊ(ð)z/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Clothing in general.",
    "He always bought his clothes at the same store."
  ],
  [
    "club",
    "/klʌb/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Stout stick that is larger at one end.",
    "He carried a club in self defense."
  ],
  [
    "clue",
    "/kluː/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "Evidence that helps to solve a problem.",
    "“clue” means evidence that helps to solve a problem."
  ],
  [
    "cluster",
    "/ˈklʌstə/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A grouping of a number of similar things.",
    "A cluster of admirers."
  ],
  [
    "coal",
    "/kəʊl/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "Fossil fuel consisting of carbonized vegetable matter deposited in the Carboniferous period.",
    "“coal” means fossil fuel consisting of carbonized vegetable matter deposited in the Carboniferous period."
  ],
  [
    "coalition",
    "/koʊəˈlɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The union of diverse things into one body or form or group; the growing together of parts.",
    "“coalition” means the union of diverse things into one body or form or group; the growing together of parts."
  ],
  [
    "code",
    "Listen for pronunciation",
    "Technology",
    "IT & computers",
    "noun",
    "A1",
    "(computer science) the symbolic arrangement of data or instructions in a computer program or the set of such instructions.",
    "“code” means (computer science) the symbolic arrangement of data or instructions in a computer program or the set of such instructions."
  ],
  [
    "coffin",
    "/ˈkɒfɪn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Box in which a corpse is buried or cremated.",
    "“coffin” means box in which a corpse is buried or cremated."
  ],
  [
    "coin",
    "/kɔɪn/",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "A flat metal piece (usually a disc) used as money.",
    "“coin” means a flat metal piece (usually a disc) used as money."
  ],
  [
    "coincidence",
    "/kəʊˈɪnsɪdəns/",
    "Community",
    "Events",
    "noun",
    "B2",
    "An event that might have been arranged although it was really accidental.",
    "“coincidence” means an event that might have been arranged although it was really accidental."
  ],
  [
    "collection",
    "/kəˈlɛkʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "Several things grouped together or considered as a whole.",
    "“collection” means several things grouped together or considered as a whole."
  ],
  [
    "colon",
    "/ˈkəʊ.lən/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "The part of the large intestine between the cecum and the rectum; it extracts moisture from food residues before they are excreted.",
    "“colon” means the part of the large intestine between the cecum and the rectum; it extracts moisture from food residues before they are excreted."
  ],
  [
    "colony",
    "/ˈkɒ.lə.ni/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "A geographical area politically controlled by a distant country.",
    "“colony” means a geographical area politically controlled by a distant country."
  ],
  [
    "colour",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "The appearance of objects (or light sources) described in terms of a person's perception of their hue and lightness (or brightness) and saturation.",
    "“colour” means the appearance of objects (or light sources) described in terms of a person's perception of their hue and lightness (or brightness) and saturation."
  ],
  [
    "column",
    "/ˈkɒləm/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "(architecture) a tall vertical cylindrical structure standing upright and used to support a structure.",
    "“column” means (architecture) a tall vertical cylindrical structure standing upright and used to support a structure."
  ],
  [
    "coma",
    "Listen for pronunciation",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A1",
    "A state of deep and often prolonged unconsciousness; usually the result of disease or injury.",
    "“coma” means a state of deep and often prolonged unconsciousness; usually the result of disease or injury."
  ],
  [
    "combination",
    "/kɒmbɪˈneɪʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A collection of things that have been combined; an assemblage of separate parts or qualities.",
    "“combination” means a collection of things that have been combined; an assemblage of separate parts or qualities."
  ],
  [
    "comedy",
    "/ˈkɑmədi/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Light and humorous drama with a happy ending.",
    "“comedy” means light and humorous drama with a happy ending."
  ],
  [
    "comet",
    "/ˈkɒmət/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "(astronomy) a relatively small extraterrestrial body consisting of a frozen mass that travels around the sun in a highly elliptical orbit.",
    "“comet” means (astronomy) a relatively small extraterrestrial body consisting of a frozen mass that travels around the sun in a highly elliptical orbit."
  ],
  [
    "comfort",
    "/ˈkʌm.fət/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The act of consoling; giving relief in affliction.",
    "His presence was a consolation to her."
  ],
  [
    "command",
    "/kəˈmɑːnd/",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "Great skillfulness and knowledge of some subject or activity.",
    "A good command of French."
  ],
  [
    "comment",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A statement that expresses a personal opinion or belief or adds information.",
    "From time to time she contributed a personal comment on his account."
  ],
  [
    "commerce",
    "/ˈkɑm.ɚs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "Transactions (sales and purchases) having the objective of supplying commodities (goods and services).",
    "“commerce” means transactions (sales and purchases) having the objective of supplying commodities (goods and services)."
  ],
  [
    "commission",
    "/kəˈmɪʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A group of representatives or delegates.",
    "“commission” means a group of representatives or delegates."
  ],
  [
    "commitment",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of binding yourself (intellectually or emotionally) to a course of action.",
    "His long commitment to public service."
  ],
  [
    "committee",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A special group delegated to consider some matter.",
    "[object Object]."
  ],
  [
    "communication",
    "/kəˌmjuːnɪˈkeɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "Something that is communicated by or to or between people or groups.",
    "“communication” means something that is communicated by or to or between people or groups."
  ],
  [
    "communist",
    "/ˈkɒ.mjʊ.nɪst/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A member of the communist party.",
    "“communist” means a member of the communist party."
  ],
  [
    "community",
    "/kəˈmjuːnɪti/",
    "Places",
    "Places & locations",
    "noun",
    "B2",
    "A district where people live; occupied primarily by private residences.",
    "“community” means a district where people live; occupied primarily by private residences."
  ],
  [
    "compact",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A small and economical car.",
    "“compact” means a small and economical car."
  ],
  [
    "company",
    "/ˈkʌmp(ə)ni/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "Organization of performers and associated personnel (especially theatrical).",
    "The traveling company all stayed at the same hotel."
  ],
  [
    "comparison",
    "/kəmˈpɛɹɪsən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Relation based on similarities and differences.",
    "“comparison” means relation based on similarities and differences."
  ],
  [
    "compartment",
    "/kəmˈpɑɹtmənt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "A space into which an area is subdivided.",
    "“compartment” means a space into which an area is subdivided."
  ],
  [
    "compensation",
    "/ˌkɒmpɛnˈseɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "C1",
    "The act of compensating for service or loss or injury.",
    "“compensation” means the act of compensating for service or loss or injury."
  ],
  [
    "competence",
    "/ˈkɒmpətəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of being adequately or well qualified physically and intellectually.",
    "“competence” means the quality of being adequately or well qualified physically and intellectually."
  ],
  [
    "competition",
    "/ˌkɒmpəˈtɪʃən/",
    "Sports",
    "Sports vocabulary",
    "noun",
    "B2",
    "The act of competing as for profit or a prize.",
    "The teams were in fierce contention for first place."
  ],
  [
    "compliance",
    "/kəmˈplaɪəns/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Acting according to certain accepted standards.",
    "Their financial statements are in conformity with generally accepted accounting practices."
  ],
  [
    "complication",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "A situation or condition that is complex or confused.",
    "Her coming was a serious complication."
  ],
  [
    "composer",
    "/kəmˈpoʊzəɹ/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "Someone who composes music, usually as a profession.",
    "“composer” means someone who composes music, usually as a profession."
  ],
  [
    "compound",
    "/ˈkɒmpaʊnd/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "(chemistry) a substance formed by chemical union of two or more elements or ingredients in definite proportion by weight.",
    "“compound” means (chemistry) a substance formed by chemical union of two or more elements or ingredients in definite proportion by weight."
  ],
  [
    "compromise",
    "/ˈkɒmpɹəˌmaɪz/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "An accommodation in which both sides make concessions.",
    "The newly elected congressmen rejected a compromise because they considered it ‘business as usual’."
  ],
  [
    "computing",
    "/kəmˈpjuːtɪŋ/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "B2",
    "The branch of engineering science that studies (with the aid of computers) computable processes and structures.",
    "“computing” means the branch of engineering science that studies (with the aid of computers) computable processes and structures."
  ],
  [
    "concentration",
    "/ˌkɒnsənˈtɹeɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "The strength of a solution; number of molecules of a substance in a given volume.",
    "“concentration” means the strength of a solution; number of molecules of a substance in a given volume."
  ],
  [
    "concept",
    "/ˈkɒn.sɛpt/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "An abstract or general idea inferred or derived from specific instances.",
    "“concept” means an abstract or general idea inferred or derived from specific instances."
  ],
  [
    "conception",
    "/kənˈsɛpʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of becoming pregnant; fertilization of an ovum by a spermatozoon.",
    "“conception” means the act of becoming pregnant; fertilization of an ovum by a spermatozoon."
  ],
  [
    "concern",
    "/kənˈsɝn/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "Something that interests you because it is important or affects you.",
    "The safety of the ship is the captain's concern."
  ],
  [
    "concession",
    "/kənˈsɛʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A point conceded or yielded.",
    "They won all the concessions they asked for."
  ],
  [
    "conclusion",
    "/kənˈkluːʒən/",
    "Community",
    "Events",
    "noun",
    "B2",
    "Event whose occurrence ends something.",
    "His death marked the ending of an era."
  ],
  [
    "condition",
    "/kənˈdɪʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "Information that should be kept in mind when making a decision.",
    "Another consideration is the time it would take."
  ],
  [
    "conductor",
    "/kənˈdʌktɚ/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "The person who collects fares on a public conveyance.",
    "“conductor” means the person who collects fares on a public conveyance."
  ],
  [
    "conference",
    "/ˈkɒn.fɹəns/",
    "Community",
    "Groups & organizations",
    "noun",
    "B2",
    "A prearranged meeting for consultation or exchange of information or discussion (especially one with a formal agenda).",
    "“conference” means a prearranged meeting for consultation or exchange of information or discussion (especially one with a formal agenda)."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch017 = createVocabularyBatch({
  id: "batch-017",
  source,
  entries,
})

export const batch017Metadata = {
  id: "batch-017",
  title: "Open English WordNet core vocabulary 801–900",
  addedWords: batch017.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
