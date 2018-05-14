// construction
export function zarr (len: ?number = 16): Array<number> {
  return Array(len).fill(0)
}

const sampleBody =  "[fn. 3] 3. We note that in City of Los Angeles v. Industrial Acc. Com. (Morse) supra, 63 Cal. 2d 263, a device calculated by the appeals board and the petitioner therein to defeat the right of the City of Los Angeles to credit allowances to a policeman's widow against a workmen's compensation award, was nullified by the court.\n"

const sampleTitle = "City of Los Angeles v. Industrial Acc. Com. (Morse)"
const sampleSubtitle = "63 Cal. 2d 263"

export function randString (len: ?number): string {
  const alphabet = '           abcdefghijklnpqrstuvxyzbfghijklmnpqrstuvwzbcdfghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return zarr(len)
    .map(_ => alphabet[Math.floor(Math.random() * 103)])
    .reduce((acc, c) => acc += c, '')
}

export function randResults (count: ?number): Array<SearchResult> {
  return zarr(count).map(_ => ({ title: sampleTitle, subtitle: sampleSubtitle, text: sampleBody }))
}


