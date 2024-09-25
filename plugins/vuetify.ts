import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi-svg'
import { fr, es, en } from 'vuetify/locale'

import MdiMenuDown from '~icons/mdi/menu-down'
import MdiChevronLeft from '~icons/mdi/chevron-left'
import MdiChevronRight from '~icons/mdi/chevron-right'
import MdiCalendar from '~icons/mdi/calendar'
import MdiPlus from '~icons/mdi/plus'
import MdiMinus from '~icons/mdi/minus'
import MdiPageFirst from '~icons/mdi/page-first'
import MdiPageLast from '~icons/mdi/page-last'
import MdiCloseCircleOutline from '~icons/mdi/close-circle-outline'
import MdiClose from '~icons/mdi/close'
import MdiCheckboxBlankOutline from '~icons/mdi/checkbox-blank-outline'
import MdiCheckboxMarked from '~icons/mdi/checkbox-marked'
import MdiMinusBox from '~icons/mdi/minus-box'
import MdiSortAscending from '~icons/mdi/sort-ascending'
import MdiSortDescending from '~icons/mdi/sort-descending'
import MdiRadioboxBlank from '~icons/mdi/radiobox-blank'
import MdiRadioboxMarked from '~icons/mdi/radiobox-marked'
import MdiStar from '~icons/mdi/star'
import MdiStarOutline from '~icons/mdi/star-outline'
import MdiStarHalfFull from '~icons/mdi/star-half-full'
import MdiCheckboxMarkedCircleOutline from '~icons/mdi/checkbox-marked-circle-outline'
import MdiInformationOutline from '~icons/mdi/information-outline'
import MdiAlertOutline from '~icons/mdi/alert-outline'
import MdiTrashCanOutline from '~icons/mdi/trash-can-outline'
import MdiCheck from '~icons/mdi/check'
import MdiCircle from '~icons/mdi/circle'
import MdiChevronDown from '~icons/mdi/chevron-down'
import MdiPencilOutline from '~icons/mdi/pencil-outline'
import MdiMenu from '~icons/mdi/menu'
import MdiLoading from '~icons/mdi/loading'
import MdiUnfoldMoreHorizontal from '~icons/mdi/unfold-more-horizontal'
import MdiPaperclip from '~icons/mdi/paperclip'
import MdiMagnify from "~icons/mdi/magnify";

import MdiGithub from '~icons/mdi/github'
import MdiLinkedin from '~icons/mdi/linkedin'
import MdiEmail from '~icons/mdi/email-outline'
import IconTelegram from '~icons/custom/telegram'
import MdiOpenInNew from '~icons/mdi/open-in-new'

const iconAliases: IconAliases = {
    // Default Vuetify icons
    complete: MdiCheck,
    cancel: MdiCloseCircleOutline,
    close: MdiClose,
    delete: MdiTrashCanOutline,
    clear: MdiClose,
    success: MdiCheckboxMarkedCircleOutline,
    info: MdiInformationOutline,
    warning: MdiAlertOutline,
    error: MdiCloseCircleOutline,
    prev: MdiChevronLeft,
    next: MdiChevronRight,
    checkboxOn: MdiCheckboxMarked,
    checkboxOff: MdiCheckboxBlankOutline,
    checkboxIndeterminate: MdiMinusBox,
    delimiter: MdiCircle,
    sortAsc: MdiSortAscending,
    sortDesc: MdiSortDescending,
    expand: MdiChevronDown,
    menu: MdiMenu,
    subgroup: MdiMenuDown,
    dropdown: MdiMenuDown,
    radioOn: MdiRadioboxMarked,
    radioOff: MdiRadioboxBlank,
    edit: MdiPencilOutline,
    ratingEmpty: MdiStarOutline,
    ratingFull: MdiStar,
    ratingHalf: MdiStarHalfFull,
    loading: MdiLoading,
    first: MdiPageFirst,
    last: MdiPageLast,
    unfold: MdiUnfoldMoreHorizontal,
    file: MdiPaperclip,
    plus: MdiPlus,
    minus: MdiMinus,
    calendar: MdiCalendar,

    github: MdiGithub,
    linkedin: MdiLinkedin,
    email: MdiEmail,
    telegram: IconTelegram,
    openinnew: MdiOpenInNew
}

const commonColors = {
    primary: '#5ea7ef'
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        locale: {
            messages: { fr, en, es },
        },
        theme: {
            defaultTheme: 'light',
            themes: {
                light: {
                    colors: {
                        ...commonColors,
                        background: '#fafafa',
                        opposite: '#000'
                    }
                },
                dark: {
                    dark: true,
                    colors: {
                        ...commonColors,
                        background: '#000',
                        opposite: '#fafafa'
                    }
                }
            }
        },
        icons: {
            defaultSet: 'mdi',
            sets: {
                mdi
            },
            aliases: iconAliases
        }
    })

    nuxtApp.vueApp.use(vuetify)
})