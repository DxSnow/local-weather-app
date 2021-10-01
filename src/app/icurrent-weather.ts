export interface ICurrentWeather {
  city:string, //cannot put =data here. Only definde type. because " An interface property cannot have an initializer."
  country: string,
  date: Date,
  image:string,
  temperature:number,
  description: string


}
