export interface IcwFilter {
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
