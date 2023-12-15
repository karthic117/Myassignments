import { SocialMediaFeature } from "./SocialMediaFeature"; import { UIComponent } from "./uiComponent";
class Post implements UIComponent, SocialMediaFeature
render(): void {
{
console.log("render for Post class");
}


handleEvent() {
console.log("handleEvent for Post class")
}
browserName: string="CHROME";
sharePost() {
console.log("creating post");
}
}
}
const post0bj=new Post();
postObj.render();
postObj.handleEvent();
postObj.sharePost();
