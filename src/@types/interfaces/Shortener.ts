export interface IShortener {
  urlID: string;
  originalURL: string;
  clicks?: number;
  date?: string;
  aliases?: string;
}
