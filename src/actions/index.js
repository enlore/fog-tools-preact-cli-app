import init from './init'
import mobileNav from './mobileNav'
import auth from './auth'
import search from './search'
import filter from './filter'

export default function bindActions (store) {
  return {
    init,
    ...mobileNav,
    ...auth,
    ...search,
    ...filter
  }
}
