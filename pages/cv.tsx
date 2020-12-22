import CvTable from '../components/CvTable'

const CurriculumVitaePage = ({ data }) => {
    let i;
    const contents = [
        {"ckey": "speciality", "value": "特徴"},
        {"ckey": "skill", "value": "技術"},
        {"ckey": "self_recommend", "value": "自己分析"},
        {"ckey": "region_of_interest", "value": "興味分野"},
    ]
    let listBase = [];

    for (i in contents){
        listBase.push(
        <div className="divtable">
            <div className="divtabletitle">{contents[i].value}</div>
            <div className="divtablebody">{data[contents[i].ckey]}</div>
        </div>
        )
    }

    let listCV = [];
    for(i in data.carriculum_vitae) {
        listCV.push(
            <div className="divcvtable">
                <div className="divcvtablerow">
                    <div className="divtablecvtitle">自</div>
                    <div className="divtablecvbody">{data.carriculum_vitae[i]['from_date']}</div>
                    <div className="divtablecvtitle">至</div>
                    <div className="divtablecvbody">{data.carriculum_vitae[i]['to_date']}</div>
                    <div className="divtablecvtitle">期間</div>
                    <div className="divtablecvbody">{data.carriculum_vitae[i]['period']}</div>
                </div>
                <div className="divcvtablerow">
                    <div className="divtablecvtitle">概要</div>
                    <div className="divtablecvbody">{data.carriculum_vitae[i]['title']}</div>
                    <div className="divtablecvtitle">役割</div>
                    <div className="divtablecvbody">{data.carriculum_vitae[i]['role']}</div>
                    <div className="divtablecvtitle">技能</div>
                    <div className="divtablecvbody">{data.carriculum_vitae[i]['skill']}</div>
                    <div className="divtablecvtitle">チーム</div>
                    <div className="divtablecvbody">{data.carriculum_vitae[i]['team']}</div>
                </div>
                <div className="divtablerow">
                    <div className="divtablecvtitle">詳細</div>
                    <div className="divtablecvbody">{data.carriculum_vitae[i]['description']}</div>
                </div>
            </div>
        )
    }

    return (
        <div className="divbox">
            <h1 className="cvtitle">職務経歴書</h1>
            {listBase}            
            <h2>職務経歴</h2>
            {listCV}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://raw.githubusercontent.com/kazto/carriculum-vitae/master/carriculum-vitae.json')
    const data = await res.json()
    return {
        props: {
            data,
        },
    }
}

export default CurriculumVitaePage
