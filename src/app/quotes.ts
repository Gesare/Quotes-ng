export class Quote {
  showDescription: boolean;
  public upvote:number;
  public downvote:number;
  public date:Date;
constructor(public id:number, public quote:string, public author:string, public name,public completeDate: Date){
  this.showDescription=false;
  this.upvote=0;
  this.downvote=0;
}
}
