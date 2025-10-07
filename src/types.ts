// src/types.ts
export interface HelloProps {
    name: string;             // required
    greeting?: string;        // optional, overrides default
    language?: 'EN' | 'LT';   // optional, defaults to 'EN'
    paragraph?: string;       // optional, overrides default
}