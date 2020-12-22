// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type CarricurumVitaeEntry = {
  from_date: string
  to_date: string 
  period: string
  title: string
  role: string
  skill: string
  team: string
  description: Array<string>
}

export type CarricurumVitaeData = {
  speciality: string
  skill: string
  business: string
  self_recommend: Array<string>
  carriculum_vitae: Array<CarricurumVitaeEntry>
}
