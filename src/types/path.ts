import { ILocation } from "./location";

export interface IPath {
    _id?: string;
    name: string;
    locations: Array<ILocation>
};