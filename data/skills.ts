import MdiAtomVariant from '~icons/mdi/atom-variant'
import MdiBrain from '~icons/mdi/brain'
import MdiCodeBraces from '~icons/mdi/code-braces'
import MdiImageFilterHdr from '~icons/mdi/image-filter-hdr'
import MdiHiking from '~icons/mdi/hiking'
import MdiEarth from '~icons/mdi/earth'

export interface SkillCategory {
  id: string
  titleKey: string
  icon: string
  color: string
  skills: string[]
}

export const technicalArsenal: SkillCategory[] = [
  {
    id: 'physics',
    titleKey: 'skills.categories.physics',
    icon: MdiAtomVariant,
    color: '#42A5F5',
    skills: ['Fluid Mechanics (RANS, DNS, LBM)', 'Finite Element Method (FEM)', 'Dynamical Systems', 'Data Assimilation (Kalman Filters)']
  },
  {
    id: 'ai',
    titleKey: 'skills.categories.ai',
    icon: MdiBrain,
    color: '#AB47BC',
    skills: ['PyTorch', 'TensorFlow', 'Physics-Informed Neural Networks (PINNs)', 'XGBoost', 'MATLAB', 'Optimization']
  },
  {
    id: 'engineering',
    titleKey: 'skills.categories.engineering',
    icon: MdiCodeBraces,
    color: '#26A69A',
    skills: ['Go', 'C/C++', 'Python', 'OCaml', 'Git', 'Fusion360']
  }
]

export interface Hobby {
  id: string
  titleKey: string
  icon: string
  color: string
  link?: string
}

export const hobbies: Hobby[] = [
  {
    id: 'climbing',
    titleKey: 'hobbies.climbing',
    icon: MdiImageFilterHdr,
    color: '#FF7043',
    link: 'https://highest.netlify.app'
  },
  {
    id: 'hiking',
    titleKey: 'hobbies.hiking',
    icon: MdiHiking,
    color: '#66BB6A',
    // TODO: replace with your real Komoot / Strava profile URL
    link: 'https://www.komoot.com/fr-fr/user/1750999381237'
  },
  {
    id: 'travel',
    titleKey: 'hobbies.travel',
    icon: MdiEarth,
    color: '#26C6DA',
    link: 'https://www.polarsteps.com/theovld'
  }
]