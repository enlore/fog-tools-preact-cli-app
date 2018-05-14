// @flow

export default {
  hideMobileNav(
    { showMobileNav }: { showMobileNav: boolean }
  ): { showMobileNav: boolean } {
    return { showMobileNav: false }
  },

  toggleShowMobileNav(
    { showMobileNav }: { showMobileNav: boolean }
  ): { showMobileNav: boolean } {
    return { showMobileNav: !showMobileNav }
  }
}
