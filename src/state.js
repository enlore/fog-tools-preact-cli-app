// @flow
const HAS_AUTH = false

import { randString } from './actions'

// type Case = {
  // title: string,
  // text: string
// }


export type SearchFilterKeys = "all" | "TN"

// export only seems to work like so (for types)
export type SearchResult = {
  title: string,
  text: string
}

export type State = {
  hasAuth: boolean,
  accessToken: ?string,
  idToken: ?string,
  refreshToken: ?string,

  userFirstName: ?string,
  userLastName: ?string,
  googleProfileImage: ?string,

  showMobileNav: boolean,

  showResults: boolean,
  currentSearchString: string,

  currentSearchResults: Array<SearchResult>,

  resultsFilter: SearchFilterKeys,
  showJurisdictionFilterMenu: boolean,
}

let state: State = {
  hasAuth: HAS_AUTH,

  accessToken: null,
  idToken: null,
  refreshToken: null,

  userFirstName: null,
  userLastName: null,
  googleProfileImage: null,

  showMobileNav: false,
  showResults: false,
  currentSearchString: '',
  currentSearchResults: [],
  resultsFilter: 'all',

  showJurisdictionFilterMenu: false,

  styles: {
  },

  content: {
    nav: {
      home: { text: 'Home', href: '/' },
      about: { text: 'About', href: '/about' },
      profile: { text: 'Programs', href: '/profile' },
      features: { text: 'Features', href: '/features' },
      pricing: { text: 'Pricing', href: '/pricing' },
      signup: { text: 'Sign Up / Login', href: '/login' },
      logout: { text: 'Log Out', href: '/logout' }
    },

    index: {
      brand: { src: "", alt: "" },
      headline: '',
      searchPlaceholder: '',
      tagline: '',
    },

    about: {
      title: 'About' },

    features: {
      title: 'Features'
    },

    pricing: {
      title: 'Pricing',
    },

    profile: {
      title: 'User Profile',
    }
  }
}

export default state
