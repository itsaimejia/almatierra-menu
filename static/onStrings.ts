const removeSpaces = (str: string) => str.replace(/\s/g, '')
export const normilizeRoute = (str: string) => removeSpaces(str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase())
