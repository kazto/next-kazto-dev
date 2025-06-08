import type { CurriculumVitaeData, CurriculumVitaeProps, KVPair } from '../interfaces'

export const CVHeader = ({ data }: CurriculumVitaeProps) => {
    const contents: Array<KVPair> = [
        { ckey: 'speciality' as keyof CurriculumVitaeData, value: '特徴' },
        { ckey: 'skill' as keyof CurriculumVitaeData, value: '技術' },
        { ckey: 'self_recommend' as keyof CurriculumVitaeData, value: '自己分析' },
        { ckey: 'region_of_interest' as keyof CurriculumVitaeData, value: '興味分野' },
    ]
    const listBase = []

    for (const i in contents) {
        listBase.push(
            <div className="divtable" key={i.toString()}>
                <div className="divtabletitle">{contents[i].value}</div>
                <div className="divtablebody">{data[contents[i].ckey] as string}</div>
            </div>
        )
    }
    return listBase
}
