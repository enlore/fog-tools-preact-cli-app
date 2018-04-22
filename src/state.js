// @flow
const HAS_AUTH = false

import { randString } from './actions'

export type SearchFilterKey = 'all' | 'active'
export type SearchResult = string

export type State = {
  hasAuth: boolean,
  showResults: boolean,
  currentSearchString: string,
  currentSearchResults: Array<SearchResult>,
  resultsFilters: Array<SearchFilterKey>,
  indexTransitionFired: boolean,
}

let state: State = {
  hasAuth: HAS_AUTH,
  showResults: false,
  currentSearchString: '',
  currentSearchResults: [],
  resultsFilters: [ 'all' ],

  // flow typing is opt-in, so this is fine until the objects type definition
  // is notated as exclusive
  // TODO extract to imported module
  content: {
    nav: {
      about: { text: 'About', href: '/about' },
      features: { text: 'Features', href: '/features' },
      pricing: { text: 'Pricing', href: '/pricing' },
      signup: { text: 'Sign Up / Login', href: '/login' },
      logout: { text: 'Log Out', href: '/logout' }
    },

    footer : {
      copyright: "© 2018 Brand - All rights reserved. Terms, conditions, features, availability, pricing, fees, service and support options subject to change without notice.",
      headline: "",
      tagline: "",
    },

    index: {
      brand: { src: "", alt: "" },
      headline: 'Hello',
      tagline: "It's the Home Screen",
    },

    about: {
      title: ''
    },

    features: {
      title: ''
    },

    pricing: {
      title: '',
    },
  }
}

export default state
