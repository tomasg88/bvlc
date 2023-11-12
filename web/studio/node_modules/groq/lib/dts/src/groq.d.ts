/**
 * Pass-through groq template tag. This is a no-op, but it helps editor integrations
 * understand that a string represents a GROQ query in order to provide syntax highlighting
 * and other features.
 *
 * @param strings - Template string parts
 * @param keys - Template string keys
 * @returns The same string as the input
 * @public
 */
declare function groq(strings: TemplateStringsArray, ...keys: any[]): string
export default groq

export {}
