import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "aid",
    "Listen for pronunciation",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "Gift of money or other material help to support a person or cause.",
    "Economic assistance to depressed areas."
  ],
  [
    "aids",
    "/eɪdz/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "A1",
    "A serious (often fatal) disease of the immune system transmitted through blood products especially by sexual contact or contaminated needles.",
    "“aids” means a serious (often fatal) disease of the immune system transmitted through blood products especially by sexual contact or contaminated needles."
  ],
  [
    "air",
    "/ˈɛə/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "A mixture of gases (especially oxygen) required for breathing; the stuff that the wind consists of.",
    "Air pollution."
  ],
  [
    "aircraft",
    "/ɛə.kɹɑːft/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A vehicle that can fly.",
    "“aircraft” means a vehicle that can fly."
  ],
  [
    "airline",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A commercial enterprise that provides scheduled flights for passengers.",
    "“airline” means a commercial enterprise that provides scheduled flights for passengers."
  ],
  [
    "aisle",
    "/aɪ̯l/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Part of a church divided laterally from the nave proper by rows of pillars or columns.",
    "“aisle” means part of a church divided laterally from the nave proper by rows of pillars or columns."
  ],
  [
    "alarm",
    "/əˈlɑːm/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A device that signals the occurrence of some undesirable event.",
    "“alarm” means a device that signals the occurrence of some undesirable event."
  ],
  [
    "album",
    "/ˈælbəm/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A book of blank pages with pockets or envelopes; for organizing photographs or stamp collections etc.",
    "“album” means a book of blank pages with pockets or envelopes; for organizing photographs or stamp collections etc."
  ],
  [
    "alcohol",
    "/ˈæl.kə.hɒl/",
    "Food",
    "Food & cooking",
    "noun",
    "B1",
    "A liquor or brew containing alcohol as the active agent.",
    "Alcohol (or drink) ruined him."
  ],
  [
    "allocation",
    "/æləˈkeɪʃən/",
    "Community",
    "Money & possessions",
    "noun",
    "B2",
    "A share set aside for a specific purpose.",
    "“allocation” means a share set aside for a specific purpose."
  ],
  [
    "allowance",
    "/əˈlaʊəns/",
    "Community",
    "Money & possessions",
    "noun",
    "B2",
    "An amount allowed or granted (as during a given period).",
    "Travel allowance."
  ],
  [
    "ally",
    "/ˈæl.aɪ/",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "A friendly nation.",
    "“ally” means a friendly nation."
  ],
  [
    "altar",
    "/ˈɔːl.tə/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A raised structure on which gifts or sacrifices to a god are made.",
    "“altar” means a raised structure on which gifts or sacrifices to a god are made."
  ],
  [
    "aluminium",
    "/ˌæl.(j)ʊˈmɪn.i.əm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A silvery ductile metallic element found primarily in bauxite.",
    "“aluminium” means a silvery ductile metallic element found primarily in bauxite."
  ],
  [
    "amateur",
    "/ˈæ.mə.tə/",
    "Sports",
    "Sports vocabulary",
    "noun",
    "B1",
    "Someone who pursues a study or sport as a pastime.",
    "“amateur” means someone who pursues a study or sport as a pastime."
  ],
  [
    "ambiguity",
    "/æmbɪˈɡjuːɪti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Unclearness by virtue of having more than one meaning.",
    "“ambiguity” means unclearness by virtue of having more than one meaning."
  ],
  [
    "ambition",
    "/æmˈbɪ.ʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "A strong drive for success.",
    "“ambition” means a strong drive for success."
  ],
  [
    "ambulance",
    "/ˈæm.bjə.ləns/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "A vehicle that takes people to and from hospitals.",
    "“ambulance” means a vehicle that takes people to and from hospitals."
  ],
  [
    "amendment",
    "/əˈmend.mənt/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A statement that is added to or revises or improves a proposal or document (a bill or constitution etc.).",
    "“amendment” means a statement that is added to or revises or improves a proposal or document (a bill or constitution etc.)."
  ],
  [
    "analogy",
    "/əˈnæləd͡ʒi/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "An inference that if things agree in some respects they probably agree in others.",
    "“analogy” means an inference that if things agree in some respects they probably agree in others."
  ],
  [
    "analysis",
    "/əˈnælɪsɪs/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A set of techniques for exploring underlying motives and a method of treating various mental disorders; based on the theories of Sigmund Freud.",
    "His physician recommended psychoanalysis."
  ],
  [
    "analyst",
    "/ˈænəlɪst/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A licensed practitioner of psychoanalysis.",
    "“analyst” means a licensed practitioner of psychoanalysis."
  ],
  [
    "angel",
    "/ˈeɪn.dʒəl/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "Spiritual being attendant upon God.",
    "“angel” means spiritual being attendant upon God."
  ],
  [
    "anger",
    "/ˈæŋɡə(ɹ)/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "A strong emotion; a feeling that is oriented toward some real or supposed grievance.",
    "“anger” means a strong emotion; a feeling that is oriented toward some real or supposed grievance."
  ],
  [
    "angle",
    "/ˈæŋ.ɡəl/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A biased way of looking at or presenting something.",
    "“angle” means a biased way of looking at or presenting something."
  ],
  [
    "animal",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A living organism characterized by voluntary movement.",
    "“animal” means a living organism characterized by voluntary movement."
  ],
  [
    "anticipation",
    "/æn.tɪs.ɪˈpeɪ.ʃən/",
    "People",
    "Feelings & emotions",
    "noun",
    "C1",
    "An expectation.",
    "“anticipation” means an expectation."
  ],
  [
    "anxiety",
    "/ˌæŋ(ɡ)ˈzaɪ.ə.ti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "(psychiatry) a relatively permanent state of worry and nervousness occurring in a variety of mental disorders, usually accompanied by compulsive behavior or attacks of panic.",
    "“anxiety” means (psychiatry) a relatively permanent state of worry and nervousness occurring in a variety of mental disorders, usually accompanied by compulsive behavior or attacks of panic."
  ],
  [
    "apathy",
    "/ˈæ.pə.θi/",
    "People",
    "Feelings & emotions",
    "noun",
    "A2",
    "An absence of emotion or enthusiasm.",
    "“apathy” means an absence of emotion or enthusiasm."
  ],
  [
    "apparatus",
    "/æ.pəˈɹeɪ.təs/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "Equipment designed to serve a specific function.",
    "“apparatus” means equipment designed to serve a specific function."
  ],
  [
    "appeal",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Attractiveness that interests or pleases or stimulates.",
    "His smile was part of his appeal to her."
  ],
  [
    "appearance",
    "/əˈpɪəɹəns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Outward or visible aspect of a person or thing.",
    "“appearance” means outward or visible aspect of a person or thing."
  ],
  [
    "appendix",
    "/əˈpɛn.dɪks/",
    "Health",
    "Body & anatomy",
    "noun",
    "B1",
    "A vestigial process that extends from the lower end of the cecum and that resembles a small pouch.",
    "“appendix” means a vestigial process that extends from the lower end of the cecum and that resembles a small pouch."
  ],
  [
    "appetite",
    "/ˈæpɪtaɪt/",
    "People",
    "Feelings & emotions",
    "noun",
    "B1",
    "A feeling of craving something.",
    "An appetite for life."
  ],
  [
    "applicant",
    "/ˈæp.lə.kɪnt/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person who requests or seeks something such as assistance or employment or admission.",
    "“applicant” means a person who requests or seeks something such as assistance or employment or admission."
  ],
  [
    "approval",
    "/əˈpɹuːvəl/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The formal act of approving.",
    "His decision merited the approval of any sensible person."
  ],
  [
    "aquarium",
    "/əˈkweɹiəm/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "A tank or pool or bowl filled with water for keeping live fish and underwater animals.",
    "“aquarium” means a tank or pool or bowl filled with water for keeping live fish and underwater animals."
  ],
  [
    "arch",
    "Listen for pronunciation",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A1",
    "A passageway under a curved masonry construction.",
    "They built a triumphal arch to memorialize their victory."
  ],
  [
    "architecture",
    "/ˈɑː.kɪ.ˌtɛk.tʃə/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "C1",
    "The discipline dealing with the principles of design and construction and ornamentation of fine buildings.",
    "Architecture and eloquence are mixed arts whose end is sometimes beauty and sometimes use."
  ],
  [
    "area",
    "/ˈɛə̯ɹɪə̯/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The extent of a 2-dimensional surface enclosed within a boundary.",
    "The area of a rectangle."
  ],
  [
    "arena",
    "/əˈɹiːnə/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "The central area of an ancient Roman amphitheater where contests and spectacles were held; especially an area that was strewn with sand.",
    "“arena” means the central area of an ancient Roman amphitheater where contests and spectacles were held; especially an area that was strewn with sand."
  ],
  [
    "argument",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A discussion in which reasons are advanced for and against some proposition or proposal.",
    "The argument over foreign aid goes on and on."
  ],
  [
    "army",
    "/ˈɑː.miː/",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "A permanent organization of the military land forces of a nation or state.",
    "“army” means a permanent organization of the military land forces of a nation or state."
  ],
  [
    "arrangement",
    "/əˈɹeɪnd͡ʒmənt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The spatial property of the way in which something is placed.",
    "The arrangement of the furniture."
  ],
  [
    "arrow",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A projectile with a straight thin shaft and an arrowhead on one end and stabilizing vanes on the other; intended to be shot from a bow.",
    "“arrow” means a projectile with a straight thin shaft and an arrowhead on one end and stabilizing vanes on the other; intended to be shot from a bow."
  ],
  [
    "article",
    "/ˈɑːtɪkəl/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "Nonfictional prose forming an independent part of a publication.",
    "“article” means nonfictional prose forming an independent part of a publication."
  ],
  [
    "ash",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The residue that remains when something is burned.",
    "“ash” means the residue that remains when something is burned."
  ],
  [
    "aspect",
    "/ˈæspɛkt/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A distinct feature or element in a problem.",
    "He studied every facet of the question."
  ],
  [
    "assault",
    "/əˈsɔːlt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A threatened or attempted physical attack by someone who appears to be able to cause bodily harm if not stopped.",
    "“assault” means a threatened or attempted physical attack by someone who appears to be able to cause bodily harm if not stopped."
  ],
  [
    "assertion",
    "/əˈsɜːʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A declaration that is made emphatically (as if no supporting evidence were necessary).",
    "“assertion” means a declaration that is made emphatically (as if no supporting evidence were necessary)."
  ],
  [
    "assessment",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of judging or assessing a person or situation or event.",
    "They criticized my judgment of the contestants."
  ],
  [
    "asset",
    "/ˈæsɪt/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A useful or valuable quality.",
    "“asset” means a useful or valuable quality."
  ],
  [
    "association",
    "/əˌsəʊʃiˈeɪʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The process of bringing ideas or events together in memory or imagination.",
    "Conditioning is a form of learning by association."
  ],
  [
    "assumption",
    "/əˈsʌmp.ʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A statement that is assumed to be true and from which a conclusion can be drawn.",
    "On the assumption that he has been injured, we can infer that he will not play."
  ],
  [
    "assurance",
    "/əˈʃʊɹəns/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A statement intended to inspire confidence.",
    "The President's assurances were not respected."
  ],
  [
    "asylum",
    "/əˈsaɪləm/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A shelter from danger or hardship.",
    "“asylum” means a shelter from danger or hardship."
  ],
  [
    "atmosphere",
    "/ˈæt.məsˌfɪə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The envelope of gases surrounding any celestial body.",
    "“atmosphere” means the envelope of gases surrounding any celestial body."
  ],
  [
    "atom",
    "/ˈatəm/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "(physics and chemistry) the smallest component of an element having the chemical properties of the element.",
    "“atom” means (physics and chemistry) the smallest component of an element having the chemical properties of the element."
  ],
  [
    "attack",
    "/əˈtæk/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Strong criticism.",
    "He published an unexpected attack on my work."
  ],
  [
    "attention",
    "/əˈtɛn.ʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The faculty or power of mental concentration.",
    "Keeping track of all the details requires your complete attention."
  ],
  [
    "attitude",
    "/ˈætɪˌtjuːd/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A complex mental state involving beliefs and feelings and values and dispositions to act in certain ways.",
    "He had the attitude that work was fun."
  ],
  [
    "attraction",
    "/əˈtɹækʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "The quality of arousing interest; being attractive or something that attracts.",
    "Her personality held a strange attraction for him."
  ],
  [
    "auction",
    "/ˈɔːkʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The public sale of something to the highest bidder.",
    "“auction” means the public sale of something to the highest bidder."
  ],
  [
    "audience",
    "/ˈɔːdi.əns/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A gathering of spectators or listeners at a (usually public) performance.",
    "The audience applauded."
  ],
  [
    "auditor",
    "/ˈɔːdɪtə(ɹ)/",
    "School",
    "University & academic English",
    "noun",
    "B1",
    "A student who attends a course but does not take it for credit.",
    "“auditor” means a student who attends a course but does not take it for credit."
  ],
  [
    "authority",
    "/ɔːˈθɒɹəti/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "An expert whose views are taken as definitive.",
    "He is an authority on corporate law."
  ],
  [
    "autonomy",
    "/ɔːˈtɒn.əm.i/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Personal independence.",
    "“autonomy” means personal independence."
  ],
  [
    "average",
    "/ˈævəɹɪd͡ʒ/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "A statistic describing the location of a distribution.",
    "It set the norm for American homes."
  ],
  [
    "aviation",
    "/eɪviˈeɪʃən/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "The operation of aircraft to provide transportation.",
    "“aviation” means the operation of aircraft to provide transportation."
  ],
  [
    "award",
    "/əˈwɔːd/",
    "Sports",
    "Sports vocabulary",
    "noun",
    "A2",
    "Something given for victory or superiority in a contest or competition or for winning a lottery.",
    "The prize was a free trip to Europe."
  ],
  [
    "axis",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "The center around which something rotates.",
    "“axis” means the center around which something rotates."
  ],
  [
    "back",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "The side that goes last or is not normally seen.",
    "He wrote the date on the back of the photograph."
  ],
  [
    "background",
    "/ˈbæk.ɡɹaʊnd/",
    "Sports",
    "Sports vocabulary",
    "noun",
    "B2",
    "A person's social heritage: previous experience or training.",
    "He is a lawyer with a sports background."
  ],
  [
    "bacon",
    "/ˈbeɪ.kən/",
    "Food",
    "Food & cooking",
    "noun",
    "A2",
    "Back and sides of a hog salted and dried or smoked; usually sliced thin and fried.",
    "“bacon” means back and sides of a hog salted and dried or smoked; usually sliced thin and fried."
  ],
  [
    "bag",
    "/ˈbæɡ/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A portable rectangular container for carrying clothes.",
    "He carried his small bag onto the plane with him."
  ],
  [
    "bail",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "The legal system that allows an accused person to be temporarily released from custody (usually on condition that a sum of money guarantees their appearance at trial).",
    "He is out on bail."
  ],
  [
    "ballet",
    "/ˈbæleɪ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A theatrical representation of a story that is performed to music by trained dancers.",
    "“ballet” means a theatrical representation of a story that is performed to music by trained dancers."
  ],
  [
    "balloon",
    "/bəˈluːn/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Small thin inflatable rubber bag with narrow neck.",
    "“balloon” means small thin inflatable rubber bag with narrow neck."
  ],
  [
    "ballot",
    "/ˈbælət/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A document listing the alternatives that is used in voting.",
    "“ballot” means a document listing the alternatives that is used in voting."
  ],
  [
    "ban",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A decree that prohibits something.",
    "“ban” means a decree that prohibits something."
  ],
  [
    "band",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "An adornment consisting of a strip of a contrasting color or material.",
    "“band” means an adornment consisting of a strip of a contrasting color or material."
  ],
  [
    "bang",
    "Listen for pronunciation",
    "Community",
    "Events",
    "noun",
    "A1",
    "A sudden very loud noise.",
    "“bang” means a sudden very loud noise."
  ],
  [
    "bankruptcy",
    "/ˈbæŋkɹʌptsɪ/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A legal process intended to insure equality among the creditors of a corporation declared to be insolvent.",
    "“bankruptcy” means a legal process intended to insure equality among the creditors of a corporation declared to be insolvent."
  ],
  [
    "banner",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Long strip of cloth or paper used for decoration or advertising.",
    "“banner” means long strip of cloth or paper used for decoration or advertising."
  ],
  [
    "bar",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A rigid piece of metal or wood; usually used as a fastening or obstruction or weapon.",
    "There were bars in the windows to prevent escape."
  ],
  [
    "bark",
    "Listen for pronunciation",
    "Nature",
    "Plants & ecosystems",
    "noun",
    "A1",
    "Tough protective covering of the woody stems and roots of trees and other woody plants.",
    "“bark” means tough protective covering of the woody stems and roots of trees and other woody plants."
  ],
  [
    "barrel",
    "/ˈbæɹəl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A cylindrical container that holds liquids.",
    "“barrel” means a cylindrical container that holds liquids."
  ],
  [
    "barrier",
    "/ˈbæɹi.ə(ɹ)/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "Anything serving to maintain separation by obstructing vision or access.",
    "“barrier” means anything serving to maintain separation by obstructing vision or access."
  ],
  [
    "base",
    "Listen for pronunciation",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A1",
    "A support or foundation.",
    "The base of the lamp."
  ],
  [
    "basin",
    "/ˈbeɪsɪn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A bathroom sink that is permanently installed and connected to a water supply and drainpipe; where you can wash your hands and face.",
    "He ran some water in the basin and splashed it on his face."
  ],
  [
    "basis",
    "/ˈbeɪsɪs/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "The fundamental assumptions from which something is begun or developed or calculated or explained.",
    "The whole argument rested on a basis of conjecture."
  ],
  [
    "basket",
    "/ˈbɑːskɪt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A container that is usually woven and has handles.",
    "“basket” means a container that is usually woven and has handles."
  ],
  [
    "battle",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "A hostile meeting of opposing military forces in the course of a war.",
    "Grant won a decisive victory in the battle of Chattanooga."
  ],
  [
    "battlefield",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "B2",
    "A region where a battle is being (or has been) fought.",
    "They made a tour of Civil War battlefields."
  ],
  [
    "beam",
    "/biːm/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A1",
    "Long thick piece of wood or metal or concrete, etc., used in construction.",
    "“beam” means long thick piece of wood or metal or concrete, etc., used in construction."
  ],
  [
    "bean",
    "/biːn/",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Any of various edible seeds of plants of the family Leguminosae used for food.",
    "“bean” means any of various edible seeds of plants of the family Leguminosae used for food."
  ],
  [
    "beat",
    "Listen for pronunciation",
    "Community",
    "Events",
    "noun",
    "A1",
    "The rhythmic contraction and expansion of the arteries with each beat of the heart.",
    "He could feel the beat of her heart."
  ],
  [
    "beer",
    "/bɪə(ɹ)/",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "A general name for alcoholic beverages made by fermenting a cereal (or mixture of cereals) flavored with hops.",
    "“beer” means a general name for alcoholic beverages made by fermenting a cereal (or mixture of cereals) flavored with hops."
  ],
  [
    "beginning",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "The first part or section of something.",
    "‘It was a dark and stormy night’ is a hackneyed beginning for a story."
  ],
  [
    "behaviour",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "Manner of acting or controlling yourself.",
    "“behaviour” means manner of acting or controlling yourself."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch015 = createVocabularyBatch({
  id: "batch-015",
  source,
  entries,
})

export const batch015Metadata = {
  id: "batch-015",
  title: "Open English WordNet core vocabulary 601–700",
  addedWords: batch015.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
