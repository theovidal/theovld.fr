import MdiWeb from "~icons/mdi/web";
import MdiHeadCogOutline from '~icons/mdi/head-cog-outline'
import MdiTelescope from '~icons/mdi/telescope'
import MdiTools from '~icons/mdi/tools'

export default {
  highest: {
    tags: ['Vue.js'],
    open: 'https://highest.netlify.app',
    openText: 'open',
    showcase: true,
    beginning: new Date('2019.11'),
    links: {
      github: 'https://github.com/theovidal',
    }
  },
  bop: {
    tags: ['Vue.js', 'Writing', 'Project management'],
    open: 'https://becauseofprog.fr',
    openText: 'visit',
    showcase: true,
    beginning: new Date('2017.03'),
    links: {
      github: 'https://github.com/theovidal',
      discord: 'https://discord.gg/tcV7GQq'
    },
    madeWith: {
      'Gildas Garin-Hameline': 'https://www.linkedin.com/in/gildas-gh/',
      'Noéwen Boisnard': 'https://www.linkedin.com/in/no%C3%A9wen-boisnard/'
    }
  },
  tipe: {
    tags: ['OCaml', 'Supervised Learning', 'TSP'],
    showcase: true,
    beginning: new Date('2022.03'),
    end: new Date('2023.07'),
    links: {
      github: 'https://github.com/theovidal/tipe'
    }
  },
  mapping: {
    tags: ['Electron', 'Arduino', '3D Printing'],
    showcase: true,
    beginning: new Date('2021.03'),
    end: new Date('2021.06'),
    links: {
      docs: 'https://github.com/theovidal/mapping/blob/main/assets/docs/Dossier%20Projet%202021%20-%20CAPITANIO%20Kylian%2C%20VIDAL%20Th%C3%A9o.pdf',
      github: 'https://github.com/theovidal/mapping'
    },
    madeWith: {
      'Kylian Capitanio': ''
    }
  },
  vision: {
    tags: ['MATLAB', 'Computer vision', 'AC'],
    showcase: false,
    beginning: new Date('2023.11'),
    end: new Date('2024.02'),
    links: {
      github: 'https://github.com/theovidal/vehicule-vision'
    },
    madeWith: {
      'Louis Marchal': 'https://www.linkedin.com/in/louis-marchal-fr/'
    }
  }
}

export const categories = {
  web: {
    icon: MdiWeb,
    projects: ['highest', 'bop']
  },
  algorithmic: {
    icon: MdiHeadCogOutline,
    projects: ['tipe']
  },
  engineering: {
    icon: MdiTelescope,
    projects: ['mapping', 'vision']
  },
  /*utils: {
    icon: MdiTools,
    projects: []
  }*/
}
