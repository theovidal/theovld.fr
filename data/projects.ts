import MdiWeb from "~icons/mdi/web";
import MdiHeadCogOutline from '~icons/mdi/head-cog-outline'
import MdiTelescope from '~icons/mdi/telescope'
import MdiTools from '~icons/mdi/tools'
import MdiFolderZipOutline from '~icons/mdi/folder-zip-outline'

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
  },
  ipt: {
    showcase: true,
    tags: ['Physics', 'Experiments'],
    beginning: new Date('2024.09'),
    end: new Date('2025.02'),
    links: {
      github: 'https://github.com/theovidal/ipt-bouncing-honey',
      docs: ''
    }
  },
  aierolab: {
    showcase: true,
    tags: ['3D Modeling', 'Aerodynamics', 'Physics-Informed Neural Network'],
    beginning: new Date('2025.03'),
    end: new Date('2025.05'),
    links: {
      github: 'https://github.com/theovidal/aierolab',
      docs: 'https://github.com/theovidal/aierolab/blob/main/aierolab.pdf'
    }
  },
  lbm: {
    tags: ['Python'],
    beginning: new Date('2025.05.05'),
    end: new Date('2025.05.05'),
    links: {
      github: 'https://github.com/theovidal/study-projects/blob/main/mechanics/lattice-boltzmann-backward-facing-step/Projet_VIDAL.ipynb'
    },
    withoutLogo: true
  },
  hickathon: {
    showcase: true,
    tags: ['Hackathon', 'Water resources', 'XGBoost', 'Data prep'],
    beginning: new Date('2024.12'),
    end: new Date('2024.12'),
    links: {
      github: 'https://github.com/theovidal/hickathon'
    },
    madeWith: {
      'Jimmy Bao': 'https://www.linkedin.com/in/jimmybao01',
      'Anas Chaoui': 'https://www.linkedin.com/in/anas-chaoui-894065201',
      'Eliott Henry': 'https://www.linkedin.com/in/eliott-henry',
      'Louis Nel': '',
      'Arnaud Pelissier': "https://www.linkedin.com/in/arnaud-pel",
    }
  },
  joyero: {
    tags: ['Agents', '3D modeling', 'Generative AI'],
    beginning: new Date('2025.05.03'),
    end: new Date('2025.05.03'),
    links: {
      github: 'https://github.com/theovidal/joyero-mit-hackathon'
    }
  }
}

export const categories = {
  engineering: {
    icon: MdiTools,
    projects: ['mapping', 'aierolab']
  },
  physics: {
    icon: MdiTelescope,
    projects: ['ipt', 'lbm']
  },
  ml: {
    icon: MdiHeadCogOutline,
    projects: ['hickathon', 'joyero']
  },
  algorithmic: {
    icon: MdiFolderZipOutline,
    projects: ['tipe', 'vision']
  },
  web: {
    icon: MdiWeb,
    projects: ['highest', 'bop']
  }
}
