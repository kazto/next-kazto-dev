const CurriculumVitaePage = ({ data, build_date }: any) => {
  let i;
  const contents = [
    { ckey: "speciality", value: "特徴" },
    { ckey: "skill", value: "技術" },
    { ckey: "self_recommend", value: "自己分析" },
    { ckey: "region_of_interest", value: "興味分野" },
  ];
  const listBase = [];

  for (i in contents) {
    listBase.push(
      <div className="divtable" key={i.toString()}>
        <div className="divtabletitle">{contents[i].value}</div>
        <div className="divtablebody">{data[contents[i].ckey]}</div>
      </div>
    );
  }

  const getPeriod = (fromdate: string): number => {
    const year = Number(fromdate.replace(/年.*$/, ""));
    const month = Number(fromdate.replace(/.*年/, "").replace("月", ""));
    const f = new Date(year, month - 1, 1);
    const t = new Date();
    const diffdate = t.getTime() - f.getTime();
    const diff = new Date(diffdate);
    const diffMonth = diff.getMonth();
    return diffMonth;
  };

  const listCV = [];
  for (const n in data.carriculum_vitae) {
    const i = data.carriculum_vitae.length - Number(n) - 1;
    const period =
      data.carriculum_vitae[i]["to_date"] == "現在"
        ? String(getPeriod(data.carriculum_vitae[i]["from_date"])) + "ヶ月"
        : data.carriculum_vitae[i]["period"];

    listCV.push(
      <div className="divcvtable" key={i.toString()}>
        <div className="divcvtablerow">
          <div className="divtablecvtitle">所属</div>
          <div className="divtablecvbody">
            {data.carriculum_vitae[i]["belongs_to"]}
          </div>
        </div>
        <div className="divcvtablerow">
          <div className="divtablecvtitle">自</div>
          <div className="divtablecvbody">
            {data.carriculum_vitae[i]["from_date"]}
          </div>
          <div className="divtablecvtitle">至</div>
          <div className="divtablecvbody">
            {data.carriculum_vitae[i]["to_date"]}
          </div>
          <div className="divtablecvtitle">期間</div>
          <div className="divtablecvbody">{period}</div>
        </div>
        <div className="divcvtablerow">
          <div className="divtablecvtitle">概要</div>
          <div className="divtablecvbody">
            {data.carriculum_vitae[i]["title"]}
          </div>
          <div className="divtablecvtitle">役割</div>
          <div className="divtablecvbody">
            {data.carriculum_vitae[i]["role"]}
          </div>
        </div>
        <div className="divcvtablerow">
          <div className="divtablecvtitle">技能</div>
          <div className="divtablecvbody">
            {data.carriculum_vitae[i]["skill"]}
          </div>
          <div className="divtablecvtitle">チーム</div>
          <div className="divtablecvbody">
            {data.carriculum_vitae[i]["team"]}
          </div>
        </div>
        <div className="divcvtablerow">
          <div className="divtablecvtitle">詳細</div>
          <div className="divtablecvbody">
            {data.carriculum_vitae[i]["description"]}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cvbox">
      <h1 className="cvtitle">職務経歴書</h1>
      <div className="cvsignature">
        更新日： {build_date}
        <br />
        髙橋 和人
      </div>
      <div className="divbox">
        {listBase}
        <h2>職務経歴</h2>
        {listCV}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/kazto/curriculum-vitae/master/curriculum-vitae.json"
  );
  const data = await res.json();
  /*
  const resApi = await fetch(
    "https://api.github.com/repos/kazto/curriculum-vitae/branches/master"
  );
  const dataApi = await resApi.json();
  const build_date = dataApi["commit"]["commit"]["author"]["date"]
    .replace(/T.*$/, "")
    .replaceAll("-", "/");
  */
  const build_date = "2022/07/03";

  return {
    props: {
      data,
      build_date,
    },
  };
}

export default CurriculumVitaePage;
