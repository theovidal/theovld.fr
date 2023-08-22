import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home: {
            name: 'CV',
            subtitle: 'Engineering student',
            welcome: 'Welcome! 👋',


        },
        portfolio: {
            name: 'Portfolio'
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
            introduction: '',
            curriculum: {
                name: 'Mon parcours scolaire',
                carriat: "Baccalauréat général, spécialités Mathématiques, Sciences de l'ingénieur & Sciences physiques<br/>Option Mathématiques Expertes, Section européenne<br/>Mention très bien avec les félicitations du jury",
                parc: "Classes préparatoires MP2I et MPI*<br/>Mention très bien",
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
                    description: "Passionné de longue date par l'informatique, je réalise mes propres applications et sites web depuis mes 12 ans (2016) pour concrétiser mes idées sans être dépendant d'autrui ou d'outils inflexibles. Je publie depuis 2018 certains d'entre eux sur GitHub pour partager mes créations et les ouvrir à la contribution de tous.<br>J'ai appris les langages OCaml et C en classe préparatoire, Javascript, Python, Ruby et Go en autodidacte, et utilise les IDE Jetbrains sur Linux. ",
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
                puzzles: {
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
                description: "Au croisement de mes passions pour l'escalade et le développement informatique, cet outil spécial pour le grimpeur permet de renseigner ses voies, ses progressions dessus et ses objectifs. Des QR-Code peuvent être imprimés dans les salles d'escalade pour un ajout rapide."
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
                description: "Chaque élève de classe préparatoire scientifique doit réaliser un projet en lien avec le thème de l'année : la ville. J'ai conçu des algorithmes de planification de trajectoire pour des drones afin d'explorer des zones sinistrées par un séisme, en tenant compte de la topographie et des densités de population. L'objectif était de réaliser un balayage efficace et le plus rapide possible pour soulager les secours sur le terrain et fournir de précieuses informations sur l'état des lieux et les personnes à sauver."
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

const i18n = createI18n({
    locale: 'en',
    messages,
    legacy: false
})
export { i18n }

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(i18n)
})