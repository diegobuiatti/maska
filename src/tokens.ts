interface MaskToken {
  pattern: RegExp
  multiple?: boolean
  optional?: boolean
  repeated?: boolean
  transform?: (char: string) => string
}

export type MaskTokens = Record<string, MaskToken>

export const tokens: MaskTokens = {
  '#': { pattern: /[0-9]/ },
  '@': { pattern: /[a-zA-Z]/ },
  '*': { pattern: /[a-zA-Z0-9]/ },
  '0': { pattern: /[0-9]/, optional: true },
  '9': { pattern: /[0-9]/, repeated: true },
  'A': { pattern: /[a-zA-Z]/, transform: (v) => v.toUpperCase() },
  'a': { pattern: /[a-zA-Z]/, transform: (v) => v.toLowerCase() },
  'S': { pattern: /[a-zA-Z0-9]/, transform: (v) => v.toUpperCase() },
  's': { pattern: /[a-zA-Z0-9]/, transform: (v) => v.toLowerCase() },
}
