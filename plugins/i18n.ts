import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home: {
            name: 'CV',
            subtitle: 'Engineering student',
            welcome: 'Welcome! 👋',
            introduction: "My name is Théo, I'm a french student in Palaiseau (in the Paris suburb). I've always been drawn to science and technology, thus I wish to participate to the creation of various and innovative projects. On my free time, I develop small projects and climb, among other occupations. Feel free to contact me for any piece of information, or simply talk!",
            schooling: {
                name: 'My schooling',
                carriat: "General high school diploma, Mathematics, Engineering & Physics specialties<br/>Expert mathematics option, Euro section<br/>Distinction, with summa cum laude",
                parc: "MP2I & MPI* (Mathematics, Physics, Computer sciences) Preparatory class<br/>Distinction",
                ensta: "General engineer course"
            },
            experiences: {
                name: 'My professional experiences',
                drinfo: "Year 10 (UK), ninth grade (US) internship - Computer and smartphone repair and maintenance, sales assistance",
                areasName: 'Bourg-Jasseron rest area (A40 motorway)',
                areas: "Catering and services employee for HRC at Areas France - Selling at Columbus Café&Co, Hotel reception at Ibis, shelf restocking, cleaning"
            },
            interests: {
                name: "My interests",
                code: {
                    name: 'Programming',
                    description: "I have had a passion for computing for a long time, and I create my own applications and websites since I'm twelve (2016) to put my ideas into practice without being dependent on others or inflexible tools. Since 2018, I publish some of them on Github to share my creations and open them to everyone's contribution. I have learnt OCaml and C in preparatory class, Javascript, Python, Ruby and Go by self-taught, and I use Jetbrains IDE on Linux. ",
                    stats: {
                        repos: 'GitHub repositories',
                        languages: 'Practiced languages'
                    },
                    link: 'My projects'
                },
                climbing: {
                    name: 'Climbing',
                    description: "Since joining a club in 2018, I've enjoyed climbing routes and bouldering, indoor or outdoor, to challenge myself and clear my head. I complete this practice with various sport (weight training, cardio, mountain biking) so that I'm always in shape to progress.",
                    stats: {
                        level: 'Level (free climbing)',
                        competitions: 'Competitions & contests'
                    },
                    link: "My climbing app"
                },
                cubing: {
                    name: 'Twisty puzzles',
                    description: "I have learnt to solve the Rubik's Cube then various algorithms so I can solve it as fast as I can (Speed Cubing field), then I did the same with other puzzles. My ambition is to eventually participate at competitions, friendly exchange moments on this wide subject. From now on I solve puzzles without assistance to deeply understand their mechanism arouse my curiosity.",
                    stats: {
                        number: 'Different puzzles',
                        threeRecord: '3x3 record'
                    },
                    link: 'Stopwatch (Telegram Bot)'
                }
            }
        },
        portfolio: {
            name: 'Portfolio',
            more: 'More projects',
            see: 'See all on GitHub',
            github: 'GitHub',
            docs: 'Documentation',
            website: 'Website',
            discord: 'Discord server',

            highest: {
                name: 'Highest',
                short: "Climbing web app",
                description: "At the crossroads of my passions for IT and climbing, this specific tool for climbers serves to organize one's routes, their progression on it and their goals. QR-Codes can be printed in climbing gyms for a fast addition."
            },
            bop: {
                name: "BecauseOfProg",
                short: "Blog & developers team",
                description: "The BecauseOfProg is a team founded in 2017 by myself and two friends to create together and share our discoveries on IT, digital and programming. We are also maintaining a small community on our Discord server."
            },
            mapping: {
                name: "3D Mapping",
                short: "3D cartography platform",
                description: "A classmate and I have chosen this subject for our high school engineering project. A 3D-printed platform equipped with a LiDAR sensor realises a live-transmitted scan of a room. Calculations and surface rebuilding are then practicable on this raw data."
            },
            tipe: {
                name: "Earthquake reconnaissance drone",
                short: "TIPE 2023 - The City",
                description: "I have designed for my scientific preparatory class trajectory planification algorithms for drones so they can explore zones devastated by an earthquake, taking into account topography and population density. The goal was to realise an efficient scan as fast as possible so emergency services on ground are relieved, and precious data on the condition of the premises and the people to be rescued is transmitted to them."
            }
        },
        resources: {
            name: 'Resources'
        }
    },
    fr: {
        home: {
            name: 'CV',
            subtitle: 'Étudiant ingénieur',
            welcome: 'Bienvenue! 👋',
            introduction: "Je m'appelle Théo, je suis actuellement étudiant en école d'ingénieur à Palaiseau (banlieue parisienne). J'ai toujours été attiré par les sciences et la technologie, je souhaite ainsi participer à la création de projets variés et innovants. Sur mon temps libre, je développe des petits projets et fais de l'escalade, parmis d'autres occupations. N'hésitez-pas à me contacter pour toute information, ou simplement pour discuter!",
            schooling: {
                name: 'Mon parcours scolaire',
                carriat: "Baccalauréat général, spécialités Mathématiques, Sciences de l'ingénieur & Sciences physiques<br/>Option Mathématiques Expertes, Section européenne<br/>Mention très bien avec les félicitations du jury",
                parc: "Classes préparatoires MP2I et MPI* (Mathématiques, Physique, Informatique)<br/>Mention très bien",
                ensta: "Formation d'ingénieur généraliste"
            },
            experiences: {
                name: 'Mes expériences professionnelles',
                drinfo: "Stage de 3ème - Réparation et maintenance d'ordinateurs et de téléphones portables, assistance à la vente",
                areasName: 'Aire de Bourg-Jasseron (autoroute A40)',
                areas: "Employé de restauration et services pour HRC chez Areas France - Vente chez Columbus Café&Co, Réception hôtelière chez Ibis, mise en rayon, ménage"
            },
            interests: {
                name: "Mes centres d'intérêt",
                code: {
                    name: 'Programmation informatique',
                    description: "Passionné de longue date par l'informatique, je réalise mes propres applications et sites web depuis mes 12 ans (2016) pour concrétiser mes idées sans être dépendant d'autrui ou d'outils inflexibles. Je publie depuis 2018 certains d'entre eux sur GitHub pour partager mes créations et les ouvrir à la contribution de tous. J'ai appris les langages OCaml et C en classe préparatoire, Javascript, Python, Ruby et Go en autodidacte, et utilise les IDE Jetbrains sur Linux. ",
                    stats: {
                        repos: 'Dépôts GitHub',
                        languages: 'Langages pratiqués'
                    },
                    link: 'Mes projets'
                },
                climbing: {
                    name: 'Escalade',
                    description: "Depuis 2018 et mon inscription en club, j'apprécie arpenter des voies de difficulté ou de bloc, en intérieur ou en extérieur, pour me défier et me vider la tête. Je complète cette pratique par des sports variés (musculation, cardio, VTT) pour toujours avoir une forme me permettant de progresser.",
                    stats: {
                        level: 'Niveau (tête)',
                        competitions: 'Compétitions & contests'
                    },
                    link: "Mon application d'escalade"
                },
                cubing: {
                    name: 'Casses-têtes "twisty"',
                    description: "J'ai appris à résoudre le Rubik's Cube puis appris divers algorithmes afin de le résoudre le plus rapidement possible (discipline du Speed Cubing), puis j'ai fait de même avec d'autres casses-têtes. J'ai à terme l'ambition de participer à des compétitions, moments conviviaux d'échange sur ce vaste domaine. Je résout désormais des puzzles sans assistance pour comprendre leur mécanisme en profondeur et éveiller ma curiosité.",
                    stats: {
                        number: 'Puzzles différents',
                        threeRecord: 'Record au 3x3'
                    },
                    link: 'Chronomètre (Bot Telegram)'
                }
            }
        },
        portfolio: {
            name: 'Portfolio',
            more: 'Davantage de projets',
            see: 'Tout voir sur GitHub',
            github: 'GitHub',
            docs: 'Documentation',
            website: 'Site Internet',
            discord: 'Serveur Discord',

            highest: {
                name: 'Highest',
                short: "Application web d'escalade",
                description: "Au croisement de mes passions pour l'escalade et le développement informatique, cet outil spécial pour le grimpeur permet d'organiser ses voies, ses progressions dessus et ses objectifs. Des QR-Code peuvent être imprimés dans les salles d'escalade pour un ajout rapide."
            },
            bop: {
                name: "BecauseOfProg",
                short: "Blog & Équipe de développeurs",
                description: "La BecauseOfProg est une équipe fondée en 2017 par moi-même et deux amis pour créer ensemble et partager nos découvertes sur l'informatique, le numérique et la programmation informatique. Nous entretenons également une petite communauté sur notre serveur Discord."
            },
            mapping: {
                name: "Mapping 3D",
                short: "Plateforme de cartographie 3D",
                description: "Avec un camarade, nous avons choisi ce sujet pour notre projet de Sciences de l'Ingénieur de Terminale pour le Baccalauréat. Une plateforme imprimée en 3D et équipée d'un capteur LiDAR réalise un scan d'une pièce retranscrit en direct sur un site Internet. Des calculs et reconstructions de surface sont ensuite réalisables à partir de ces données brutes."
            },
            tipe: {
                name: "Drone de reconnaissance pour séisme",
                short: "TIPE 2023 - La Ville",
                description: "Pour mon projet de classe préparatoire scientifique, j'ai conçu des algorithmes de planification de trajectoire pour des drones afin d'explorer des zones sinistrées par un séisme, en tenant compte de la topographie et des densités de population. L'objectif était de réaliser un balayage efficace et le plus rapide possible pour soulager les secours sur le terrain et fournir de précieuses informations sur l'état des lieux et les personnes à sauver."
            }
        },
        resources: {
            name: 'Ressources'
        }
    },
    es: {
        home: {
            name: 'CV',
            subtitle: 'Estudiante de ingeniería'
        },
        portfolio: {
            name: 'Portfolio'
        },
        resources: {
            name: 'Recursos'
        }
    },
}

const locales = ['en', 'fr']

const i18n = createI18n({
    locale: 'en',
    messages,
    legacy: false
})
export { i18n, locales }

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(i18n)
})