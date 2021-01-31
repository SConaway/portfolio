export default {
    main: {
        name: 'Steven Conaway',
        image: {
            path: 'profile.jpg',
            width: 294,
            height: 403,
        },
        email: 'sjconaway48@gmail.com',
        phone: '(661) 236-5956',
        address: {
            street: '28874 Seco Canyon Road',
            city: 'Santa Clarita',
            state: 'CA',
            zip: '91390',
        },
        website: 'https://www.stevenconaway.me',
        resumeDownload:
            'https://stevenconaway.me/steven-conaway-resume-2021-01-02.pdf',
        description:
            "While the high school I have attended does not offer classes in the ever-changing fields of technology, I have found a way to integrate these fields into my study: I have taken online courses in STEM fields independently and am the founding president of my school's VEX Robotics Club. Additionally, I have significant STEM experience outside of my school. I enjoy sharing my knowledge and experience with others in my community. Most recently, I was a recipient of the Environmental Justice Angel Award at the East Los Angeles Community Youth Center's annual Gala in November 2019.",
        socials: [
            {
                name: 'LinkedIn',
                url: 'https://linkedin.com/in/steven-conaway',
                className: ['fab', 'linkedin'],
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/StevenConaway4',
                className: ['fab', 'twitter'],
            },
            {
                name: 'GitHub',
                url: 'http://github.com/sconaway',
                className: ['fab', 'github'],
            },
            {
                name: 'Email',
                url: 'mailto://sjconaway48@gmail.com',
                className: ['fa', 'envelope'],
            },
        ],
    },
    resume: {
        education: [
            {
                school: 'Saint Monica Academy',
                degree: 'High School Diploma',
                graduated: 'June 2021',
                description:
                    "Saint Monica Academy offers her students a classical education, teaching them critical thinking skills in addition to giving them an academically rigorous education. The teachers inspire students to excel at all things they attempt. While attending Saint Monica Academy's high school, I have received many honors. This past year, I was nominated to be president of our Honor Society. I am the founding president of our Robotics Club, which added an Engineering Track this year. As the project leader, I was responsible for organization of the project, planning meetings, and other administrative tasks.",
            },
        ],
        work: [
            {
                company: 'We2Link',
                title: 'Mobile Application Developer',
                years: 'August 2019 – Present',
                description:
                    'Designing and programming Want 2 Remember, a React Native mobile application for iOS and Android to help those with traumatic brain injuries. It tracks daily activities, appointments, and other crucial memories. Developing by using the Agile methodology, with Jira for project management. Git branches and GitHub Pull Requests are used for easy code management. I assisted in the creation of tutorial videos introducing new team members to our project structure and workflow.',
            },
            {
                company: 'East Los Angeles Community Youth Center',
                title: 'Tech Instructor',
                years: 'June 2018 – Present',
                description:
                    'Taught a "How to Build your own Arduino-based Smart Car" class, "Introduction to Drones", and "LEGO Robotics" to underserved elementary- and middle-school students. Our Robotics team won second place in the First Annual Boyle Heights Robotics Competition. Also, developed the curriculum currently in use for the "How to Build your own Arduino-based Smart Car" class. In November 2020, I began teaching “Introductory Robotics Programming”, a virtual class teaching students basic programming skills by use of VEXCode VR.',
            },
            {
                company: 'Unlocked Escape Rooms',
                title: 'Embedded Application Developer',
                years: 'November 2018 – May 2019',
                description:
                    'Designed and programmed Arduino-based props for escape rooms, such as RFID door locks. These props required the Arduino to interface with various hardware, such as RFID tags, electronic locks, and arrays of buttons.',
            },
            {
                title: 'Tutor',
                years: 'January 2018 – February 2020',
                description:
                    'Tutored middle- and high- school students from Saint Monica Academy in various subjects, including Latin, Math, and Java Programming.',
            },
        ],
        skillMessage:
            "I've gained knowledge in many areas of Computer Science through my own projects and by the work done for others.",
        skills: [
            {
                name: 'Git',
                level: '60%',
            },
            {
                name: 'ReactJS',
                level: '50%',
            },
            {
                name: 'React Native',
                level: '100%',
            },
            {
                name: 'Modern JavaScript',
                level: '100%',
            },
            {
                name: 'CSS3',
                level: '80%',
            },
            {
                name: 'HTML5',
                level: '90%',
            },
            {
                name: 'Arduino',
                level: '90%',
            },
            {
                name:
                    'Python and embedded Python (MicroPython and CircuitPython)',
                level: '70%',
            },
        ],
    },
    portfolio: {
        projects: [
            {
                title: 'Resume Website',
                category: 'A resume website based on React and Next.js.',
                image: {
                    name: 'resume-website.png',
                    extension: 'png',
                    local: true,
                    width: 1920,
                    height: 969,
                },
                url: 'https://github.com/SConaway/portfolio',
            },
            {
                title: 'CircuitPython-based Sensor Board',
                category:
                    'A drone-mounted PCB with air quality sensors based on an Adafruit Feather running CircuitPython.',
                image: {
                    name: 'sensors.png',
                    extension: 'png',
                    local: true,
                    width: 2590,
                    height: 1876,
                },
                url: 'https://github.com/ELAScience/AQ-drone',
            },
        ],
    },
    testimonials: [],
};
