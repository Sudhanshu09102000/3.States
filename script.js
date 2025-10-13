const totalQuestions = 209;
let currentQuestion = 1;
const answers = {};
let totalSeconds = 0;

const questions = {
  
   1: {
    text: "Who is the Chief Minister of Bihar?",
    options: ["Pema Khandu", "Nayab Singh Saini", "Nitish Kumar", "Siddaramaiah"],
    correct: "3"
  },
  2: {
    text: "Who is the Governor of Bihar?",
    options: ["Arif Mohammad Khan", "Ramesh Bais", "C. P. Radhakrishnan", "Thaawarchand Gehlot"],
    correct: "1"
  },
  3: {
    text: "What campaign was launched in Bihar to educate women about government schemes?",
    options: ["Mahila Udyamita", "Balika Suraksha", "Mahila Samvad", "Matr Shakti"],
    correct: "3"
  },
  4: {
    text: "What is the aim of the Mahila Samvad campaign in Bihar?",
    options: ["To reach 50 lakh women", "To reach 2 crore women across 70,000 locations", "To provide financial aid to widows", "To distribute free education kits"],
    correct: "2"
  },
  5: {
    text: "In which district will Bihar's second tiger reserve be established?",
    options: ["Gaya", "Kaimur", "Nalanda", "Patna"],
    correct: "2"
  },
  6: {
    text: "Which is the existing tiger reserve in Bihar?",
    options: ["Valmiki Tiger Reserve", "Bandhavgarh Tiger Reserve", "Sundarban Tiger Reserve", "Similipal Tiger Reserve"],
    correct: "1"
  },
  7: {
    text: "What is the total number of tiger reserves in India?",
    options: ["56", "57", "58", "59"],
    correct: "3"
  },
  8: {
    text: "Which tiger reserve was recently declared in Chhattisgarh?",
    options: ["Bandhavgarh", "Guru Ghasidas—Tamor Pingla", "Ratapani", "Madhav"],
    correct: "2"
  },
  9: {
    text: "Which tiger reserve was recently declared in Madhya Pradesh?",
    options: ["Sanjay Dubri", "Nauradehi", "Ratapani", "Bor"],
    correct: "3"
  },
  10: {
    text: "Which tiger reserve became the 58th in India on March 8, 2025?",
    options: ["Madhav Tiger Reserve", "Kanha Tiger Reserve", "Similipal Tiger Reserve", "Panna Tiger Reserve"],
    correct: "1"
  },
  11: {
    text: "Who is the Chief Minister of Haryana?",
    options: ["Nitish Kumar", "Nayab Singh Saini", "Arvind Kejriwal", "Yogi Adityanath"],
    correct: "2"
  },
  12: {
    text: "Who is the Governor of Haryana?",
    options: ["Bandaru Dattatreya", "Arif Mohammad Khan", "Anusuiya Uikey", "Ramesh Bais"],
    correct: "1"
  },
  13: {
    text: "Where was India's first Constitution museum established?",
    options: ["Bengaluru", "Kolkata", "Sonipat", "Jaipur"],
    correct: "3"
  },
  14: {
    text: "Which scheme was launched by PM Modi in Haryana to empower women as LIC agents?",
    options: ["Mahila Samvad", "Bima Sakhi Yojana", "Ujjwala Yojana", "Sukanya Samriddhi Yojana"],
    correct: "2"
  },
  15: {
    text: "What AI-powered chatbot was launched by the CM of Haryana for enhanced citizen engagement?",
    options: ["Charioteer", "Sarathi", "Mitra", "Sakshi"],
    correct: "2"
  },
  16: {
    text: "Which scheme was introduced by the Haryana government to support senior artists and art scholars?",
    options: ["Kala Samman Yojana", "Rangmanch Samarth Yojana", "Pandit Lakhmi Chand Kalakar Samajik Samman Yojana", "Kala Utsav Yojana"],
    correct: "3"
  },
  17: {
    text: "Which state first offered a 20% reservation in police jobs for Agniveers?",
    options: ["Maharashtra", "Rajasthan", "Haryana", "Punjab"],
    correct: "3"
  },
  18: {
    text: "Which two sites in Haryana were declared protected monuments?",
    options: ["Rakhigarhi and Kalibangan", "Mitathal and Tighrana", "Dholavira and Lothal", "Banawali and Harappa"],
    correct: "2"
  },
  19: {
    text: "Where is North India's first nuclear power plant being established?",
    options: ["Patiala", "Gorakhpur", "Hisar", "Kurukshetra"],
    correct: "2"
  },
  20: {
    text: "Which campaign was launched by the Haryana government to provide soil health cards to farmers?",
    options: ["Soil Suraksha", "Har Khet - Swasth Khet", "Kisan Samriddhi", "Fasal Bima"],
    correct: "2"
  },
   21: {
    text: "Who is the Chief Minister of Karnataka?",
    options: ["Nayab Singh Saini", "Nitish Kumar", "Siddaramaiah", "Shivraj Singh Chouhan"],
    correct: "3"
  },
  22: {
    text: "Who is the Governor of Karnataka?",
    options: ["Bandaru Dattatreya", "Thawar Chand Gehlot", "Arif Mohammad Khan", "C. P. Radhakrishnan"],
    correct: "2"
  },
  23: {
    text: "Which scheme was launched in Karnataka to supply clean drinking water in Bengaluru using GPS-tracked tankers?",
    options: ["Sanchar Kaveri Scheme", "Nal Jal Scheme", "Har Ghar Jal", "Amrit Jal Yojana"],
    correct: "1"
  },
  24: {
    text: "Which scheme in Karnataka enables urban poor and middle-class families to pay for new water connections in installments?",
    options: ["Saral Jal", "Sarala Cauvery", "Amrit Jal", "Nagarik Jal"],
    correct: "2"
  },
   25: {
    text: "Who is the Chief Minister of Arunachal Pradesh?",
    options: ["Siddaramaiah", "Nitish Kumar", "Pema Khandu", "Nayab Singh Saini"],
    correct: "3"
  },
  26: {
    text: "Who is the Governor of Arunachal Pradesh?",
    options: ["Bandaru Dattatreya", "Arif Mohammad Khan", "Kaiwalya Trivikram Parnaik", "Thawar Chand Gehlot"],
    correct: "3"
  },
  27: {
    text: "Which festival is known as the Kumbh of North East, celebrated in Arunachal Pradesh?",
    options: ["Losar Festival", "Parashuram Kund Mela", "Sangai Festival", "Hornbill Festival"],
    correct: "2"
  },
  28: {
    text: "Which city has become India's first geothermal powered city?",
    options: ["Dirang", "Tawang", "Bomdila", "Itanagar"],
    correct: "1"
  },
  29: {
    text: "Which national park has been recognized as India's second-largest butterfly diversity hub?",
    options: ["Kaziranga National Park", "Namdapha National Park", "Manas National Park", "Jim Corbett National Park"],
    correct: "1"
  },
  30: {
    text: "In which year was Kaziranga National Park declared a UNESCO World Heritage Site?",
    options: ["1975", "1985", "1990", "2000"],
    correct: "2"
  },
  31: {
    text: "Kaziranga National Park is renowned for which animal?",
    options: ["Asiatic Lion", "Snow Leopard", "One-horned Rhinoceros", "Wild Buffalo"],
    correct: "3"
  },
  32: {
    text: "Which two areas in Arunachal Pradesh were declared Eco-Sensitive Zones in 2025?",
    options: ["Pakke & Sessa", "Namdapha & Kamlang", "Mouling & Mehao", "Dampa & Balpakram"],
    correct: "2"
  },
  33: {
    text: "Namdapha National Park is located in which district of Arunachal Pradesh?",
    options: ["Lohit", "West Kameng", "Changlang", "Shi Yomi"],
    correct: "3"
  },
  34: {
    text: "Kamlang Wildlife Sanctuary & Tiger Reserve is located in which district of Arunachal Pradesh?",
    options: ["Lohit", "Changlang", "Tirap", "East Siang"],
    correct: "1"
  },
  35: {
    text: "Under which act are Eco-Sensitive Zones notified?",
    options: ["Wildlife Protection Act, 1972", "Environment (Protection) Act, 1986", "Forest Rights Act, 2006", "Biological Diversity Act, 2002"],
    correct: "2"
  },
  36: {
    text: "Which hydro electric project was inaugurated in Shi Yomi District of Arunachal Pradesh?",
    options: ["Subansiri HEP", "Heo & Tato-I HEP", "Ranganadi HEP", "Dibang HEP"],
    correct: "2"
  },
  37: {
    text: "Who is the Chief Minister of Madhya Pradesh?",
    options: ["Nitish Kumar", "Mohan Yadav", "Shivraj Singh Chouhan", "Siddaramaiah"],
    correct: "2"
  },
  38: {
    text: "Who is the Governor of Madhya Pradesh?",
    options: ["Mangubhai C. Patel", "Bandaru Dattatreya", "Arif Mohammad Khan", "Thawar Chand Gehlot"],
    correct: "1"
  },
  39: {
    text: "What is the aim of the 'Swami Vivekananda Yuva Shakti Mission' launched in Madhya Pradesh?",
    options: ["To employ 70% youth by 2028 and provide education up to class 12th by 2030", "To double farmer income by 2028", "To make MP ODF free", "To achieve 100% digital literacy"],
    correct: "1"
  },
  40: {
    text: "Which city banned begging from January 1, 2025, with legal action against givers of alms?",
    options: ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
    correct: "2"
  },
  41: {
    text: "Which wildlife sanctuary was declared India's 57th Tiger Reserve?",
    options: ["Bandhavgarh", "Ratapani", "Kanha", "Panna"],
    correct: "2"
  },
  42: {
    text: "Which national park was approved as the 9th Tiger Reserve of Madhya Pradesh?",
    options: ["Madhav National Park", "Sanjay Dubri", "Pench", "Satpura"],
    correct: "1"
  },
  43: {
    text: "Which education campaign was launched in Madhya Pradesh to encourage school attendance?",
    options: ["Padhega Bharat", "School Chale Hum", "Sarva Shiksha Abhiyan", "Shiksha Setu"],
    correct: "2"
  },
  44: {
    text: "What new name was given to CM Rise Schools in Madhya Pradesh?",
    options: ["Swami Vivekananda Vidyalaya", "Maharishi Sandipani Vidyalaya", "Dayanand Vidyalaya", "Mahatma Gandhi Vidyalaya"],
    correct: "2"
  },
  45: {
    text: "Which version of the Education Portal was launched by the MP Government?",
    options: ["1.0", "2.0", "3.0", "4.0"],
    correct: "3"
  },
  46: {
    text: "Where was India's first white tiger breeding centre approved?",
    options: ["Bhopal", "Rewa", "Indore", "Ujjain"],
    correct: "2"
  },
  47: {
    text: "What does PARTH Yojana in Madhya Pradesh stand for?",
    options: ["Police Army Recruitment Training & Hunar", "Police and Army Rural Training Hub", "Patriotic Army Recruitment Training Help", "Police Army Research Training House"],
    correct: "1"
  },
  48: {
    text: "Where were Pink Alarms installed in Madhya Pradesh to ensure women's safety?",
    options: ["Railway Stations", "Government Hospitals and Medical Colleges", "Public Buses", "Police Stations"],
    correct: "2"
  },
  49: {
    text: "What percentage of reservation for women in all state government recruitments was approved in Madhya Pradesh?",
    options: ["25%", "30%", "35%", "40%"],
    correct: "3"
  },
  50: {
    text: "Which festival in Gwalior set a Guinness World Record for the largest Hindustani classical band?",
    options: ["Khajuraho Dance Festival", "Tansen Music Festival", "Bhopal Utsav", "Indore Mahotsav"],
    correct: "2"
  },
  51: {
    text: "How many artists performed during the 100th Tansen Samaroh at Gwalior Fort?",
    options: ["400", "500", "546", "600"],
    correct: "3"
  },
  52: {
    text: "Which ragas composed by Tansen were performed at the 100th Tansen Samaroh?",
    options: ["Malhar, Miyan ki Todi & Darbari Kanhra", "Bhairav, Yaman & Desh", "Bageshri, Kafi & Bhimpalasi", "Todi, Multani & Marwa"],
    correct: "1"
  },
  53: {
    text: "Who received the Rashtriya Tansen Samman for 2023?",
    options: ["Pt. Ravi Shankar", "Pt. Swapan Chaudhuri", "Zakir Hussain", "Hariprasad Chaurasia"],
    correct: "2"
  },
  54: {
    text: "Where did PM Modi inaugurate the 'Lal Tipara Gaushala' with a Bio-CNG plant in Madhya Pradesh?",
    options: ["Indore", "Bhopal", "Gwalior", "Jabalpur"],
    correct: "3"
  },
   55: {
    text: "Who is the Chief Minister of Uttar Pradesh?",
    options: ["Anandiben Patel", "Nitish Kumar", "Yogi Adityanath", "Shivraj Singh Chouhan"],
    correct: "3"
  },
  56: {
    text: "Who is the Governor of Uttar Pradesh?",
    options: ["Anandiben Patel", "Bandaru Dattatreya", "Mangubhai C. Patel", "Thawar Chand Gehlot"],
    correct: "1"
  },
  57: {
    text: "Where has the world’s first 52 feet tall Mahamrityunjaya Yantra been installed?",
    options: ["Kashi Vishwanath Temple", "Ayodhya Ram Mandir", "Tapovan Ashram, Prayagraj", "Mathura Vrindavan"],
    correct: "3"
  },
  58: {
    text: "India’s first Vistadome jungle safari train was launched in which state?",
    options: ["Madhya Pradesh", "Uttarakhand", "Uttar Pradesh", "Chhattisgarh"],
    correct: "3"
  },
  59: {
    text: "The Vistadome jungle safari train connects Katarniaghat Wildlife Sanctuary with which Tiger Reserve?",
    options: ["Kanha Tiger Reserve", "Bandhavgarh Tiger Reserve", "Dudhwa Tiger Reserve", "Pilibhit Tiger Reserve"],
    correct: "3"
  },
  60: {
    text: "What is the theme of UP’s eco-tourism plan connecting forests?",
    options: ["One State, Many Forests", "One Destination, Three Forests", "Nature First", "Green UP Mission"],
    correct: "2"
  },
  61: {
    text: "What does the RISE app launched in Uttar Pradesh stand for?",
    options: [
      "Rapid Immunisation Skill Enhancement",
      "Rural Immunisation Safety Enhancement",
      "Research in Skill Education",
      "Rapid Infrastructure Skill Efficiency"
    ],
    correct: "1"
  },
  62: {
    text: "Who is the main target group of the RISE app?",
    options: ["School children", "Doctors", "Nurses, ANMs, and health workers", "Anganwadi supervisors"],
    correct: "3"
  },
  63: {
    text: "The 'Zero Poverty Mission' in Uttar Pradesh has been named after whom?",
    options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Atal Bihari Vajpayee", "Swami Vivekananda"],
    correct: "2"
  },
  64: {
    text: "When was the 'Zero Poverty Mission' launched in Uttar Pradesh?",
    options: ["15th August 2024", "2nd October 2024", "26th January 2025", "14th April 2024"],
    correct: "2"
  },
  65: {
    text: "Which scheme was approved by the UP government to provide subsidies on loans for microenterprises?",
    options: ["Mukhyamantri Yuva Udyami Vikas Abhiyan", "Startup UP Mission", "Yuva Shakti Rozgar Yojana", "Mission Rojgar"],
    correct: "1"
  },
  66: {
    text: "Which AI-based chatbot was launched for Maha Kumbh 2025 pilgrims?",
    options: ["Sarathi", "Sah’Alyak", "Kumbhvani", "SevakBot"],
    correct: "2"
  },
  67: {
    text: "Which FM channel was launched by UP CM Yogi Adityanath for Maha Kumbh 2025?",
    options: ["Radio Mahakumbh", "AIR Kumbh", "Kumbhvani", "Voice of Prayagraj"],
    correct: "3"
  },
  68: {
    text: "Which state won Judges’ Choice for Best Tableaux at Republic Day Parade 2025?",
    options: ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh", "Gujarat"],
    correct: "3"
  },
  69: {
    text: "What was the theme of Uttar Pradesh’s Republic Day 2025 tableau?",
    options: [
      "Ram Mandir: Ekta aur Virasat",
      "Mahakumbh 2025 – Swarnim Bharat: Virasat aur Vikas",
      "Heritage and Development",
      "Unity in Diversity"
    ],
    correct: "2"
  },
  70: {
    text: "The ‘Atal Yuva Maha Kumbh’ in Lucknow was inaugurated to mark the birth centenary of which leader?",
    options: ["Atal Bihari Vajpayee", "Lal Bahadur Shastri", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
    correct: "1"
  },
  71: {
    text: "December 25, the birth anniversary of Atal Bihari Vajpayee, is also observed as?",
    options: ["National Unity Day", "Good Governance Day", "Samvidhan Diwas", "National Youth Day"],
    correct: "2"
  },
  72: {
    text: "Where was the world’s first Asian King Vulture Conservation and Breeding Centre established?",
    options: ["Lucknow", "Kanpur", "Maharajganj", "Varanasi"],
    correct: "3"
  },
  73: {
    text: "What is the IUCN status of the Asian King Vulture?",
    options: ["Endangered", "Critically Endangered", "Near Threatened", "Vulnerable"],
    correct: "2"
  },
  74: {
    text: "What is the official name of the Asian King Vulture Breeding Centre in Uttar Pradesh?",
    options: ["Vulture Rescue Centre", "Jatayu Conservation and Breeding Centre", "Shivansh Bird Sanctuary", "Kumbh Bird Conservation Centre"],
    correct: "2"
  },
   75: {
    text: "Who is the Chief Minister of Chhattisgarh?",
    options: ["Hemant Soren", "Vishnu Deo Sai", "Bhupesh Baghel", "Shivraj Singh Chouhan"],
    correct: "2"
  },
  76: {
    text: "Who is the Governor of Chhattisgarh?",
    options: ["Ramesh Bais", "Ramen Deka", "Bandaru Dattatreya", "Mangubhai C. Patel"],
    correct: "2"
  },
  77: {
    text: "What financial support is provided under the 'Annual Aid Scheme' launched in Chhattisgarh?",
    options: ["₹5,000 annually", "₹7,500 annually", "₹10,000 annually", "₹15,000 annually"],
    correct: "3"
  },
  78: {
    text: "Which city hosted the 57th Annual Convention of the Indian Water Works Association (IWWA) in 2025?",
    options: ["Bhubaneswar", "Bhopal", "Raipur", "Ranchi"],
    correct: "3"
  },
  79: {
    text: "What is the popular name of the 57th Annual Convention of IWWA held in Raipur?",
    options: ["Water Conservation Summit", "Water Vision 2047", "Water 360 Degrees", "Jal Jagar Mahotsav"],
    correct: "3"
  },
  80: {
    text: "Which scheme was launched in Chhattisgarh for the welfare of farm laborers?",
    options: [
      "Deendayal Upadhyay Krishi Majdoor Kalyan Yojana",
      "Mukhyamantri Shramik Suraksha Yojana",
      "Krishi Shramik Samman Yojana",
      "Kisan Shramik Vikas Abhiyan"
    ],
    correct: "1"
  },
  81: {
    text: "Which Tiger Reserve in Chhattisgarh was declared the 56th Tiger Reserve of India?",
    options: ["Indravati Tiger Reserve", "Achanakmar Tiger Reserve", "Guru Ghasidas-Tamor Pingla", "Barnawapara Tiger Reserve"],
    correct: "3"
  },
  82: {
    text: "Guru Ghasidas-Tamor Pingla Tiger Reserve ranks as the __ largest tiger reserve in India.",
    options: ["First", "Second", "Third", "Fourth"],
    correct: "3"
  },
  83: {
    text: "Which village in Bastar, Chhattisgarh, was selected by UNWTO for its Best Tourism Village Upgrade programme?",
    options: ["Narayanpur", "Dudmar", "Dhudmaras", "Kondagaon"],
    correct: "3"
  },
  84: {
    text: "Where was the Jal-Jagar Mahotsav inaugurated by Chhattisgarh CM?",
    options: [
      "Hasdeo Bango Dam, Korba",
      "Ravishankar Reservoir, Gangrel Dam, Dhamtari",
      "Indravati River Basin, Bijapur",
      "Barnawapara Sanctuary, Mahasamund"
    ],
    correct: "2"
  },
  85: {
    text: "What was the main aim of the Jal-Jagar Mahotsav?",
    options: [
      "Promote cultural tourism",
      "Raise awareness about water and environmental conservation",
      "Encourage organic farming",
      "Boost renewable energy adoption"
    ],
    correct: "2"
  },
  86: {
    text: "Which state became the first in India to adopt the Green GDP model?",
    options: ["Uttarakhand", "Madhya Pradesh", "Chhattisgarh", "Kerala"],
    correct: "3"
  },
  87: {
    text: "According to the World Bank, Green GDP is calculated as:",
    options: [
      "GDP – Depreciation of Produced Assets",
      "NDP – Cost of Natural Resource Depletion + Cost of Ecosystem Degradation",
      "NDP + Cost of Natural Resource Depletion + Cost of Ecosystem Degradation",
      "GDP + Environmental Growth Rate"
    ],
    correct: "3"
  },
  88: {
    text: "In Green GDP calculation, NDP is derived from:",
    options: [
      "GDP – Depreciation of Produced Assets",
      "GDP + Depreciation of Produced Assets",
      "GDP × Depreciation Rate",
      "GDP ÷ Natural Resources Index"
    ],
    correct: "1"
  },
  89: {
    text: "Who is the Chief Minister of Odisha?",
    options: ["Nitish Kumar", "Pema Khandu", "Mohan Charan Majhi", "Siddaramaiah"],
    correct: "3"
  },
90: {
    text: "Which state topped the first-ever Fiscal Health Index (FHI) 2025 released by NITI Aayog?",
    options: ["Odisha", "Bihar", "Rajasthan", "Kerala"],
    correct: "1"
  },
91: {
    text: "Which two states were theme states at the 38th Surajkund International Crafts Mela 2025?",
    options: ["Odisha and Rajasthan", "Punjab and Haryana", "Gujarat and Maharashtra", "Kerala and Tamil Nadu"],
    correct: "1"
  },
92: {
    text: "How many leopards were reported in Odisha's first-ever leopard census?",
    options: ["500", "696", "842", "920"],
    correct: "2"
  },
93: {
    text: "Where was the 9th National Health Summit inaugurated by Union Health Minister J.P. Nadda?",
    options: ["Bhubaneswar", "Cuttack", "Puri", "Rourkela"],
    correct: "3"
  },
94: {
    text: "Which scheme was launched by Odisha CM Mohan Charan Majhi to promote educational continuity among tribal students?",
    options: ["Biju Swasthya Kalyan Yojana", "Shahid Madho Singh Haath Kharcha Scheme", "KALIA Scheme", "Subhadra Yojana"],
    correct: "2"
  },
95: {
    text: "What is the one-time incentive provided under the Shahid Madho Singh Haath Kharcha Scheme?",
    options: ["₹10,000", "₹7,500", "₹5,000", "₹12,000"],
    correct: "3"
  },
96: {
    text: "Which has been declared the 107th National Park of India and the second National Park of Odisha after Bhitarkanika?",
    options: ["Nandankanan", "Satkosia", "Similipal", "Debrigarh"],
    correct: "3"
  },
  97: {
    text: "Who is the Chief Minister of Tripura?",
    options: ["Manik Saha", "Mohan Charan Majhi", "Nitish Kumar", "Pema Khandu"],
    correct: "1"
  },
98: {
    text: "Who is the Governor of Tripura?",
    options: ["Arif Mohammad Khan", "Indra Sena Reddy Nallu", "C. R. Patil", "Hari Babu Kambhampati"],
    correct: "2"
  },
99: {
    text: "Which schemes were launched by JP Nadda in Tripura?",
    options: ["Mukhyamantri Balika Samriddhi Yojana and Kanya Atmanirbhar Yojana", "Lakshmi Bhandar and Krishak Bandhu", "Shahid Madho Singh Haath Kharcha and Subhadra Yojana", "Swamitva Yojana and PM-eDrive Scheme"],
    correct: "1"
  },
  100: {
    text: "Who is the Chief Minister of Odisha elected in 2024?",
    options: ["Nitish Kumar", "Mohan Charan Majhi", "Pema Khandu", "Manik Saha"],
    correct: "2"
  },
101: {
    text: "Who is the Governor of Odisha appointed in 2025?",
    options: ["Arif Mohammad Khan", "Dr Hari Babu Kambhampati", "Dr. S Roy", "Indra Sena Reddy Nallu"],
    correct: "2"
  },
102: {
    text: "Which state topped the Fiscal Health Index 2025 released by NITI Aayog?",
    options: ["Bihar", "Kerala", "Odisha", "Rajasthan"],
    correct: "3"
  },
103: {
    text: "How much financial assistance is provided under the Subhadra Yojana of Odisha?",
    options: ["₹25,000", "₹1,00,000", "₹50,000", "₹75,000"],
    correct: "3"
  },
104: {
    text: "Which state was the theme state at the 38th Surajkund International Crafts Mela 2025?",
    options: ["Odisha", "Punjab", "Gujarat", "Tamil Nadu"],
    correct: "1"
  },
105: {
    text: "How many leopards were reported in Odisha's first-ever leopard census?",
    options: ["842", "500", "696", "920"],
    correct: "3"
  },
106: {
    text: "Who inaugurated the Ninth National Health Summit in Odisha?",
    options: ["Mohan Charan Majhi", "Narendra Modi", "JP Nadda", "C. R. Patil"],
    correct: "3"
  },
107: {
    text: "What is the financial assistance provided under the Shahid Madho Singh Haath Kharcha Scheme?",
    options: ["₹10,000", "₹7,500", "₹5,000", "₹12,000"],
    correct: "3"
  },
108: {
    text: "Which event was hosted in Bhubaneswar to promote tribal culture and educational continuity?",
    options: ["Adivasi Mela", "Bali Jatra", "Konark Festival", "Puri Rath Yatra"],
    correct: "1"
  },
109: {
    text: "Which has been declared the 107th National Park of India and second in Odisha?",
    options: ["Satkosia", "Bhitarkanika", "Similipal", "Debrigarh"],
    correct: "3"
  },
  110: {
    text: "Who is the Chief Minister of Kerala, serving since 2016?",
    options: ["Mohan Charan Majhi", "Nitish Kumar", "Pinarayi Vijayan", "Manik Saha"],
    correct: "3"
  },
111: {
    text: "Who is the Governor of Kerala, sworn in January 2025?",
    options: ["Rajendra Vishwanath Arlekar", "Arif Mohammad Khan", "Hari Babu Kambhampati", "Indra Sena Reddy Nallu"],
    correct: "1"
  },
112: {
    text: "Which AI-based program was launched in Kerala for early detection of eye diseases?",
    options: ["Drishti Suraksha", "Nayanamritham 2.0", "Netra Raksha", "Arogya Netram"],
    correct: "2"
  },
113: {
    text: "Which initiative was launched in Kerala to collect and dispose of expired and unused medicines safely?",
    options: ["Drug Suraksha", "nPROUD", "MediClean", "Swasthya Raksha"],
    correct: "2"
  },
114: {
    text: "Where was India’s first commercial supercapacitor manufacturing facility inaugurated in Kerala?",
    options: ["Kochi", "Thiruvananthapuram", "Kannur", "Kozhikode"],
    correct: "3"
  },
115: {
    text: "Which mobile app was introduced by Kerala MVD for reporting traffic violations in real time?",
    options: ["Traffic Guard", "Citizen Sentinel", "MVD Watch", "Road Rakshak"],
    correct: "2"
  },
116: {
    text: "Which state became the first in India to establish a Senior Citizens Commission in 2025?",
    options: ["Odisha", "Bihar", "Kerala", "Chhattisgarh"],
    correct: "3"
  },
  117: {
    text: "Who is the Chief Minister of West Bengal?",
    options: ["Mamata Banerjee", "Nitish Kumar", "Pinarayi Vijayan", "Mohan Charan Majhi"],
    correct: "1"
  },
118: {
    text: "Who is the Governor of West Bengal?",
    options: ["Arif Mohammad Khan", "C. V. Ananda Bose", "Rajendra Vishwanath Arlekar", "Indra Sena Reddy Nallu"],
    correct: "2"
  },
119: {
    text: "Which scheme was launched by West Bengal to prevent river erosion, improve irrigation, and boost fisheries?",
    options: ["Krishak Bandhu", "Nodi Bandhan", "Jal Jeevan Mission", "Banglar Jal Yojana"],
    correct: "2"
  },
120: {
    text: "Which initiative was introduced in West Bengal to stop the spread of HIV, syphilis, and hepatitis B from mothers to offspring?",
    options: ["Health Suraksha Mission", "Triple Elimination Initiative", "Arogya Mission", "Jan Aarogya Abhiyan"],
    correct: "2"
  },
121: {
    text: "Which scheme was launched in West Bengal to provide housing and assistance to eligible beneficiaries?",
    options: ["Banglar Bari", "Lakshmi Bhandar", "Pradhan Mantri Awas Yojana", "Krishak Bandhu"],
    correct: "1"
  },
  122: {
    text: "Who is the Chief Minister of Uttarakhand?",
    options: ["Mohan Charan Majhi", "Pushkar Singh Dhami", "Pinarayi Vijayan", "Mamata Banerjee"],
    correct: "2"
  },
123: {
    text: "Who is the Governor of Uttarakhand?",
    options: ["Rajendra Vishwanath Arlekar", "C. V. Ananda Bose", "Gurmeet Singh", "Indra Sena Reddy Nallu"],
    correct: "3"
  },
124: {
    text: "Which scheme was launched in Uttarakhand to provide self-employment opportunities for single women?",
    options: ["Banglar Bari", "Ekal Mahila Swarojgar Yojana", "Nodi Bandhan", "Lakshmi Bhandar"],
    correct: "2"
  },
125: {
    text: "Which mobile app was launched in Uttarakhand for reporting endangered water sources under Jal Sang Rakshan Abhyaan?",
    options: ["Giripath", "Jal Rakshak", "Bhagirath", "Citizen Sentinel"],
    correct: "3"
  },
126: {
    text: "Who jointly inaugurated the first Writers' Village in Uttarakhand?",
    options: ["Ram Nath Kovind, Gurmeet Singh, Pushkar Singh Dhami", "Narendra Modi, JP Nadda, Rajnath Singh", "Amit Shah, Arif Mohammad Khan, Mamata Banerjee", "Droupadi Murmu, Nitish Kumar, Pema Khandu"],
    correct: "1"
  },
127: {
    text: "Which state is set to become the first in India with a dedicated yoga policy?",
    options: ["Odisha", "Kerala", "Uttarakhand", "Rajasthan"],
    correct: "3"
  },
128: {
    text: "Which state became the first in India to implement the Uniform Civil Code (UCC)?",
    options: ["Bihar", "Assam", "Uttarakhand", "Tamil Nadu"],
    correct: "3"
  },
129: {
    text: "Which communities were exempted from Uttarakhand’s UCC to protect their rights?",
    options: ["Farmers", "Scheduled Tribes", "Minorities", "Backward Classes"],
    correct: "2"
  },
  130: {
    text: "Who is the Chief Minister of Delhi?",
    options: [" Mamata Banerjee", " Rekha Gupta", " Pinarayi Vijayan", " Pushkar Singh Dhami"],
    correct: "2"
  },
131: {
    text: "Who is the Governor of Delhi?",
    options: [" Vinay Kumar Saxena", " Gurmeet Singh", " C. V. Ananda Bose", " Rajendra Vishwanath Arlekar"],
    correct: "1"
  },
132: {
    text: "Which scheme was launched in Delhi for citizens above 60 years offering free medical care with no income cap?",
    options: [" Sanjeevani scheme", " Nayanamritham 2.0", " Ekal Mahila Swarojgar Yojana", " Nodi Bandhan scheme"],
    correct: "1"
  },
133: {
    text: "Which legislative assembly became the first in India to be fully powered by solar energy?",
    options: [" Bihar Legislative Assembly", " Odisha Legislative Assembly", " Kerala Legislative Assembly", " Delhi Legislative Assembly"],
    correct: "4"
  },
134: {
    text: "Which program was introduced by Delhi Police to bring school dropouts back into education?",
    options: [" Nayi Disha", " Srishtachar", " Swachh Vidyalaya", " Shiksha Setu"],
    correct: "1"
  },
135: {
    text: "How many CM Shree schools were announced by the Delhi government?",
    options: [" 40", " 50", " 60", " 70"],
    correct: "3"
  },
136: {
    text: "Which initiative was launched by the Election Commission of India in West Delhi to boost voter enthusiasm?",
    options: [" Chandrayaan Se Chunao Tak", " Mission Vote 2025", " Poll Utsav", " Loktantra Abhiyan"],
    correct: "1"
  },
137: {
    text: "Who is the current Chief Election Commissioner of India?",
    options: [" Rajiv Kumar", " Sunil Arora", " Gyanesh Kumar", " Om Prakash Rawat"],
    correct: "3"
  },
138: {
    text: "Which squads were created by Delhi Police to review women harassment in public places?",
    options: [" Nari Shakti squads", " Srishtachar squads", " Suraksha squads", " Raksha squads"],
    correct: "2"
  },
  139: { 
  text: "Who inaugurated India's first oxygen bird park, also known as Amrit Mahotsav Park, in Nagpur, Maharashtra?", 
  options: ["Nitin Gadkari", "Narendra Modi", "Devendra Fadnavis", "C.P. Radhakrishnan"], 
  correct: "1" 
}, 
140: { 
  text: "Which animal has been declared as 'Rajyamata Gomata' by the Government of Maharashtra?", 
  options: ["Buffalo", "Goat", "Cow", "Sheep"], 
  correct: "3" 
}, 
141: { 
  text: "Why were desi cows given the title Rajyamata Gomata in Maharashtra?", 
  options: ["For their role in industrial revolution", "For their historical role in human nutrition and contribution to Ayurveda and organic farming", "For their contribution to textile industry", "For their military utility"], 
  correct: "2" 
}, 
142: { 
  text: "Who inaugurated the Banajra Virasat Museum in Pohar Devi Washim, Maharashtra?", 
  options: ["Amit Shah", "Rajnath Singh", "Narendra Modi", "Nitin Gadkari"], 
  correct: "3" 
}, 
143: { 
  text: "Which state will establish India's first AI university to advance education, research, and innovation?", 
  options: ["Gujarat", "Maharashtra", "Karnataka", "Tamil Nadu"], 
  correct: "2" 
}, 
144: { 
  text: "Who is the Chief Minister of Puducherry?", 
  options: ["N. Rangaswamy", "K. Kailas Nathan", "Devendra Fadnavis", "Nitish Kumar"], 
  correct: "1" 
}, 
145: { 
  text: "Who is the Governor of Puducherry?", 
  options: ["Arif Mohammad Khan", "K. KailasNathan", "C.P. Radhakrishnan", "Ramesh Bais"], 
  correct: "2" 
}, 
146: { 
  text: "Which scheme in Puducherry provides health insurance and pension benefits to senior citizens aged 70 and above?", 
  options: ["PM Jan Dhan Yojana", "Atal Pension Yojana", "Ayushman Bharat Vay Vandana Yojana", "Pradhan Mantri Suraksha Bima Yojana"], 
  correct: "3" 
}, 
147: { 
  text: "Who is the Chief Minister of Gujarat?", 
  options: ["Bhupendra Patel", "Acharya Dev Vrat", "N. Rangaswamy", "Nitish Kumar"], 
  correct: "1" 
}, 
148: { 
  text: "Who is the Governor of Gujarat?", 
  options: ["Ramesh Bais", "Acharya Dev Vrat", "Arif Mohammad Khan", "K. Kailas Nathan"], 
  correct: "2" 
}, 
149: { 
  text: "Where was the BIMSTEC Youth Summit 2025 held?", 
  options: ["Surat", "Rajkot", "Gandhinagar", "Ahmedabad"], 
  correct: "3" 
}, 
150: { 
  text: "Which village has been declared as the first Biodiversity Heritage Site of Gujarat?", 
  options: ["Masali", "Guneri", "Modhera", "Lothal"], 
  correct: "2" 
}, 
151: { 
  text: "What is India's first Biodiversity Heritage Site?", 
  options: ["Guneri", "Nallur Tamarind Grove", "Masali", "Modhera"], 
  correct: "2" 
}, 
152: { 
  text: "Which scheme has been launched by the Gujarat Government to provide daily breakfast to 41 lakh government school students?", 
  options: ["Mid Day Meal", "Pradhan Mantri Poshan Shakti Nirman", "Mukhyamantri Postik Alpahar Yojana", "Bal Bhojan Yojana"], 
  correct: "3" 
}, 
153: { 
  text: "Which village became India's first solar-powered border village situated in Banaskantha district of Gujarat?", 
  options: ["Modhera", "Dhordo", "Masali", "Guneri"], 
  correct: "3" 
}, 
154: { 
  text: "Where did India conduct its first ever census of coastal and water birds?", 
  options: ["Kutch Desert Sanctuary", "Gir National Park", "Nal Sarovar Bird Sanctuary", "Marine National Park, Jamnagar"], 
  correct: "4" 
}, 
155: { 
  text: "Where is the National Maritime Heritage Complex (NMHC) being developed?", 
  options: ["Diu", "Dwarka", "Lothal", "Kandla"], 
  correct: "3" 
}, 
156: { 
  text: "What is the full form of SWAR, the platform launched by Gujarat CM Bhupendra Patel?", 
  options: ["Speech and Word Analysis Resource", "Speech and Written Analysis Resource", "Smart Word and Audio Recognition", "Systematic Writing and Reading"], 
  correct: "2" 
}, 
157: { 
  text: "Who is the Chief Minister of Jharkhand?", 
  options: ["Bhupendra Patel", "N. Rangaswamy", "Hemant Soren", "Nitish Kumar"], 
  correct: "3" 
}, 
158: { 
  text: "Who is the Governor of Jharkhand?", 
  options: ["C.P. Radhakrishnan", "K. Kailas Nathan", "Acharya Dev Vrat", "Santosh Kumar Gangwar"], 
  correct: "4" 
}, 
159: { 
  text: "Which campaign was launched by Prime Minister Narendra Modi in Hazaribagh, Jharkhand?", 
  options: ["Pradhan Mantri Gram Sadak Yojana", "Dharti Abha Janjatiya Gram Utkarsh Abhiyan (D-A-J-G-U-A)", "Ayushman Bharat Yojana", "PM Surya Ghar Yojana"], 
  correct: "2" 
}, 
160: { 
  text: "Who is the Chief Minister of Punjab?", 
  options: ["Hemant Soren", "Bhagwant Maan", "Bhupendra Patel", "N. Rangaswamy"], 
  correct: "2" 
}, 
161: { 
  text: "Who is the Governor of Punjab?", 
  options: ["Acharya Dev Vrat", "K. Kailas Nathan", "Gulabchand Kataria", "Santosh Kumar Gangwar"], 
  correct: "3" 
}, 
162: { 
  text: "Which state has become the first in India to broadcast its assembly proceedings in sign language?", 
  options: ["Gujarat", "Jharkhand", "Punjab", "Maharashtra"], 
  correct: "3" 
}, 
163: { 
  text: "Which state enacted the State Development and Promotion of Sport Act 2024?", 
  options: ["Haryana", "Punjab", "Odisha", "Karnataka"], 
  correct: "2" 
}, 
164: { 
  text: "Which state launched the project HIFAZAT to support women and children facing violence?", 
  options: ["Tamil Nadu", "Rajasthan", "Punjab", "Madhya Pradesh"], 
  correct: "3" 
}, 
165: { 
  text: "What is the helpline number launched under Punjab's HIFAZAT project?", 
  options: ["100", "1091", "112", "181"], 
  correct: "4" 
}, 
166: { 
  text: "Who is the Chief Minister of Telangana?", 
  options: ["Bhupendra Patel", "Hemant Soren", "Bhagwant Maan", "Revanth Reddy"], 
  correct: "4" 
}, 
167: { 
  text: "Who is the Governor of Telangana?", 
  options: ["Jishnudev Verma", "C.P. Radhakrishnan", "Santosh Kumar Gangwar", "K. Kailas Nathan"], 
  correct: "1" 
}, 
168: { 
  text: "Which scheme was launched by the Telangana government to provide financial assistance to young people?", 
  options: ["Mukhyamantri Postik Alpahar Yojana", "Rajiv Yuva Vikasam", "Dharti Abha Janjatiya Gram Utkarsha Abhiyaan", "Indra Soura Giri Jala Vikasam"], 
  correct: "2" 
}, 
169: { 
  text: "Which portal for land record management in Telangana replaced the Dharani portal?", 
  options: ["Bhubharti", "Digital Bhumi", "E-Bhoomi", "Janbhumi"], 
  correct: "1" 
}, 
170: { 
  text: "How much annual subsidy is offered to each farmer under the Rythu Bharosa scheme in Telangana?", 
  options: ["₹10,000", "₹12,000", "₹15,000", "₹20,000"], 
  correct: "3" 
}, 
171: { 
  text: "Which scheme was launched in Telangana to empower tribal farmers by providing free solar electricity pumps for irrigation?", 
  options: ["PM Kisan Urja Suraksha Yojana", "Rajiv Yuva Vikasam", "Indra Soura Giri Jala Vikasam", "Rythu Bharosa"], 
  correct: "3" 
}, 
172: { 
  text: "Which program was launched by Telangana to enrich the educational experience of government school students?", 
  options: ["Telangana Shiksha", "School Chale Hum", "Telangana Darshini", "Vidya Jyoti"], 
  correct: "3" 
}, 
173: { 
  text: "Which was the first state in India to conduct a caste-based household survey in 2023?", 
  options: ["Telangana", "Punjab", "Bihar", "Maharashtra"], 
  correct: "3" 
}, 
174: { 
  text: "Which state became the first to notify categorization of scheduled castes after approval of the Supreme Court?", 
  options: ["Odisha", "Gujarat", "Telangana", "Haryana"], 
  correct: "3" 
}, 
175: { 
  text: "Who is the Chief Minister of Andhra Pradesh?", 
  options: ["N. Chandrababu Naidu", "S. Abdul Nazeer", "Revanth Reddy", "Hemant Soren"], 
  correct: "1" 
}, 
176: { 
  text: "Who is the Governor of Andhra Pradesh?", 
  options: ["Acharya Dev Vrat", "S. Abdul Nazeer", "Santosh Kumar Gangwar", "Jishnudev Verma"], 
  correct: "2" 
}, 
177: { 
  text: "Which scheme was launched in Andhra Pradesh to provide ₹15,000 to mothers of students from class 1 to 12?", 
  options: ["Deepam 2.0", "UrjaVeer", "Thalliki Vandanam", "Zero Poverty P4"], 
  correct: "3" 
}, 
178: { 
  text: "What is the target year to eradicate poverty under Andhra Pradesh’s Zero Poverty P4 initiative?", 
  options: ["2035", "2047", "2050", "2027"], 
  correct: "2" 
}, 
179: { 
  text: "Which scheme provides three free LPG gas cylinders per year to eligible women in Andhra Pradesh?", 
  options: ["Thalliki Vandanam", "Deepam 2.0", "Ujjwala Yojana", "Zero Poverty P4"], 
  correct: "4" 
}, 
180: { 
  text: "Which scheme was launched in Andhra Pradesh to transform the state into a 100% green energy hub?", 
  options: ["Rajiv Yuva Vikasam", "Rythu Bharosa", "Thalliki Vandanam", "UrjaVeer"], 
  correct: "4" 
}, 
181: { 
  text: "Where did PM Modi lay the foundation for NTPC Green Energy Limited’s first green hydrogen hub under the National Green Hydrogen Mission?", 
  options: ["Hyderabad", "Pudima Dhaka near Visakhapatnam", "Amaravati", "Tirupati"], 
  correct: "2" 
}, 
182: { 
  text: "What is the height of the Statue of Social Justice, the world’s tallest statue of Dr. B.R. Ambedkar unveiled in Andhra Pradesh?", 
  options: ["150 feet", "180 feet", "206 feet", "220 feet"], 
  correct: "3" 
}, 
183: { 
  text: "Which state has become the first fully literate state in India with a literacy rate of 98.2%?", 
  options: ["Kerala", "Mizoram", "Goa", "Sikkim"], 
  correct: "2" 
}, 
184: { 
  text: "What was the literacy rate of Mizoram according to the 2011 Census of India?", 
  options: ["85.40%", "91.33%", "92.70%", "94.21%"], 
  correct: "2" 
}, 
185: { 
  text: "Which state in Northeast India became the first to distribute property cards under the survey of villages, abadis, and mapping with improvised technology?", 
  options: ["Assam", "Nagaland", "Mizoram", "Tripura"], 
  correct: "3" 
}, 
186: { 
  text: "When was the Swamitva scheme launched nationally by Prime Minister Narendra Modi?", 
  options: ["April 24, 2019", "April 24, 2020", "April 24, 2021", "January 26, 2020"], 
  correct: "2" 
}, 
187: { 
  text: "Which scheme was launched by Assam CM Himanta Biswa Sarma to empower 30 lakh women by providing Rs. 10,000 seed capital each?", 
  options: ["Orunodoi Scheme", "Mukhyamantri Mahila Udyamita Avyan", "Matrutva Yojana", "Mahila Shakti Mission"], 
  correct: "2" 
}, 
188: { 
  text: "What is the objective of Mission Vasundhara 3.0 launched in Guwahati by the Assam government?", 
  options: ["Providing housing to the poor", "Providing land rights to indigenous people", "Providing skill training to youth", "Providing free healthcare to all"], 
  correct: "2" 
}, 
189: { 
  text: "How many products used by the Bodo tribe of Assam have been granted Geographical Indication (GI) tags?", 
  options: ["6", "7", "8", "9"], 
  correct: "3" 
}, 
190: { 
  text: "Which of the following is NOT among the Bodo tribe products granted GI tag?", 
  options: ["Bodo Jou Gwran", "Bodo Ondla", "Bodo Narzi", "Bodo Chira"], 
  correct: "4" 
}, 
191: { 
  text: "Where was the 125-foot bronze statue of Ahom General Lachit Borphukan unveiled by Prime Minister Narendra Modi?", 
  options: ["Dispur", "Guwahati", "Jorhat", "Tezpur"], 
  correct: "3" 
}, 
192: { 
  text: "Who designed the 125-foot bronze statue of Lachit Borphukan in Assam?", 
  options: ["B. V. Doshi", "Satish Gujral", "Ram Vanji Sutar", "M. F. Husain"], 
  correct: "3" 
}, 
193: { 
  text: "The Battle of Sarai Ghat in 1671 was fought between which two powers?", 
  options: ["Mughal Empire and Ahom Kingdom", "British Empire and Maratha Empire", "Mughal Empire and Maratha Empire", "Ahom Kingdom and Tripura Kingdom"], 
  correct: "1" 
}, 
194: { 
  text: "Which Union Territory became the first in India to fully implement the three new criminal laws?", 
  options: ["Delhi", "Chandigarh", "Puducherry", "Jammu & Kashmir"], 
  correct: "2" 
}, 
195: { 
  text: "Which new law replaces the Indian Penal Code, 1860?", 
  options: ["Bharatiya Nagrik Suraksha Sanhita 2023", "Bharatiya Nyaya Sanhita 2023", "Bharatiya Sakshya Adhiniyam 2023", "Bharatiya Suraksha Adhiniyam 2023"], 
  correct: "2" 
}, 
196: { 
  text: "The Bharatiya Nagrik Suraksha Sanhita, 2023 replaces which earlier law?", 
  options: ["Indian Penal Code, 1860", "Criminal Law Amendment Act, 2013", "Code of Criminal Procedure, 1973", "Indian Evidence Act, 1872"], 
  correct: "3" 
}, 
197: { 
  text: "Which new criminal law replaces the Indian Evidence Act, 1872?", 
  options: ["Bharatiya Nyaya Sanhita 2023", "Bharatiya Nagrik Suraksha Sanhita 2023", "Bharatiya Sakshya Adhiniyam 2023", "Bharatiya Nyay Suraksha Adhiniyam 2023"], 
  correct: "3" 
}, 
198: { 
  text: "Who is the current Governor of Ladakh?", 
  options: ["Radha Krishna Mathur", "Satya Pal Malik", "Brigadier Dr. B.D. Mishra", "N.N. Vohra"], 
  correct: "3" 
}, 
199: { 
  text: "How many new districts have been announced in the Union Territory of Ladakh?", 
  options: ["3", "4", "5", "6"], 
  correct: "3" 
}, 
200: { 
  text: "Which of the following is NOT among the newly created districts of Ladakh?", 
  options: ["Janskar", "Nubra", "Drass", "Leh"], 
  correct: "4" 
}, 
201: { 
  text: "When was Article 370 abrogated and Ladakh became a Union Territory?", 
  options: ["2014", "2016", "2019", "2021"], 
  correct: "3" 
}, 
202: { 
  text: "Who is the current Governor of Jammu & Kashmir?", 
  options: ["Satya Pal Malik", "Manoj Sinha", "Omar Abdullah", "G.C. Murmu"], 
  correct: "2" 
}, 
203: { 
  text: "Who is the current Chief Minister of Jammu & Kashmir?", 
  options: ["Farooq Abdullah", "Omar Abdullah", "Mehbooba Mufti", "Jammu & Kashmir currently has no Chief Minister"], 
  correct: "2" 
}, 
204: { 
  text: "Which city in J&K was recognized as the World Craft City by the World Craft Council?", 
  options: ["Leh", "Gulmarg", "Srinagar", "Pahalgam"], 
  correct: "3" 
}, 
205: { 
  text: "Srinagar became which number city from India to be recognized as a World Craft City?", 
  options: ["Second", "Third", "Fourth", "Fifth"], 
  correct: "3" 
}, 
206: { 
  text: "Which of the following is NOT among the Indian cities recognized as a World Craft City?", 
  options: ["Jaipur", "Mysore", "Malappuram", "Kolkata"], 
  correct: "4" 
}, 
 207: { 
  text: "Who is the current Chief Minister of Sikkim?", 
  options: [ "Pawan Kumar Chamling", "Conrad Sangma","Prem Singh Tamang (Golay)", "Neiphiu Rio"], 
  correct: "3" 
},
 208: { 
  text: "Who is the current Governor of Sikkim?", 
  options: ["Om Prakash Mathur", "Ramesh Bais", "Manoj Sinha", "Anusuiya Uikey"], 
  correct: "1" 
},  
209: { 
  text: "Which is the first railway station of Sikkim?", 
  options: [ "Gangtok Railway Station", "Namchi Railway Station", "Pakyong Railway Station", "Rangpo Railway Station"], 
  correct: "4" 
},
};

// Explanations
const explanations = {
   1: "Nitish Kumar is the Chief Minister of Bihar and the Governor is Arif Mohammad Khan. They lead the administration of the state.",
  2: "Nitish Kumar is the Chief Minister of Bihar and the Governor is Arif Mohammad Khan. They lead the administration of the state.",
  3: "Bihar CM Nitish Kumar launched the 'Mahila Samvad' campaign to educate women about government schemes. Aim = To reach out 2 crore women across 70,000 locations in the state.",
  4: "Bihar CM Nitish Kumar launched the 'Mahila Samvad' campaign to educate women about government schemes. Aim = To reach out 2 crore women across 70,000 locations in the state.",
  5: "Bihar’s second tiger reserve to be established in Kaimur district. Valmiki Tiger Reserve (VTR) is also located in Bihar.",
  6: "Bihar’s second tiger reserve to be established in Kaimur district. Valmiki Tiger Reserve (VTR) is also located in Bihar.",
  7: "Total tiger reserve in India = 58.",
  8: "Recently declared - Guru Ghasidas—Tamor Pingla Tiger Reserve in Chhattisgarh.",
  9: "Recently declared - Ratapani Tiger Reserve in Madhya Pradesh.",
  10: "Madhav Tiger Reserve in Madhya Pradesh was officially declared on March 8, 2025, becoming the 58th Tiger Reserve.",
    11: "Chief Minister : Haryana – Nayab Singh Saini. Governor : Bandaru Dattatreya.",
  12: "Chief Minister : Haryana – Nayab Singh Saini. Governor : Bandaru Dattatreya.",
  13: "India's first Constitution museum was established at O.P. Jindal Global University in Sonipat, Haryana.",
  14: "PM Modi launched the 'Bima Sakhi Yojana' in Haryana to empower women aged 18-70, by creating job opportunities as LIC agents. The Bima Sakhi Yojana has also been launched by CM Pramod Sawant in Goa.",
  15: "Sarathi AI-powered chatbot was launched by the CM of Haryana to provide enhanced citizen engagement and access to government documents and policies.",
  16: "The Haryana government has introduced the 'Pandit Lakhmi Chand Kalakar Samajik Samman Yojana'. Aim = support senior artists and art scholars financially.",
  17: "Haryana CM Nayab Singh Saini announced key initiatives to support Agniveers under the Agnipath Scheme. It includes a 20% reservation in Haryana Police jobs, making it the first state in India to offer such a guaranteed job.",
  18: "The Haryana government declared both Mitathal and Tighrana as protected monuments and archaeological sites. Rakhigarhi is the largest IVC site located in Haryana.",
  19: "Union Minister Dr. Jitendra Singh announced the establishment of North India's first nuclear power plant in Gorakhpur, Haryana. The Nuclear Energy Mission envisages deployment of 100 GWe of nuclear energy by 2047.",
  20: "Haryana state government launches 'Har Khet - Swasth Khet' Campaign. Aim = to provide soil health cards to all farmers in the state.",
    21: "Chief Minister : Karnataka – Siddaramaiah. Governor : Thawar Chand Gehlot.",
  22: "Chief Minister : Karnataka – Siddaramaiah. Governor : Thawar Chand Gehlot.",
  23: "'Sanchar Kaveri Scheme' initiative launched by the Karnataka government to supply clean drinking water using GPS-tracked tankers in Bengaluru.",
  24: "The Karnataka government has launched 'Sarala Cauvery' – a new scheme enabling urban poor and middle-class families to pay for new water connections through convenient installments.",
    25: "Chief Minister : Arunachal Pradesh – Pema Khandu. Governor : Kaiwalya Trivikram Parnaik.",
  26: "Chief Minister : Arunachal Pradesh – Pema Khandu. Governor : Kaiwalya Trivikram Parnaik.",
  27: "Parashuram Kund Mela 2025 also known as Kumbh of North East celebrated in Arunachal Pradesh.",
  28: "Dirang has become India's first geothermal powered city.",
  29: "Kaziranga National Park has been recognized as India's second-largest butterfly diversity hub, after Namdapha National Park.",
  30: "In 1985, Kaziranga National Park was declared a World Heritage Site by UNESCO.",
  31: "Kaziranga National Park is renowned for its one-horned rhinoceros.",
  32: "The Ministry of Environment, Forest and Climate Change has declared Arunachal Pradesh's Namdapha National Park & Tiger Reserve and Kamlang Wildlife Sanctuary & Tiger Reserve as Eco-Sensitive Zone (ESZ).",
  33: "The Namdapha National Park & Tiger Reserve is in Changlang district.",
  34: "The Kamlang Wildlife Sanctuary & Tiger Reserve falls in Lohit district.",
  35: "ESZs are notified under Section 3 of the Environment (Protection) Act, 1986.",
  36: "Heo & Tato-I Hydro Electric Project (HEP) has been inaugurated in Shi Yomi District of Arunachal Pradesh.",
    37: "Chief Minister : Madhya Pradesh – Mohan Yadav. Governor : Mangubhai C. Patel.",
  38: "Chief Minister : Madhya Pradesh – Mohan Yadav. Governor : Mangubhai C. Patel.",
  39: "'Swami Vivekananda Yuva Shakti Mission' was launched by Madhya Pradesh CM Mohan Yadav. Aim = To employ 70% of the youth by 2028 and to provide education to all youth up to class 12th by 2030.",
  40: "Indore has banned begging and will take legal action, including FIRs, against those giving alms, starting January 1, 2025, as part to make it a beggar-free city.",
  41: "Ratapani Wildlife Sanctuary was declared India's 57th Tiger Reserve and the 8th Tiger Reserve of Madhya Pradesh.",
  42: "The National Tiger Conservation Authority (NTCA) has approved Madhav National Park as the 9th Tiger Reserve of Madhya Pradesh.",
  43: "Three key initiatives related to education launched by the MP Government, named - School Chale Hum Campaign, CM Rise Schools renamed as Maharishi Sandipani Vidyalaya, and Education Portal 3.0.",
  44: "CM Rise Schools renamed as Maharishi Sandipani Vidyalaya in Madhya Pradesh.",
  45: "Education Portal 3.0 was launched by the MP Government.",
  46: "India's first white tiger breeding centre has been approved by the Central Zoo Authority (CZA) in Rewa district, Madhya Pradesh. Located in Govindgarh, near the Mukundpur white tiger safari.",
  47: "The PARTH Yojana in Madhya Pradesh aims to provide pre-recruitment training to young people who aspire to join the Indian Army, Police, and Paramilitary forces. PARTH = Police Army Recruitment Training & Hunar.",
  48: "Pink Alarms for Women's Safety: Madhya Pradesh installed 'pink alarms' at government-run hospitals and medical colleges to ensure the safety of female staff in healthcare settings.",
  49: "Madhya Pradesh cabinet, chaired by CM Mohan Yadav, approved a 35 percent reservation for women in all state government recruitments.",
  50: "The 100th Tansen Music Festival set a Guinness World Record for the 'largest Hindustani classical band' at Gwalior Fort.",
  51: "A total of 546 artists performed various ragas on 9 instruments as part of the 100th International Tansen Samaroh.",
  52: "The performance at the 100th Tansen Samaroh was based on Malhar, Miyan ki Todi & Darbari Kanhra, three ragas composed by Tansen.",
  53: "'Rashtriya Tansen Samman' for 2023 was awarded to Pt. Swapan Chaudhuri.",
  54: "PM Modi virtually inaugurated the 'Lal Tipara Gaushala' with Bio-CNG plant in Gwalior and launched various developments in Madhya Pradesh on the occasion of Swachhta Diwas.",
    55: "CM of Uttar Pradesh = Yogi Adityanath.",
  56: "Governor of Uttar Pradesh = Anandiben Patel.",
  57: "World’s first Mahamrityunjaya Yantra (52 feet tall) was installed at Tapovan Ashram, Prayagraj.",
  58: "The UP Govt & Indian Railways launched India’s first Vistadome jungle safari train.",
  59: "The safari train connects Katarniaghat Wildlife Sanctuary with Dudhwa Tiger Reserve.",
  60: "This initiative is part of the theme 'One Destination, Three Forests' by the Eco Tourism Board of Uttar Pradesh.",
  61: "RISE = Rapid Immunisation Skill Enhancement app launched in UP.",
  62: "The RISE app is designed for nurses, ANMs, and health workers.",
  63: "UP CM announced that the 'Zero Poverty Mission' will be named after Dr. B.R. Ambedkar.",
  64: "Zero Poverty Mission was launched on 2nd October 2024.",
  65: "The UP government approved 'Mukhyamantri Yuva Udyami Vikas Abhiyan' to support microenterprises.",
  66: "PM Modi launched the AI-based chatbot 'Sah’Alyak' for Maha Kumbh 2025 pilgrims.",
  67: "CM Yogi Adityanath launched 'Kumbhvani', an FM channel by AIR.",
  68: "Uttar Pradesh’s tableau won the Judges’ Choice award for Best Tableaux at Republic Day Parade 2025.",
  69: "Theme of UP’s Republic Day 2025 tableau: 'Mahakumbh 2025 – Swarnim Bharat: Virasat aur Vikas'.",
  70: "The ‘Atal Yuva Maha Kumbh’ was inaugurated in Lucknow to honor the 100th birth anniversary of Atal Bihari Vajpayee.",
  71: "December 25, Vajpayee’s birthday, is observed as 'Good Governance Day'.",
  72: "World’s first Asian King Vulture Conservation & Breeding Centre is in Maharajganj, Uttar Pradesh.",
  73: "Asian King Vulture is listed as 'Critically Endangered' in the IUCN Red List.",
  74: "The centre is officially named 'Jatayu Conservation and Breeding Centre' (JCBC).",
    75: "CM of Chhattisgarh = Vishnu Deo Sai.",
  76: "Governor of Chhattisgarh = Ramen Deka.",
  77: "Annual Aid Scheme provides ₹10,000 annually to landless agricultural labourers.",
  78: "The 57th Annual Convention of IWWA was held in Raipur.",
  79: "The convention is popularly known as 'Water 360 Degrees' summit.",
  80: "Chhattisgarh launched 'Deendayal Upadhyay Krishi Majdoor Kalyan Yojana' for farm laborers.",
  81: "Guru Ghasidas-Tamor Pingla in Chhattisgarh was declared India’s 56th Tiger Reserve.",
  82: "It is the third largest tiger reserve in India, after Nagarjunasagar-Srisailam (AP) and Manas (Assam).",
  83: "Dhudmaras village in Bastar was selected by UNWTO for Best Tourism Village Upgrade programme.",
  84: "Jal-Jagar Mahotsav was inaugurated at Ravishankar Reservoir in Gangrel Dam, Dhamtari district.",
  85: "The festival aimed to raise awareness about water and environmental conservation.",
  86: "Chhattisgarh became the first Indian state to adopt the Green GDP model.",
  87: "Green GDP = NDP – (Cost of Natural Resource Depletion + Cost of Ecosystem Degradation).",
  88: "NDP (Net Domestic Product) = GDP – Depreciation of Produced Assets.",
  89: "Odisha Chief Minister is Mohan Charan Majhi and the Governor is Dr. Hari Babu Kambhampati.",
90: "Odisha topped the first-ever Fiscal Health Index (FHI) 2025 released by NITI Aayog, Subhadra Yojana launched — Odisha.",
91: "The 38th Surajkund International Crafts Mela 2025 featured Rajasthan and Odisha as the theme states, showcasing their rich culture and crafts.",
92: "The Odisha government has released its first-ever leopard census report which revealed that 696 leopards are currently present in the state.",
93: "The 9th National Health Summit, inaugurated by Union Health Minister J.P. Nadda in Puri, Odisha.",
94: "Shahid Madho Singh Haath Kharcha Scheme was launched by Odisha CM Mohan Charan Majhi at the Adivasi Mela in Bhubaneswar to promote educational continuity among tribal students.",
95: "Eligible ST students receive a one-time incentive of ₹5,000 under the Shahid Madho Singh Haath Kharcha Scheme.",
96: "Similipal has been accorded 107th National Park of India, and second National Park of Odisha after Bhitarkanika.",
97: "Chief Minister of Tripura is Manik Saha.",
98: "Governor of Tripura is Indra Sena Reddy Nallu.",
99: "JP Nadda launched the Mukhyamantri Balika Samriddhi Yojana and Mukhymantri Kanya Atmanirbhar Yojana in Tripura.",
100: "Odisha's Chief Minister is Mohan Charan Majhi, a tribal leader and politician elected in 2024.",
101: "The Governor of Odisha is Dr. Hari Babu Kambhampati, appointed in 2025.",
102: "Odisha topped the Fiscal Health Index 2025 released by NITI Aayog, scoring highest among 18 major states for fiscal prudence, revenue mobilization, and debt sustainability.",
103: "The state government launched the Subhadra Yojana, a women-centric financial assistance scheme providing ₹50,000 over five years to women from economically weaker sections.",
104: "Odisha was the theme state at the 38th Surajkund International Crafts Mela 2025, showcasing its rich culture, crafts, and heritage including Pattachitra paintings, silver filigree, and handloom textiles.",
105: "The Odisha government released its first-ever leopard census report revealing 696 leopards currently in the state, with significant populations in Similipal Tiger Reserve and Satkosia.",
106: "The Ninth National Health Summit was inaugurated in Odisha by Union Health Minister JP Nadda, focusing on innovations and best practices in public healthcare.",
107: "The Shahid Madho Singh Haath Kharcha Scheme was launched by Odisha CM Majhi, providing ₹5,000 one-time financial assistance to Scheduled Tribe students enrolling in classes IX and XI to reduce dropout rates.",
108: "Odisha hosted an Adivasi Mela in Bhubaneswar to promote tribal culture and educational continuity among tribal students, with financial incentives for eligible Scheduled Caste students.",
109: "Semilipal has been declared the 107th National Park of India, improving conservation efforts in Odisha.",
110: "Kerala's Chief Minister is Pinarayi Vijayan, serving since 2016 and known for progressive leadership.",
111: "The Governor of Kerala is Rajendra Vishwanath Arlekar, sworn in January 2025.",
112: "Kerala launched 'Nayanamritham 2.0,' the first AI-based program for early detection of eye diseases like glaucoma, diabetic retinopathy, and age-related macular degeneration, expanding accessibility of quality eye care through AI-assisted screening.",
113: "The state launched the 'nPROUD' initiative to safely collect and dispose of expired and unused medicines, reducing environmental and health risks. This includes household collection and pharmacy participation, with safe incineration at a local facility.",
114: "CM Pinarayi Vijayan inaugurated India's first commercial supercapacitor manufacturing facility at Keltron in Kannur, developed in collaboration with ISRO, with an initial investment of Rs 42 crore, aimed at boosting advanced electronics manufacturing.",
115: "Kerala Motor Vehicle Department introduced the 'Citizen Sentinel' mobile app, enabling residents to report traffic violations in real-time using photos and videos. Kerala is the third state in India to implement this app after Chhattisgarh and Odisha.",
116: "Kerala became the first state in India to establish a Senior Citizens Commission by passing the Kerala State Senior Citizens Commission Bill, 2025, aimed at protecting the rights and welfare of elderly citizens, providing grievance redressal, legal aid, and policy advisory.",
117: "West Bengal Chief Minister is Mamata Banerjee.",
118: "Governor of West Bengal is C. V. Ananda Bose.",
119: "The Nodi Bandhan scheme launched by the West Bengal Government aims to prevent river erosion, improve irrigation, and boost fisheries in riverine areas.",
120: "West Bengal has introduced the Triple Elimination Initiative aimed at stopping the spread of HIV, syphilis, and hepatitis B from mothers to their offspring.",
121: "West Bengal launched the Banglar Bari scheme aimed to provide housing and assistance to eligible beneficiaries in West Bengal.",
122: "Uttarakhand Chief Minister is Pushkar Singh Dhami.",
123: "Governor of Uttarakhand is Gurmeet Singh.",
124: "Uttarakhand CM Pushkar Singh Dhami launched Ekal Mahila Swarojgar Yojana providing self-employment opportunities for single women aiming to boost their financial independence.",
125: "Uttarakhand CM Pushkar Singh Dhami launched the Bagirath Bhagirath mobile app as part of the state's Jal Sang Rakshan Abhyaan water conservation campaign, aiming to allow citizens to report endangered water sources like nalas or dharas for conservation efforts.",
126: "The first Writers' Village was jointly inaugurated by former President Ram Nath Kovind, Uttarakhand Governor Lt. Gen. Gurmeet Singh (Retd.), and CM Pushkar Singh Dhami.",
127: "Uttarakhand is set to become the first Indian state with a dedicated yoga policy, building on Rishikesh as the yoga capital of the world, the policy led by CM Pushkar Singh Dhami.",
128: "Uttarakhand became the first state of India to implement Uniform Civil Code (UCC), aiming to provide equality for all citizens in terms of gender, caste, or religion.",
129: "Scheduled tribes, as defined under Article 342 of the Constitution, have been exempted from the UCC to protect their rights.",
130: "Delhi Chief Minister is Rekha Gupta.",
131: "Governor of Delhi is Vinay Kumar Saxena.",
132: "The Delhi government has launched the Sanjeevani scheme for citizens above 60 offering free medical care in government and private hospitals with no income cap or upper eligibility limit.",
133: "The Delhi Legislative Assembly has become the first in the country to be fully powered by solar energy.",
134: "The Delhi Police introduced a transformative program, Nayisha, aimed at bringing school dropouts back into the fold of education.",
135: "The Delhi government also announced the establishment of 60 PCM Shree schools in Delhi.",
136: "Election Commission of India launched Chandrayaan Se Chunao Tak initiative to boost voters' enthusiasm in West Delhi.",
137: "Chief Election Commissioner of India is Shree Gyanesh Kumar.",
138: "Delhi Police created Srishtachar squads to review women harassment in public places.",
139: "Union Minister Nitin Gadkari inaugurated India's first oxygen bird park, also known as Amrit Mahotsav Park, in Nagpur, Maharashtra.",  
140: "The Government of Maharashtra declared desi cows as Rajyamata Gomata.",  
141: "Due to their historical importance role in human nutrition and contribution to Ayurvedic and organic farming.",  
142: "Prime Minister Narendra Modi inaugurated the Banjra Virasat Museum in Pohar Devi washim, Maharashtra, highlighting the Banjara community's heritage.",  
143: "Maharashtra will establish India's first AI university to advance education, research, and innovation.",  
144: "Puducherry Chief Minister is N. Rangaswamy.",  
145: "Puducherry Governor is K. Kailas Nathan, Lt. Governor.",  
146: "The Ayusman Bharat Vay Vandana Yojana in Puducherry is a government scheme providing health insurance and pension benefits to senior citizens aged 70 and above. It ensures financial security and health care support for the elderly through LIC.",  
147: "Gujarat Chief Minister is Bhupendra Patel.",  
148: "Gujarat Governor is Acharya Dev Vrat.",  
149: "BIMSTEC Youth Summit 2025 held in Gandhinagar, Gujarat, inaugurated by Dr. Mansukh Mandavya. Theme: Youth as a bridge for intra-beamstack exchange.",  
150: "Guneri has been declared as the first Biodiversity Heritage Site of Gujarat.",  
151: "India's first Biodiversity Heritage Site is Nallur Tamarind Grove in Bengaluru.",  
152: "Gujarat Government has launched the Mukhyamantri Postik Alpahar Yojana under which around 41 lakh government school students will receive daily breakfast.",  
153: "Masali Village has become India's first solar-powered border village. It is situated in Banaskantha district of Gujarat. It is a part of PM Suryaghar Yojana. Masali is the second solar village in Gujarat after Modhera and the first in the border area of India.",  
154: "India conducted its first ever census of coastal and water birds at Gujarat's Marine National Park in Jamnagar.",  
155: "The Indian Government led by PM Narendra Modi has approved the development of the National Maritime Heritage Complex NMHC in Lothal, Gujarat. The NMHC project is part of the Prime Minister's vision to showcase India's 4,500-year-old maritime heritage.",  
156: "Chief Minister of Gujarat Bhupendra Patel launched the Swar Speech and Written Analysis Resource platform to overcome language barriers. SWAR leverages Bhashini, an AI-based system to facilitate smooth speech recognition, particularly for individuals facing language or technological challenges.",  
157: "Jharkhand Chief Minister is Hemant Soren.",  
158: "Jharkhand Governor is Santosh Kumar Gangwar.",  
159: "PM Modi launched the Dharti Aaba Janjatiya Gram Utkarsh Abhiyan (DAJGUA) in Hazaribagh, Jharkhand, on the day of Mahatma Gandhi's birthday anniversary.",  
160: "Punjab Chief Minister is Bhagwant Maan.",  
161: "Punjab Governor is Gulabchand Kataria.",  
162: "Punjab has become the first Indian state to broadcast its assembly proceedings in sign language.",  
163: "Punjab has become the first state in India to enact the State Development and Promotion of Sport Act 2024.",  
164: "Punjab launched the project HIFAZAT, a transformative initiative aimed at boosting support for women and children facing violence. The project was unveiled on the eve of International Women's Day.",  
165: "The project features a 24x7 helpline number 181 which categorizes calls into emergency, non-emergency, and information.",  
166: "Telangana Chief Minister is Revanth Reddy.",  
167: "Telangana Governor is Jishnudev Verma.",  
168: "The Telangana government has launched the Rajiv Yuva Vikasam scheme to provide financial assistance to young people.",  
169: "The Telangana government has launched the Bhubharti portal for land record management in the state. Bhubharti portal in Telangana has replaced the Dharani portal.",  
170: "Telangana implemented the Rythu Bharosa scheme after Sankranti, offering Rs 15,000 annual subsidies to each farmer.",  
171: "Telangana Chief Minister Revanth Reddy launched the Indra Soura Giri Jala Vikasam scheme. Indra Soura Giri Jala Vikasam scheme aims to empower tribal farmers by providing them with free solar electricity pumps for irrigation.",  
172: "Telangana Darshini is a program launched by Telangana state government aimed at enriching the educational experience of government school students.",  
173: "Telangana became the third state to conduct a caste-based household survey. The first caste-based household survey in India was conducted in Bihar, 2023.",  
174: "Telangana becomes first state to notify categorization of scheduled castes after approval of Supreme Court. Telangana notified the implementation of the Telangana Scheduled Castes Rationalization of Reservations Act, 2025.",  
175: "Andhra Pradesh Chief Minister is N. Chandrababu Naidu.",  
176: "Andhra Pradesh Governor is S. Abdul Nazeer.",  
177: "The Andhra Pradesh government launched the Thalliki Vandanam scheme, providing Rs. 15,000 to mothers of students from class 1 to 12.",  
178: "Andhra Pradesh CM N. Chandrababu Naidu launched the Zero Poverty P4 initiative aimed at eradicating poverty in the state by 2047. P4 means Public-Private People Partnership.",  
179: "Deepam 2.0 scheme has been launched by the Andhra Pradesh government aimed to provide eligible women in the state with three free LPG gas cylinders per year.",  
180: "The Andhra Pradesh government launched the UrjaVeer scheme aiming to transform the state into a 100% green energy hub for sustainable development.",  
181: "PM Modi laid the foundation for the NTPC Green Energy Limited NGEL green hydrogen hub in Pudima Dhaka near Vishakhapatnam. It is the first hub under India's National Green Hydrogen Mission.",  
182: "The world's tallest statue of Dr. B.R. Ambedkar has been unveiled in Andhra Pradesh, known as the Statue of Social Justice. Height is 206 feet.",  
183: "Mizoram has become the first fully literate state in India, achieving a remarkable literacy rate of 98.2%.",  
184: "According to the 2011 Census of India, Mizoram recorded a literacy rate of 91.33%.",  
185: "Mizoram has become the first state in Northeast India to distribute property cards under the survey of villages, abadis, and mapping with improvised technology in village areas.",  
186: "The Swamitva scheme itself was launched nationally by PM Modi on April 24, 2020, with its national rollout on April 24, 2021.",  
187: "Mukhyamantri Mahila Udyamita Avyan launched by Assam CM aims to empower 30 lakh women by providing them with seed capital of Rs. 10,000 each.",  
188: "Assam CM Himanta Biswa Sarma launched Mission Vasundhara 3.0 in Guwahati to provide land rights to indigenous people.",  
189: "Eight products used by the Bodo tribe of Assam have been granted Geographical Indication (GI) tags.",  
190: "The GI tagged products are Bodo Jau Guran, Maibra Jau Bidvi, Bodo Jau Gisi, Bodo Nafam, Bodo Ondla, Bodo Gwakha, Bodo Narzi, and Bodo Arunai. Bodo Chira is not included.",  
191: "A 125-foot bronze statue of Ahom General Lachit Borphukan was unveiled by Prime Minister Narendra Modi in Jorhat, Assam.",  
192: "The statue of Lachit Borphukan in Jorhat, Assam was designed by Ram Vanji Sutar.",  
193: "The Battle of Sarai Ghat (1671) was fought between the Mughal Empire and the Ahom Kingdom.",  
194: "Chandigarh became India's first Union Territory to fully implement the three new criminal laws.",  
195: "The Indian Penal Code, 1860 was replaced by Bharatiya Nyaya Sanhita, 2023.",  
196: "The Code of Criminal Procedure, 1973 was replaced by Bharatiya Nagrik Suraksha Sanhita, 2023.",  
197: "The Indian Evidence Act, 1872 was replaced by Bharatiya Sakshya Adhiniyam, 2023.",  
198: "Brigadier Dr. B.D. Mishra is the current Governor of Ladakh.",  
199: "The Central Government announced 5 new districts in Ladakh.",  
200: "Leh is an old district of Ladakh, not a newly created one. The new ones are Janskar, Drass, Sam, Nubra, and Changthang.",  
201: "In 2019, Article 370 was abrogated and Ladakh was made a Union Territory.",  
202: "Manoj Sinha is the current Governor of Jammu & Kashmir.",  
203: "Since the abrogation of Article 370 in 2019, J&K has no Chief Minister; Omar Abdullah is a former CM.",  
204: "Srinagar was recognized as a World Craft City by the World Craft Council (WCC).",  
205: "Srinagar became the fourth Indian city after Jaipur, Malappuram, and Mysore.",  
206: "The four World Craft Cities from India are Jaipur, Malappuram, Mysore, and Srinagar. Kolkata is not included.",
 207: "Chief Minister of Sikkim is Prem Singh Tamang",  
208: "Governer of Sikkim is Om Prakash Mathur",  
 209: "Rangpo Railway Station, part of the ongoing Sivok-Rangpo Railway Line project, is Sikkim's 1st Railway Station.",  

};


function showExplanation(num) {
  const q = questions[num];
  const e = explanations[num] || "No explanation provided.";
  if (!q) return;
  document.getElementById('explanationContent').innerHTML = `
    <p><strong>Q${num}.</strong> ${q.text}</p>
    <p><strong>Options:</strong></p>
    <ul>
      ${q.options.map((opt, idx) => `<li>${idx+1}. ${opt}</li>`).join('')}
    </ul>
    <p><strong>Correct Answer:</strong> ${q.options[parseInt(q.correct)-1]}</p>
    <hr>
    <p><strong>Explanation:</strong> ${e}</p>
  `;
  // Show modal (requires bootstrap js)
  const modalEl = document.getElementById('explanationModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    new bootstrap.Modal(modalEl).show();
  }
}

// Export for module usage (if using modules)
if (typeof module !== 'undefined') {
  module.exports = { totalQuestions, questions, explanations, showExplanation };
}
