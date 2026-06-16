import MdiEarth from "~icons/mdi/earth";
import MdiHeadCogOutline from '~icons/mdi/head-cog-outline'
import MdiTelescope from '~icons/mdi/telescope'
import MdiTools from '~icons/mdi/tools'
import MdiFolderZipOutline from '~icons/mdi/folder-zip-outline'
import MdiWaves from '~icons/mdi/waves'

export default {
  onera_sim: {
    showcase: true,
    tags: ['DNS', 'RANS', 'Turbulence Modeling', 'Fluid Mechanics'],
    beginning: new Date('2026.04'),
    links: {},
    noBanner: true
  },
  erc_dreamon: {
    showcase: true,
    tags: ['Physics-Constrained Neural Network', 'Constitutive Relation Error', 'Data Assimilation', 'Inverse Problem'],
    beginning: new Date('2025.09'),
    end: new Date('2026.03'),
    madeWith: {
      'Pr. Ludovic Chamoin (Paris-Saclay)': 'https://lmps.ens-paris-saclay.fr/fr/annuaire-des-personnes/ludovic-chamoin-0',
      'Sahar Farahbakhsh (Paris-Saclay)': 'https://scholar.google.com/citations?user=MgomsLYAAAAJ&hl=en',
      'Antoine Benady (Paris-Saclay, ETH Zurich)': 'https://scholar.google.com/citations?user=xLe4n4AAAAAJ&hl=fr'
    },
    links: {
      docs: 'https://erc-dreamon.ens-paris-saclay.fr/fr'
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
    }
  },
  hickathon: {
    showcase: true,
    tags: ['XGBoost', 'Data prep', 'Geodata'],
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
  }
}

export const categories = {
  'ai-emulation': {
    icon: MdiHeadCogOutline,
    projects: ['aierolab', 'erc_dreamon'],
  },
  'climate-geo': {
    icon: MdiEarth,
    projects: ['hickathon']
  },
  'fluid-dynamics': {
    icon: MdiWaves,
    projects: ['onera_sim', 'ipt', 'lbm'],
    full: true
  }
}
