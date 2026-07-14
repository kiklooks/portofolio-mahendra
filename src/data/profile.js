const BASE = import.meta.env.BASE_URL;

const profile = {

    personal: {

        name: "Mahendra Abhinawa",

        title: "Fresh Graduate Informatika",

        subtitle: "Full Stack Developer",

        location: "Purbalingga, Indonesia",

        photo: "/profile.png",

        github: "https://github.com/kiklooks",

        linkedin: "www.linkedin.com/in/mahendra-rizqi-abhinawa-bb9a13405",

        cv: `${BASE}cv/Mahendra-Abhinawa-CV.pdf`,

    },

     roles: [

        "Full Stack Web Developer",
        
        "Backend Web Developer",

        "UI/UX Designer",
        
    ],

    about: {

        description:
            `Saya merupakan lulusan Informatika yang memiliki ketertarikan
            pada pengembangan aplikasi web dan backend menggunakan
            Django, Laravel, Vue.js, PostgreSQL, SQLite, serta Git.
            Saya senang membangun aplikasi yang tidak hanya berjalan
            dengan baik, tetapi juga memberikan solusi nyata bagi pengguna.`

    },

    skills: [

        {
            title: "Frontend",
            items: ["Vue.js", "HTML", "CSS", "JavaScript"]
        },

        {
            title: "Backend",
            items: ["Django", "Laravel", "Python", "PHP"]
        },

        {
            title: "Database",
            items: ["PostgreSQL", "MySQL", "SQLite"]
        },

        {
            title: "Tools",
            items: ["Git", "GitHub", "Figma", "VS Code"]
        },

        {
            title: "Deployment",
            items: ["Railway", "Vercel"]
        }

    ],

    experience: [

        {

            year: "Jan-Feb 2024",

            title: "UI/UX Design Intern",

            company: "Kemendikbudristek dikti",

            description: [
                "Mendesain antarmuka aplikasi PUI-PT menggunakan Figma.",
                "Membuat wireframe dan prototype interaktif.",
                "Melakukan revisi desain berdasarkan masukan pembimbing."
            ]

        },

        {

            year: "Mar 2022 - Jan 2023",

            title: "Staff Hubungan Masyarakat",

            company: "Himpunan Mahasiswa Informatika",

            description: [
                "Penggalangan dana bencana alam.",
                "Penggalangan dana panti asuhan.",
                "Memperkenalkan Microsoft Word & Excel dasar di Sekolah Dasar."
            ]

        }

    ],

    projects: [

        {
            title: "Sistem Kasir Koperasi",

            company: "SMAN 1 Bobotsari",

            description:
                "Website Point of Sales berbasis Django yang dilengkapi fitur forecasting menggunakan metode Single Exponential Smoothing untuk memberikan rekomendasi jumlah restok barang.",

            image: `${BASE}projects/kasir.png`,

            tech: [
                "Django",
                "PostgreSQL",
                "Bootstrap",
                "Railway"
            ],

            demo: "https://ta-pos-production.up.railway.app/login",

            github: "https://github.com/kiklooks/TA-POS.git",

            featured: true
        },

        {
            title: "UI/UX Design",

            company: "Kemendikbud",

            description:
                "Perancangan UI/UX menggunakan Figma mulai dari wireframe hingga prototype.",

            image: `${BASE}projects/figma.png`,

            tech: [
                "Figma",
                "UI Design",
                "Prototype"
            ],

            demo: "https://www.figma.com/design/JmJInwpIxlYxbQgvqQrB6u/PUI-PT_kemendikbud?t=02iJ4fno7WjHgMLS-1",

            github: "",

            featured: false
        }

    ],

    github: {

        username: "kiklooks",

        profile: "https://github.com/kiklooks",

        stats: [

            {
                title: "Repositories",
                value: "15+"
            },

            {
                title: "Projects",
                value: "5+"
            },

            {
                title: "Technologies",
                value: "10+"
            }

        ]

    },

    contact: [

        {

            title: "Email",

            value: "abhinawamahendra@gmail.com",

            link: "mailto:abhinawamahendra@gmail.com"

        },

        {

            title: "GitHub",

            value: "kiklooks",

            link: "https://github.com/kiklooks"

        },

        {

            title: "LinkedIn",

            value: "mahendra-abhinawa",

            link: "www.linkedin.com/in/mahendra-rizqi-abhinawa-bb9a13405"

        },

        {

            title: "WhatsApp",

            value: "+62 823-2434-0723",

            link: "https://wa.me/6282324340723"

        }

    ]

}

export default profile