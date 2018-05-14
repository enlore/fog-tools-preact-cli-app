// @flow

export default {
  setFilter ({ resultsFilter}: { resultsFilter: string }, filter: SearchFilterKeys):
  { resultsFilter: string } {
    return { resultsFilter: filter }
  },

  removeFilterTag (
    { currentJurisdictionFilters }: { currentJurisdictionFilters: Array<string>  },
    tag: string
  ): { currentJurisdictionFilters: Array<string> } {
    return { currentJurisdictionFilters: currentJurisdictionFilters.filter(t => t !== tag) }
  },

  addFilterTag (
    { currentJurisdictionFilters }: { currentJurisdictionFilters: Array<string>  },
    tag: string
  ): { currentJurisdictionFilters: Array<string> } {
    if (!!~currentJurisdictionFilters.indexOf(tag)) { // already in there
      return { currentJurisdictionFilters }
    } else {
      return { currentJurisdictionFilters: [...currentJurisdictionFilters, tag] }
    }
  },

  toggleFilterTag (
    { currentJurisdictionFilters }: { currentJurisdictionFilters: Array<string>  },
    tag: string
  ): { currentJurisdictionFilters: Array<string> } {
    if (!!~currentJurisdictionFilters.indexOf(tag)) { // already in there
      // no action reuse like this, need to pull actions out of literal def and import
      return { currentJurisdictionFilters: currentJurisdictionFilters.filter(t => t !== tag) }
    } else {
      return { currentJurisdictionFilters: [...currentJurisdictionFilters, tag] }
    }
  },

  setShowJurisdictionFilterMenu ({ showJurisdictionFilterMenu }: { showJurisdictionFilterMenu: boolean }, setTo: boolean): { showJurisdictionFilterMenu: boolean }{
    return { showJurisdictionFilterMenu: setTo }
  }
}
