export interface IcwFilter {
  //Since every file in Angular is a class, hence a "type" in TypeScript,  IcwFilter is a class, and it is a "type" we defined ourself.
  
  // Below is IcwFilter class's "fields", aka "class variables", aka"attributes" and the type for each attribute.
  name : string,
  sys : {
    country : string
  },
  dt:number,

  weather : [
    {
      description : string,
      icon : string
    }
  ],

  main:{
    temp : number
  }



}
