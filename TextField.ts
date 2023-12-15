import { UIComponent } from "./uiComponent";
class TextField implements UIComponent
{
clickText: string;
click(cText:string): string
{
this.clickText=cText;
console.log(cText);
return cText;
}
render(): void
 {
console.log("render");
}
handleEvent()
 {
 console.log("handleEvent")
}
browserName: string="CHROME";

}


const_text=new TextField();
text.click("kumar");
text.render();
console.log("browser are :${text.browserName}); 
//console.log('credentials are :${clickText}"); 
text.handleEvent();