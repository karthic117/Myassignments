
import { UIComponent } from "./uiComponent"; 
class Button implements UIComponent
{
render(): void 
{
console.log("render");
}
handleEvent()
{
 console.log("handleEvent")
}
browserName: string="SDFSD";
}


const objCreation1-new Button();
objCreation1.handleEvent(); objCreation1.render();