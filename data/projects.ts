import MdiEarth from "~icons/mdi/earth";
import MdiHeadCogOutline from '~icons/mdi/head-cog-outline'
import MdiWaves from '~icons/mdi/waves'

export default {
  onera_sim: {
    showcase: true,
    tags: ['DNS', 'RANS', 'Turbulence Modeling', 'Fluid Mechanics'],
    beginning: new Date('2026-03-02'),
    links: {},
    noBanner: true
  },
  erc_dreamon: {
    showcase: true,
    tags: ['Physics-Constrained Neural Network', 'Constitutive Relation Error', 'Data Assimilation', 'Inverse Problem'],
    beginning: new Date('2025-09-01'),
    end: new Date('2026-02-27'),
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
    beginning: new Date('2024-09-13'),
    end: new Date('2025-02-15'),
    links: {
      github: 'https://github.com/theovidal/ipt-bouncing-honey',
      docs: ''
    }
  },
  aierolab: {
    showcase: true,
    tags: ['3D Modeling', 'Aerodynamics', 'Physics-Informed Neural Network'],
    beginning: new Date('2025-03-05'),
    end: new Date('2025-06-03'),
    links: {
      github: 'https://github.com/theovidal/aierolab',
    },
    attachment: {
      title: 'AIeroLab project: an experimental framework to characterize and optimize aerodynamic performances of an airfoil',
      date: new Date('2025-06-03'),
      authors: 'Théo Vidal, Romain Monchaux',
      path: '/files/Vidal_2025_AIeroLab_An_Experimental_Framework_to_characterize_and_optimize_Aerodynamic_Performances_of_an_Airfoil.pdf'
    }
  },
  lbm: {
    tags: ['Python'],
    beginning: new Date('2025-05-05'),
    end: new Date('2025-05-23'),
    links: {
      github: 'https://github.com/theovidal/study-projects/blob/main/mechanics/lattice-boltzmann-backward-facing-step/Projet_VIDAL.ipynb'
    }
  },
  hickathon: {
    showcase: true,
    tags: ['XGBoost', 'Data prep', 'Geodata'],
    beginning: new Date('2024-11-29'),
    end: new Date('2024-12-01'),
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
    small: true,
    projects: ['hickathon']
  },
  'fluid-dynamics': {
    icon: MdiWaves,
    projects: ['onera_sim', 'ipt', 'lbm'],
    full: true
  }
}
