import { StayPrimaryLandscape } from "@mui/icons-material";

export const analyze = (text: string) => {
    // Greeting regex
    const greetingRegex = /\b(hi|hello|hey|chatbot|hellow)\b/i;

    // University name variations
    const universityName = '(mid[-\\s]?west university|mu)';

    const courses = [
        'Bachelor of Hotel Management',
        'Bachelor of Travel and Tourism Management',
        'Bachelor of Business Administration',
        'Bachelor of Business Studies',
        'MPhil in Management',
        'Bachelor of Information Technology',
        'BSc Environmental Science',
        'Master of Business Studies',
        'BSc in Computer Science and Information Technology',
        'Master in International Cooperation and Development',
        'MA in Conflict and Peace Studies',
        'MSc in Structural Engineering',
        'MBA-Evening',
        'Master of Science in Physics',
        'Masterof Educational Sciences in Curriculum and Evaluation',
        'MA in International Relations and Diplomacy',
        'Bachelor of Hydropower Engineering',
        'Master of Educational Sciences in Health and Physical Education',
        'MA in English',
        'MA in Rural Development',
        'Master of Educational Sciences in Education, Planning and Management',
        'Master in Social Work',
        'MSc in Construction Management',
        'MA in Anthropology',
        'BSc in Computer Science and Information Technology',
        'Master in International Cooperation and Development',
        'BSc Environmental Science',
        'MA in Conflict and Peace Studies',
        'MSc in Structural Engineering',
        'MPhil in Management',
        'Bachelor of Business Studies',
        'Masterof Educational Sciences in Curriculum and Evaluation',
        'Master of Business Administration',
        'MBA-Evening',
        'MA in Folklore and Cultural Studies',
        'Bachelor of Computer Engineering',
        'BSc Physics',
        'Bachelor of Arts in Development Economics',
        'Bachelor of Arts in Mathematics',
        'Bachelor of Arts in English',
        'Bachelor of Arts in Sociology',
        'Bachelor in Educational Sciences in English',
        'Bachelor in Educational Sciences in Education, Planning and Management',
        'BSc Agriculture',
        'Bachelor in Educational Sciences in Mathematics',
        'BSc Zoology',
        'BSc in Statistics',
        'Master of Educational Sciences in English',
        'Bachelor in Educational Sciences in Health and Physical Education',
        'Bachelor of Arts in Journalism and Mass Communication',
        'Bachelor of Arts in Rural Development',
        'BSc Chemistry',
        'Bachelor of Arts in International Relations and Diplomacy',
        'Bachelor of Civil Engineering',
    ];
    
    const viceChancellorInfo = `Prof. Dr. Nanda Bahadur Singh is the Vice-Chancellor of Mid-West University. He brings extensive experience and expertise in the field of education and administration.`;
    const examlink = 'https://muexam.edu.np//';
    const engineeringlink='https://www.mwu.edu.np/Collection/engineering/';
   

    // Question regex patterns for vacancies
    const examRegex =/\b(?: exam mwu|mwu exam|exam|exam system of mwu|mwu exam system|grading system of mwu|grading|mwu grading|routines|result|results)\b/i;
    const examLinkRegex = /\b(?:exam link|exam form|exam page)\b/i;
    const engineeringRegex=/\b(?:computer engineering|engineering|civil engineering|hydropower engineering|detiles about engineering|mwu engineering|)\b/i;
   
    // Location link
    const locationLink = 'https://www.google.com/maps/place/Mid-western+University+Main+Campus/@28.589562,81.623193,14z/data=!4m5!3m4!1s0x0:0xf61e67f2ff0821e!8m2!3d28.5895618!4d81.623193?hl=en-US';

    const contactInfo = `
    Contact Information:
    - Phone: 083-524681 / 525444 / 525333
    - Email: <a href="mailto:info@mu.edu.np" class='text-primary'>info@mu.edu.np</a>
    - Website: <a href="https://www.mwu.edu.np/" target="_blank" class='text-primary'>Mid-West University</a>
    `;

    const socialMediaInfo = `
    Social Media:
    - Facebook: <a href="https://www.facebook.com/mu.edu.np/" target="_blank" class='text-primary'>Mid-West University Facebook Page</a>
    - Twitter: <a href="https://twitter.com/MWUNepal" target="_blank" class='text-primary'>Mid-West University Twitter</a>
    - YouTube: <a href="https://www.youtube.com/channel/UCmlFfUfqK5YU7gQu0pnTAcg" target="_blank" class='text-primary'>Mid-West University YouTube Channel</a>
    - Instagram: <a href="https://www.instagram.com/midwesternuniversity/" target="_blank" class='text-primary'>Mid-West University Instagram</a>
    `;

    const campusesInfo = `
    <b>Constituent Campuses:</b><br>
      - Central Campus of Humanities and Social Sciences<br>
      - Central Campus of Education<br>
      - Central Campus of Management<br>
      - Central Campus of Science and Technology<br>
      - Central Campus of Engineering<br>
      - Central Campus of Law<br>
      - Bageshwari Multiple Campus, Kohalpur Banke<br>
      - Babai Multiple Campus, Gulariya, Bardiya<br>
      - Narayan Multiple Campus, Dailekh<br>
      - Tila Karnali Multiple Campus, Kalikot<br>
      - Rara Multiple Campus, Mugu<br>
      - Musikot Khalanga Multiple Campus, Rukum<br>
      - Bheri Gyanodaya Multiple Campus, Jajarkot<br>
      - Jaljala Multiple Campus, Rolpa<br>
      - Bheri Multiple Campus, Gumi, Surkhet<br>
      - Vidhyapur Janata Multiple Campus, Surkhet<br>
    <b>Affiliated Campuses:</b><br>
      - Global College International<br>
    <b>Autonomous Institutions:</b><br>
      - Mid-West University School of Management (MUSOM), Birendranagar, Surkhet<br>
      - MU Institute of International Cooperation and Development (MICD), Sanepa, Lalitpur<br>
    `;
    const admissionProcessInfo = `
    Admission Process:<br>
    For information about the admission process at Mid-West University, please visit the <a href="http://www.mwu.edu.np/admission-process/" target="_blank" class='text-primary'>Page</a>.
    `;

    
    const attendanceInfo = `
    Attendance Requirements:
    Students are required to maintain a minimum attendance of 80% in all classes. Falling below this attendance threshold may result in Non-Qualification (NQ) for the course. It is essential to prioritize regular attendance for a successful academic experience.
    `;
    // Deans link
    const deansLink = 'https://www.mwu.edu.np/administration/deans/';

    const aboutMwuinfo = `<p>Mid-West&nbsp;University (MU) Nepal is an autonomous and public institution of higher learning with the mission to serve the people of Nepal and enrich the global learning community by extending the advantages of higher education.</p>

    <p>Mid-West&nbsp;University is supported by Ministry of Education Nepal and was established by the Government of Nepal with a Parliament Act on June 17, 2010 A. D. under the concept of multi-university system. The constituent campuses of the University and the Central Administration Office are located in Birendranagar Municipality, in Surkhet district, Nepal.</p>
    
    <p>Mid-West&nbsp;University (MU) enjoys a strong support from the existing campuses throughout this region: land, property, human resource, and students of the existing Tribhuvan University’s affiliated campuses in the region have been merged under MId Western University.</p>
    
    <p>Mid-West&nbsp;University offers different academic programs, both at undergraduate and graduate level, in the field of Humanities and Social Sciences, Educational Sciences, Science and Technology and Management studies.</p>
    
    <p>Mid-Western University has adopted a semester system ‎based curriculum. At undergraduate level, ‎Bachelor’s degrees are of four-year courses spread over eight semesters, while at ‎graduate level Master’s degrees are of two-year courses extended in four ‎semesters.</p>`

    // Information about Deans
    const deansInfo = `
      Deans at Mid-West University:
      Mid-West University is led by experienced and dedicated deans who oversee various academic disciplines. For details about the deans and their respective departments, you can visit the <a href="${deansLink}" target="_blank" class='text-primary'>Deans Page</a>.
      `;
     


      const totalnumberofstudentInfo='13000'   
      const totalnumberoffacultyInfo='12'
      const teachersInfo='Er.Hari Narayan yadav<br>Er.Sonala Yadav<br>Er.Kapil Budhathoki<br>Er.Devendra labh karna<br>Er.ramesh ghimire<br>Er.Dhirendra kumar yadav<br>Er.Prabin Bhusal<br>Mohan Mall<br>Er.Dipesh poudel<br>Er.Surendra Shahi'
      const hodOfcomputerInfo = `Er.Kapil Budhathok`;
      const hodOfcivilInfo = `Er.Govindra khatri`;
      const hodOfhydropowerInfo = `Er.Sudip Sharma`;
      const hodOfEngineeringInfo = `Computer=Er.Kapil Budhathoki<br>Civil=Er.Govindra Khatri<br>Hydro=Er.Sudip Sharma`;
      const facultiesInfo ='Education <br>Humanities and Social Sciences<br>Management<br>Science and Technology<br>Law<br>Agriculture and Forestry<br>Engineering';

    // Question regex patterns
    const teachersRegex =/\bteachers|engineering teachers|faculty members of enginnering|teacher of engineering|engineering faculty members|faculty member|teacher|faculty members of mwu|mwu teacher|mwu teachers|teacher mwu|teachers mwu\b/i;
    const aboutmwuRegex =/\b(?:tell me about mwu |about mid west university|details about mwu|tell me about mid west university|about mwu|mwu|mu)\b/i;
    const establishmentYearRegex = new RegExp(`\\bwhen was ${universityName} established\\b`, 'i');
    const locationRegex = new RegExp(`\\b(?:where is|location of|locate|address of|campus of) ${universityName}\\b`, 'i');
    const locationOnlyRegex = /\blocation\b/i;
    const addressRegex = new RegExp(`\\b(?:where is|location of|locate|address of|campus of) ${universityName}\\b`, 'i');
    const addressOnlyRegex = /\baddress\b/i;
    const coursesRegex = new RegExp(`\\b(?:courses offered|courses|teaching courses|subject to read|courses in|faculty) ${universityName}\\b`, 'i');
    const coursesOnlyRegex = /\bcourses\b/i;
    const offeredProgramsOnlyRegex = /\b(?:offered programs|offered program|program)\b/i;
    const viceChancellorRegex = /\b(?:vice chancellor|who is Vice-Chancellor|name of vc|mwu vc|who is vc of mwu|vc name|vc)\b/i;
    const programsOnlyRegex = /\bprograms\b/i;
    const facultiesRegex= /\bfaculty|faculties|mwu faculty|faculty mwu|mu faculty|faculty mu\b/i;
    // Contact and Social Media regex patterns
    const contactRegex = new RegExp(`\\bcontact|phone number|email|email mwu|mwu email|mu email|email mu|websites|websites of mid west university|websites of mwu|websites of mu|website\\b`, 'i');
    const socialMediaRegex = new RegExp(`\\bsocial media|facebook|twitter|youtube|instagram\\b`, 'i');
    const campusesRegex = new RegExp(`\\bcampuses|constituent campuses|affiliated campuses|autonomous institutions|college|campuse\\b`, 'i');
    const admissionProcessRegex = new RegExp(`\\badmission|admission process|how to apply|apply for admission|addmission\\b`, 'i');
    const thankYouRegex = /\b(?:thank you|thanks)\b/i;
    const whoAreYouRegex = /\b(?:who are you|what are you|tell me about yourself|tell me about you|MWU Chatbot)\b/i;
    const howAreYouRegex = /\b(?:how are you|are you fine|are you good|is there alright)\b/i;
    const attendanceRegex = /\b(?:attendance requirements|attendace policy|attendance percentage|about attendance|attandce|attendances|attendance)\b/i;
    const deansRegex = /\b(?:deans|academic deans|dean of engineering|dean|about deans|about dean|dean of ag)\b/i;


    const hodsOfEngineeringRegex= /\b(?:hods|engineering hods|engineering faculties hods|hod|mwu hod)\b/i;
    const hodOfcomputerRegex = /\b(?:Computer HOD|Head of Computer Department|Department head of computer|HOD of Computer|hod computer)\b/i;
    const hodOfcivilRegex = /\b(?:civil HOD|Head of Civil Department|Department head of civil|HOD of Civil|hod civil)\b/i;
    const hodOfhydropowerRegex = /\b(?:hydropower HOD|Head of hydropower Department|hod hydro|hydro hod|Department head of hydropower|HOD of hydro)\b/i;

    const totalnumberofstudentRegex = /\b(?:total number of students|total students|students number|students in mwu|students of mu)\b/i;
    const totalnumberoffacultyRegex = /\b(?:total number of faculty|total faculty|faculty number|faculty in mwu|faculty of mu)\b/i;


    if (greetingRegex.test(text)) {
        return `Hi, How may I help you?`;
    } else if (aboutmwuRegex.test(text)) {
        return aboutMwuinfo;
    } else if (establishmentYearRegex.test(text)) {
        return `Mid-West University was established by the Government of Nepal with a Parliament Act on June 17, 2010 A. D.`;
    } else if (locationRegex.test(text) || locationOnlyRegex.test(text)) {
        return `Mid-West University and the Central Administration Office are located in Birendranagar Municipality, in the District of Surkhet, Nepal. You can also find the location on <a href="${locationLink}" target="_blank" class='text-primary'>Google Maps</a>.`;
    } else if (addressRegex.test(text) || addressOnlyRegex.test(text)) {
        return `Mid-West University and the Central Administration Office are located in Birendranagar Municipality, in the District of Surkhet, Nepal. You can also find the location on <a href="${locationLink}" target="_blank" class='text-primary'>Google Maps</a>.`;
    } else if (coursesRegex.test(text) || coursesOnlyRegex.test(text) || programsOnlyRegex.test(text) || offeredProgramsOnlyRegex.test(text)) {
        return `Mid-West University offers courses in the following areas:<br> ${courses.join('<br>')}.`;
    } else if (viceChancellorRegex.test(text)) {
        return viceChancellorInfo;
    
    } else if (contactRegex.test(text)) {
        return contactInfo;
    } else if (teachersRegex.test(text)) {
        return teachersInfo;
    } else if (socialMediaRegex.test(text)) {
        return socialMediaInfo;
    } else if (campusesRegex.test(text)) {
        return campusesInfo;
    } else if (admissionProcessRegex.test(text)) {
        return admissionProcessInfo;

    } else if (thankYouRegex.test(text)) {
        return `You're welcome! If you have any more questions or need further assistance, feel free to ask.`;
    } else if (whoAreYouRegex.test(text)) {
        return `I am the Mid-West University Chatbot. My purpose is to assist you with information about Mid-West University. If you have any questions, feel free to ask!`;
    } else if (howAreYouRegex.test(text)) {
        return `Oh, you know, just living the dream as a chatbot. How thoughtful of you to ask!`;
    } else if (examRegex.test(text)) {
        return `For more information about it please  <a href="${examlink}" target="_blank" class='text-primary'> click here</a>.`;
    } else if (examLinkRegex.test(text)) {
        return `You can find information about job vacancies at Mid-West University on the <a href="${Link}" target="_blank" class='text-primary'>Vacancy Page</a>.`;
    
    

    
    } else if (attendanceRegex.test(text)) {
        return attendanceInfo;

    } else if (deansRegex.test(text)) {
        return deansInfo;

    } else if (hodOfcomputerRegex.test(text)) {
        return hodOfcomputerInfo;
    } else if (hodOfcivilRegex.test(text)) {
        return hodOfcivilInfo;
    } else if (hodOfhydropowerRegex.test(text)) {
        return hodOfhydropowerInfo;
    } else if (hodsOfEngineeringRegex.test(text)) {
        return  hodOfEngineeringInfo;
    } else if (totalnumberofstudentRegex.test(text)) {
        return  totalnumberofstudentInfo;
    } else if (totalnumberoffacultyRegex.test(text)) {
        return  totalnumberoffacultyInfo;
    } else if (facultiesRegex.test(text)) {
        return  facultiesInfo;
    //} else if (engineeringRegex.test(text)) {
            return `For more information please  <a href="${engineeringlink}" target="_blank" class='text-primary'> click here</a>.`;
        
    } else {
        return `Please train me more, I can't get this...`;
    }
};
