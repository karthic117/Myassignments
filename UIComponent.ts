import { Console } from "console";
export interface UIComponent
{
render(): void; handleEvent();
browserName:string;
}