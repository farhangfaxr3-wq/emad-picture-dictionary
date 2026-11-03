import { createVocabularyBatch, type BatchEntry } from "./batchFactory"

const entries: BatchEntry[] = [
  [
    "indication",
    "/ɪndɪˈkeɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "Something that serves to indicate or suggest.",
    "An indication of foul play."
  ],
  [
    "individual",
    "/ˌɪndɪˈvɪd͡ʒu.əl/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A single organism.",
    "“individual” means a single organism."
  ],
  [
    "industry",
    "/ˈɪndəstɹi/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "The organized action of making of goods and services for sale.",
    "American industry is making increased use of computers to control production."
  ],
  [
    "inflation",
    "/ɪnˈfleɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A general and progressive increase in prices.",
    "In inflation everything gets more valuable except money."
  ],
  [
    "influence",
    "/ˈɪn.flu.əns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A power to affect persons or events especially power based on prestige etc.",
    "Used her parents' influence to get the job."
  ],
  [
    "information",
    "/ˌɪnfəˈmeɪʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "B2",
    "A message received and understood.",
    "“information” means a message received and understood."
  ],
  [
    "infrastructure",
    "/ˈɪnfɹəˌstɹʌk(t)ʃɚ/",
    "Home",
    "Objects & equipment",
    "noun",
    "C1",
    "The basic structure or features of a system or organization.",
    "“infrastructure” means the basic structure or features of a system or organization."
  ],
  [
    "ingredient",
    "/ɪnˈɡɹiːdi.ənt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "A component of a mixture or compound.",
    "“ingredient” means a component of a mixture or compound."
  ],
  [
    "inhabitant",
    "/ɪnˈhæ.bɪ.tənt/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A person who inhabits a particular place.",
    "“inhabitant” means a person who inhabits a particular place."
  ],
  [
    "inhibition",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "(psychology) the conscious exclusion of unacceptable thoughts or desires.",
    "“inhibition” means (psychology) the conscious exclusion of unacceptable thoughts or desires."
  ],
  [
    "initial",
    "/ɪˈnɪʃəl/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "The first letter of a word (especially a person's name).",
    "He refused to put the initials FRS after his name."
  ],
  [
    "initiative",
    "/ɪˈnɪʃətɪv/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The first of a series of actions.",
    "“initiative” means the first of a series of actions."
  ],
  [
    "injection",
    "/ɪn.ˈdʒɛk.ʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The forceful insertion of a substance under pressure.",
    "“injection” means the forceful insertion of a substance under pressure."
  ],
  [
    "inn",
    "/ɪn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A hotel providing overnight lodging for travelers.",
    "“inn” means a hotel providing overnight lodging for travelers."
  ],
  [
    "innovation",
    "/ˌɪnəˈveɪʃən/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "A creation (a new device or process) resulting from study and experimentation.",
    "“innovation” means a creation (a new device or process) resulting from study and experimentation."
  ],
  [
    "inquest",
    "/ˈɪŋkwɛst/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "An inquiry into the cause of an unexpected death.",
    "“inquest” means an inquiry into the cause of an unexpected death."
  ],
  [
    "insect",
    "/ˈɪnsɛkt/",
    "Animals",
    "Animals & wildlife",
    "noun",
    "A2",
    "Small air-breathing arthropod.",
    "“insect” means small air-breathing arthropod."
  ],
  [
    "inside",
    "/ˈɪnsaɪd/",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "The region that is inside of something.",
    "“inside” means the region that is inside of something."
  ],
  [
    "insider",
    "/ɪnˈsaɪdɚ/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "An officer of a corporation or others who have access to private information about the corporation's operations.",
    "“insider” means an officer of a corporation or others who have access to private information about the corporation's operations."
  ],
  [
    "insight",
    "/ˈɪnsaɪt/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "The clear (and often sudden) understanding of a complex situation.",
    "“insight” means the clear (and often sudden) understanding of a complex situation."
  ],
  [
    "insistence",
    "/ɪnˈsɪstəns/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The act of insisting on something.",
    "Insistence on grammatical correctness is a conservative position."
  ],
  [
    "inspector",
    "/ɪnˈspɛktə/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "An investigator who observes carefully.",
    "The examiner searched for clues."
  ],
  [
    "inspiration",
    "/ɪnspɨˈɹeɪʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B2",
    "A sudden intuition as part of solving a problem.",
    "“inspiration” means a sudden intuition as part of solving a problem."
  ],
  [
    "instinct",
    "/ˈɪn.stɪŋkt/",
    "School",
    "Knowledge & ideas",
    "noun",
    "B1",
    "Inborn pattern of behavior often responsive to specific stimuli.",
    "The spawning instinct in salmon."
  ],
  [
    "institution",
    "/ˌɪnstɪˈtjuːʃən/",
    "Health",
    "Medicine & healthcare",
    "noun",
    "B2",
    "A hospital for mentally incompetent or unbalanced person.",
    "“institution” means a hospital for mentally incompetent or unbalanced person."
  ],
  [
    "instrument",
    "/ˈɪnstɹəmənt/",
    "Home",
    "Objects & equipment",
    "noun",
    "B2",
    "A device that requires skill for proper use.",
    "“instrument” means a device that requires skill for proper use."
  ],
  [
    "insurance",
    "/ɪn.ˈʃʊɹ.əns/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Protection against future loss.",
    "“insurance” means protection against future loss."
  ],
  [
    "integration",
    "/ɪntəˈɡɹeɪʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "The action of incorporating a racial or religious group into a community.",
    "“integration” means the action of incorporating a racial or religious group into a community."
  ],
  [
    "integrity",
    "/ɪnˈtɛɡɹəti/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "Moral soundness.",
    "He expects to find in us the common honesty and integrity of men of business."
  ],
  [
    "intelligence",
    "/ɪnˈtɛl.ɪ.d͡ʒəns/",
    "School",
    "Knowledge & ideas",
    "noun",
    "C1",
    "The ability to comprehend; to understand and profit from experience.",
    "“intelligence” means the ability to comprehend; to understand and profit from experience."
  ],
  [
    "intention",
    "/ɪnˈtɛnʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "An act of intending; a volition that you intend to carry out.",
    "My intention changed once I saw her."
  ],
  [
    "interaction",
    "/ˌɪntəɹˈækʃən/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B2",
    "A mutual or reciprocal action; interacting.",
    "“interaction” means a mutual or reciprocal action; interacting."
  ],
  [
    "interest",
    "/ˈɪntəɹɪst/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "A diversion that occupies one's time and thoughts (usually pleasantly).",
    "Sailing is her favorite pastime."
  ],
  [
    "interface",
    "/ˈɪntəfeɪs/",
    "Technology",
    "IT & computers",
    "noun",
    "B2",
    "(computer science) a program that controls a display for the user (usually on a computer monitor) and that allows the user to interact with the system.",
    "“interface” means (computer science) a program that controls a display for the user (usually on a computer monitor) and that allows the user to interact with the system."
  ],
  [
    "interference",
    "/ˌɪntəɹˈfiɹɨns/",
    "Home",
    "Objects & equipment",
    "noun",
    "C1",
    "Any obstruction that impedes or is burdensome.",
    "“interference” means any obstruction that impedes or is burdensome."
  ],
  [
    "intervention",
    "/ɪntɚˈvɛnʃən/",
    "Communication",
    "Language & communication",
    "noun",
    "C1",
    "A policy of intervening in the affairs of other countries.",
    "“intervention” means a policy of intervening in the affairs of other countries."
  ],
  [
    "invasion",
    "/ɪnˈveɪʒən/",
    "Community",
    "Events",
    "noun",
    "B1",
    "Any entry into an area not previously occupied.",
    "An invasion of tourists."
  ],
  [
    "investigation",
    "/ɪnˌvɛstəˈɡeɪʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "C1",
    "An inquiry into unfamiliar or questionable activities.",
    "There was a congressional probe into the scandal."
  ],
  [
    "investigator",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "C1",
    "Someone who investigates.",
    "“investigator” means someone who investigates."
  ],
  [
    "investment",
    "/ɪnˈvɛstmənt/",
    "Community",
    "Money & possessions",
    "noun",
    "B2",
    "Money that is invested with an expectation of profit.",
    "“investment” means money that is invested with an expectation of profit."
  ],
  [
    "iron",
    "/ˈaɪən/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A1",
    "A heavy ductile magnetic metallic element; is silver-white in pure form but readily rusts; used in construction and tools and armament; plays a role in the transport of oxygen by the blood.",
    "“iron” means a heavy ductile magnetic metallic element; is silver-white in pure form but readily rusts; used in construction and tools and armament; plays a role in the transport of oxygen by the blood."
  ],
  [
    "irony",
    "/ˈaɪə.ɹən.i/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "Witty language used to convey insults or scorn.",
    "Irony is wasted on the stupid."
  ],
  [
    "isolation",
    "/ˌaɪsəˈleɪʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B2",
    "A state of separation between persons or groups.",
    "“isolation” means a state of separation between persons or groups."
  ],
  [
    "issue",
    "/ˈɪsjuː/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "An important question that is in dispute and must be settled.",
    "The issue could be settled by requiring public education for everyone."
  ],
  [
    "item",
    "/ˈaɪtəm/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "An individual instance of a type of symbol.",
    "The word ‘error’ contains three tokens of ‘r’."
  ],
  [
    "ivory",
    "/ˈaɪv(ə)ɹi/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "A hard smooth ivory colored dentine that makes up most of the tusks of elephants and walruses.",
    "“ivory” means a hard smooth ivory colored dentine that makes up most of the tusks of elephants and walruses."
  ],
  [
    "jam",
    "Listen for pronunciation",
    "Food",
    "Food & cooking",
    "noun",
    "A1",
    "Preserve of crushed fruit.",
    "“jam” means preserve of crushed fruit."
  ],
  [
    "jar",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A cylindrical vessel, typically used for storing food.",
    "“jar” means a cylindrical vessel, typically used for storing food."
  ],
  [
    "jaw",
    "/d͡ʒɔː/",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "The part of the skull of a vertebrate that frames the mouth and holds the teeth.",
    "“jaw” means the part of the skull of a vertebrate that frames the mouth and holds the teeth."
  ],
  [
    "jazz",
    "/d͡ʒæz/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A genre of popular music that originated in New Orleans around 1900 and developed through increasingly complex styles.",
    "“jazz” means a genre of popular music that originated in New Orleans around 1900 and developed through increasingly complex styles."
  ],
  [
    "jelly",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A2",
    "Any substance having the consistency of jelly or gelatin.",
    "“jelly” means any substance having the consistency of jelly or gelatin."
  ],
  [
    "jet",
    "Listen for pronunciation",
    "Community",
    "Events",
    "noun",
    "A1",
    "The occurrence of a sudden discharge (as of liquid).",
    "“jet” means the occurrence of a sudden discharge (as of liquid)."
  ],
  [
    "jewel",
    "/ˈdʒuːəl/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "A precious or semiprecious stone incorporated into a piece of jewelry.",
    "“jewel” means a precious or semiprecious stone incorporated into a piece of jewelry."
  ],
  [
    "job",
    "/d͡ʒɒb/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A1",
    "A specific piece of work required to be done as a duty or for a specific fee.",
    "Estimates of the city's loss on that job ranged as high as a million dollars."
  ],
  [
    "jockey",
    "/ˈdʒɒki/",
    "People",
    "People & roles",
    "noun",
    "A2",
    "Someone employed to ride horses in horse races.",
    "“jockey” means someone employed to ride horses in horse races."
  ],
  [
    "joke",
    "/dʒəʊk/",
    "Communication",
    "Language & communication",
    "noun",
    "A1",
    "A humorous anecdote or remark intended to provoke laughter.",
    "He told a very funny joke."
  ],
  [
    "journal",
    "/ˈd͡ʒɝnəl/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A periodical dedicated to a particular subject.",
    "He reads the medical journals."
  ],
  [
    "joy",
    "Listen for pronunciation",
    "People",
    "Feelings & emotions",
    "noun",
    "A1",
    "The emotion of great happiness.",
    "“joy” means the emotion of great happiness."
  ],
  [
    "judge",
    "Listen for pronunciation",
    "People",
    "People & roles",
    "noun",
    "A2",
    "A public official authorized to decide questions brought before a court of justice.",
    "“judge” means a public official authorized to decide questions brought before a court of justice."
  ],
  [
    "judgment",
    "/ˈdʒʌdʒ.mənt/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "B1",
    "(law) the determination by a court of competent jurisdiction on matters submitted to it.",
    "“judgment” means (law) the determination by a court of competent jurisdiction on matters submitted to it."
  ],
  [
    "jump",
    "Listen for pronunciation",
    "Community",
    "Events",
    "noun",
    "A1",
    "A sudden and decisive increase.",
    "A jump in attendance."
  ],
  [
    "junction",
    "/ˈdʒʌŋkʃən/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "The place where two or more things come together.",
    "“junction” means the place where two or more things come together."
  ],
  [
    "jurisdiction",
    "/d͡ʒʊɹɪsˈdɪkʃən/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "C1",
    "(law) the right and power to interpret and apply the law.",
    "Courts having jurisdiction in this district."
  ],
  [
    "jury",
    "Listen for pronunciation",
    "Community",
    "Groups & organizations",
    "noun",
    "A1",
    "A body of citizens sworn to give a true verdict according to the evidence presented in a court of law.",
    "“jury” means a body of citizens sworn to give a true verdict according to the evidence presented in a court of law."
  ],
  [
    "justice",
    "/ˈdʒʌstɪs/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "The quality of being just or fair.",
    "“justice” means the quality of being just or fair."
  ],
  [
    "justification",
    "/ˌdʒʌstɪfɪˈkeɪʃən/",
    "School",
    "Knowledge & ideas",
    "noun",
    "C1",
    "Something (such as a fact or circumstance) that shows an action to be reasonable or necessary.",
    "He considered misrule a justification for revolution."
  ],
  [
    "key",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Metal device shaped in such a way that when it is inserted into the appropriate lock the lock's mechanism can be rotated.",
    "“key” means metal device shaped in such a way that when it is inserted into the appropriate lock the lock's mechanism can be rotated."
  ],
  [
    "kick",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "The sudden stimulation provided by strong drink (or certain drugs).",
    "A sidecar is a smooth drink but it has a powerful kick."
  ],
  [
    "kidney",
    "/ˈkɪdni/",
    "Health",
    "Body & anatomy",
    "noun",
    "A2",
    "Either of two bean-shaped excretory organs that filter wastes (especially urea) from the blood and excrete them and water in urine.",
    "Urine passes out of the kidney through ureters to the bladder."
  ],
  [
    "king",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "(chess) the weakest but the most important piece.",
    "“king” means (chess) the weakest but the most important piece."
  ],
  [
    "kingdom",
    "/ˈkɪŋdəm/",
    "Community",
    "Groups & organizations",
    "noun",
    "B1",
    "A monarchy with a king or queen as head of state.",
    "“kingdom” means a monarchy with a king or queen as head of state."
  ],
  [
    "kinship",
    "Listen for pronunciation",
    "Communication",
    "General academic vocabulary",
    "noun",
    "B1",
    "(anthropology) relatedness or connection by blood or marriage or adoption.",
    "“kinship” means (anthropology) relatedness or connection by blood or marriage or adoption."
  ],
  [
    "kit",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Gear consisting of a set of articles or tools for a specified purpose.",
    "“kit” means gear consisting of a set of articles or tools for a specified purpose."
  ],
  [
    "kite",
    "/kaɪt/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Plaything consisting of a light frame covered with tissue paper; flown in wind at end of a string.",
    "“kite” means plaything consisting of a light frame covered with tissue paper; flown in wind at end of a string."
  ],
  [
    "knife",
    "/naɪf/",
    "Home",
    "Objects & equipment",
    "noun",
    "A2",
    "Edge tool used as a cutting instrument; has a pointed blade with a sharp edge and a handle.",
    "“knife” means edge tool used as a cutting instrument; has a pointed blade with a sharp edge and a handle."
  ],
  [
    "knot",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "Any of various fastenings formed by looping and tying a rope (or cord) upon itself or to another rope or to another object.",
    "“knot” means any of various fastenings formed by looping and tying a rope (or cord) upon itself or to another rope or to another object."
  ],
  [
    "knowledge",
    "/ˈnɒlɪdʒ/",
    "School",
    "University & academic English",
    "noun",
    "B2",
    "The psychological result of perception and learning and reasoning.",
    "“knowledge” means the psychological result of perception and learning and reasoning."
  ],
  [
    "label",
    "/ˈleɪbəl/",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "An identifying or descriptive marker that is attached to an object.",
    "“label” means an identifying or descriptive marker that is attached to an object."
  ],
  [
    "labour",
    "/ˈleɪ.bə/",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "Productive work (especially physical work done for wages).",
    "His labor did not require a great deal of skill."
  ],
  [
    "labourer",
    "/ˈleɪ.bə.ɹə/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "Someone who works with their hands; someone engaged in manual labor.",
    "“labourer” means someone who works with their hands; someone engaged in manual labor."
  ],
  [
    "lace",
    "Listen for pronunciation",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A delicate decorative fabric woven in an open web of symmetrical patterns.",
    "“lace” means a delicate decorative fabric woven in an open web of symmetrical patterns."
  ],
  [
    "lack",
    "/lak/",
    "Communication",
    "General academic vocabulary",
    "noun",
    "A1",
    "The state of needing something that is absent or unavailable.",
    "There is a serious lack of insight into the problem."
  ],
  [
    "lady",
    "/ˈleɪdi/",
    "People",
    "People & roles",
    "noun",
    "A1",
    "A polite name for any woman.",
    "A nice lady at the library helped me."
  ],
  [
    "land",
    "Listen for pronunciation",
    "Community",
    "Money & possessions",
    "noun",
    "A1",
    "Extensive landed property (especially in the country) retained by the owner for their own use.",
    "The family owned a large estate on Long Island."
  ],
  [
    "landlord",
    "/ˈlænd.lɔːd/",
    "People",
    "People & roles",
    "noun",
    "B1",
    "A landowner who leases to others.",
    "“landlord” means a landowner who leases to others."
  ],
  [
    "landowner",
    "/ˈlændˌəʊ.nə/",
    "People",
    "People & roles",
    "noun",
    "B2",
    "A holder or proprietor of land.",
    "“landowner” means a holder or proprietor of land."
  ],
  [
    "landscape",
    "/ˈlandskeɪp/",
    "Places",
    "Places & locations",
    "noun",
    "B2",
    "An expanse of scenery that can be seen in a single view.",
    "“landscape” means an expanse of scenery that can be seen in a single view."
  ],
  [
    "lane",
    "/leɪn/",
    "Home",
    "Objects & equipment",
    "noun",
    "A1",
    "A narrow way or road.",
    "“lane” means a narrow way or road."
  ],
  [
    "language",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A systematic means of communicating by the use of sounds or conventional symbols.",
    "The language introduced is standard throughout the text."
  ],
  [
    "lap",
    "Listen for pronunciation",
    "Health",
    "Body & anatomy",
    "noun",
    "A1",
    "The upper side of the thighs of a seated person.",
    "He picked up the little girl and plopped her down in his lap."
  ],
  [
    "laser",
    "/ˈleɪz.ə(ɹ)/",
    "Jobs",
    "Architecture & construction",
    "noun",
    "A2",
    "An acronym for light amplification by stimulated emission of radiation; an optical device that produces an intense monochromatic beam of coherent light.",
    "“laser” means an acronym for light amplification by stimulated emission of radiation; an optical device that produces an intense monochromatic beam of coherent light."
  ],
  [
    "laundry",
    "/ˈlɔːn.dɹi/",
    "Home",
    "Objects & equipment",
    "noun",
    "B1",
    "Garments or white goods that can be cleaned by laundering.",
    "“laundry” means garments or white goods that can be cleaned by laundering."
  ],
  [
    "law",
    "Listen for pronunciation",
    "School",
    "Knowledge & ideas",
    "noun",
    "A1",
    "A rule or body of rules of conduct inherent in human nature and essential to or binding upon human society.",
    "“law” means a rule or body of rules of conduct inherent in human nature and essential to or binding upon human society."
  ],
  [
    "lawn",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "A1",
    "A field of cultivated and mowed grass.",
    "“lawn” means a field of cultivated and mowed grass."
  ],
  [
    "layer",
    "Listen for pronunciation",
    "Places",
    "Places & locations",
    "noun",
    "A2",
    "A relatively thin sheetlike expanse or region lying over or under another.",
    "“layer” means a relatively thin sheetlike expanse or region lying over or under another."
  ],
  [
    "layout",
    "/ˈleɪ.aʊt/",
    "School",
    "Knowledge & ideas",
    "noun",
    "A2",
    "A plan or design of something that is laid out.",
    "“layout” means a plan or design of something that is laid out."
  ],
  [
    "lead",
    "/liːd/",
    "Daily Activities",
    "Actions & activities",
    "adjective",
    "A1",
    "A position of being the initiator of something and an example that others will follow (especially in the phrase ‘take the lead’).",
    "He takes the lead in any group."
  ],
  [
    "leaflet",
    "/ˈliːflɪt/",
    "Communication",
    "Language & communication",
    "noun",
    "B1",
    "A small book usually having a paper cover.",
    "“leaflet” means a small book usually having a paper cover."
  ],
  [
    "lease",
    "Listen for pronunciation",
    "Communication",
    "Language & communication",
    "noun",
    "A2",
    "A contract granting use or occupation of property during a specified time for a specified payment.",
    "“lease” means a contract granting use or occupation of property during a specified time for a specified payment."
  ],
  [
    "leave",
    "Listen for pronunciation",
    "Daily Activities",
    "Actions & activities",
    "noun",
    "A2",
    "The act of departing politely.",
    "He took his leave."
  ]
]

const source = "Open English WordNet 2025 and Princeton Core WordNet; provisional CEFR and topic mapping; educator review required"

export const batch023 = createVocabularyBatch({
  id: "batch-023",
  source,
  entries,
})

export const batch023Metadata = {
  id: "batch-023",
  title: "Open English WordNet core vocabulary 1401–1500",
  addedWords: batch023.length,
  reviewStatus: "educator-review-required" as const,
  source,
}
