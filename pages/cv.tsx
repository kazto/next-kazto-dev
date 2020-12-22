import CvTable from '../components/CvTable'

const CarricurumVitaePage = ({ data }) => {
    const contents = [
        {"key": "speciality", "value": "特徴"},
        {"key": "skill", "value": "技術"},
        {"key": "self_recommend", "value": "自己分析"},
        {"key": "region_of_interest", "value": "興味分野"},
    ]
    var listBase = []

    for (var i in contents){
        listBase.push(
        <div className="divtable">
            <div className="divtabletitle">{contents[i].value}</div>
            <div className="divtablebody">{data[contents[i].key]}</div>
        </div>
        )
    }

    var listCV = []
    for(var i in data.carriculum_vitae) {
        console.log(i)
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

export default CarricurumVitaePage
