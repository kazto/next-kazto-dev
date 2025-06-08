// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
    id: number
    name: string
}

export type CurriculumVitaeEntry = {
    from_date: string
    to_date: string
    belongs_to: string
    period: string
    title: string
    role: string
    skill: string
    team: string
    description: Array<string>
}

export type CurriculumVitaeData = {
    speciality: string
    skill: string
    business: string
    self_recommend: Array<string>
    curriculum_vitae: Array<CurriculumVitaeEntry>
}

export type CurriculumVitaeProps = {
    data: CurriculumVitaeData
    build_date: string
}

export type ServerSideProps = {
    props: CurriculumVitaeProps
}

export type KVPair = {
    ckey: keyof CurriculumVitaeData
    value: string
}
