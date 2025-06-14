import React from 'react'
import type { CurriculumVitaeData, CurriculumVitaeEntry, CurriculumVitaeProps, KVPair } from '../../interfaces'

type BelongsToDictionary = {
    [key: string]: string
}

const CurriculumVitaePage = ({ data, build_date }: CurriculumVitaeProps): JSX.Element => {
    const { curriculum_vitae } = data as CurriculumVitaeData

    const contents: Array<KVPair> = [
        { ckey: 'speciality' as keyof CurriculumVitaeData, value: '特徴' },
        { ckey: 'skill' as keyof CurriculumVitaeData, value: '技術' },
        { ckey: 'self_recommend' as keyof CurriculumVitaeData, value: '自己分析' },
        { ckey: 'region_of_interest' as keyof CurriculumVitaeData, value: '興味分野' },
    ]
    const listBase: JSX.Element[] = []

    for (const i in contents) {
        listBase.push(
            <div className="divtable" key={i.toString()}>
                <div className="divtabletitle">{contents[i].value}</div>
                <div className="divtablebody">{data[contents[i].ckey] as string}</div>
            </div>
        )
    }

    const anonymizeBelongsTo = (cv: CurriculumVitaeEntry[]): BelongsToDictionary => {
        // TODO: Z の次が発生したときの対応（無いと思うけど）
        const belongsTo: BelongsToDictionary = {}
        let anonymous = 'A社'
        for (let i = 0; i < cv.length; i++) {
            if (!(cv[i].belongs_to in belongsTo)) {
                belongsTo[cv[i].belongs_to] = anonymous
                anonymous = String.fromCodePoint((anonymous.codePointAt(0) ?? 65) + 1) + '社'
            }
        }
        return belongsTo
    }

    const getPeriod = (fromdate: string, todate: string): string => {
        const parseYear = (d: string) => Number(d.replace(/年.*$/, ''))
        const parseMonth = (d: string) => Number(d.replace(/.*年/, '').replace('月', '')) - 1
        const f = new Date(parseYear(fromdate), parseMonth(fromdate), 1)
        const t = todate == '現在' ? new Date() : new Date(parseYear(todate), parseMonth(todate), 1)
        const diffdate = t.getTime() - f.getTime()
        const diff = new Date(diffdate)
        const diffMonth = diff.getMonth()
        const diffYear = diff.getFullYear() - 1970
        return (diffYear > 0 ? `${diffYear}年` : '') + `${diffMonth}ヶ月`
    }

    const listBelongsTo = anonymizeBelongsTo(curriculum_vitae)

    const listCV = curriculum_vitae.map((v, i) => {
        const period = getPeriod(v['from_date'], v['to_date'])

        return (
            <div className="divcvtable" key={i.toString()}>
                <div className="divcvtablerow">
                    <div className="divtablecvtitle">所属</div>
                    <div className="divtablecvbody">{listBelongsTo[v['belongs_to']]}</div>
                </div>
                <div className="divcvtablerow">
                    <div className="divtablecvtitle">自</div>
                    <div className="divtablecvbody">{v['from_date']}</div>
                    <div className="divtablecvtitle">至</div>
                    <div className="divtablecvbody">{v['to_date']}</div>
                    <div className="divtablecvtitle">期間</div>
                    <div className="divtablecvbody">{period}</div>
                </div>
                <div className="divcvtablerow">
                    <div className="divtablecvtitle">概要</div>
                    <div className="divtablecvbody">{v['title']}</div>
                    <div className="divtablecvtitle">役割</div>
                    <div className="divtablecvbody">{v['role']}</div>
                </div>
                <div className="divcvtablerow">
                    <div className="divtablecvtitle">技能</div>
                    <div className="divtablecvbody">{v['skill']}</div>
                    <div className="divtablecvtitle">チーム</div>
                    <div className="divtablecvbody">{v['team']}</div>
                </div>
                <div className="divcvtablerow">
                    <div className="divtablecvtitle">詳細</div>
                    <div className="divtablecvbody">{v['description']}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="cvbox">
            <h1 className="cvtitle">職務経歴書</h1>
            <div className="cvsignature">
                更新日： {build_date}
                <br />
                K.T
            </div>
            <div className="divbox">
                {listBase}
                <h2>職務経歴</h2>
                {listCV.reverse()}
            </div>
        </div>
    )
}

export async function fetchCVData() {
    const res = await fetch('https://raw.githubusercontent.com/kazto/curriculum-vitae/master/curriculum-vitae.json')
    const data = await res.json()

    const resApi = await fetch('https://api.github.com/repos/kazto/curriculum-vitae/branches/master')
    const dataApi = await resApi.json()
    const build_date = dataApi['commit']['commit']['author']['date']
        .replace(/T.*$/, '')
        .replace('-', '/')
        .replace('-', '/')

    return { data, build_date }
}

export default CurriculumVitaePage
