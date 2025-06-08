import { CurriculumVitaeEntry } from "../interfaces";

export const getPeriod = (fromdate: string, todate: string): string => {
    const parseYear = (d: string) => Number(d.replace(/年.*$/, ""));
    const parseMonth = (d: string) => Number(d.replace(/.*年/, "").replace("月", "")) - 1;
    const f = new Date(parseYear(fromdate), parseMonth(fromdate), 1);
    const t = todate == "現在" ? new Date() : new Date(parseYear(todate), parseMonth(todate), 1);
    const diffdate = t.getTime() - f.getTime();
    const diff = new Date(diffdate);
    const diffMonth = diff.getMonth();
    const diffYear = diff.getFullYear() - 1970;
    return (diffYear > 0 ? `${diffYear}年` : '') + `${diffMonth}ヶ月`;
};

export const CVBody = (curriculum_vitae: CurriculumVitaeEntry[]) => {
    const listCV = curriculum_vitae.map((v, i) => {
        return (
          <div className="divcvtable" key={i.toString()}>
            <div className="divcvtablerow">
              <div className="divtablecvtitle">所属</div>
              <div className="divtablecvbody">
                {v["belongs_to"]}
              </div>
            </div>
            <div className="divcvtablerow">
              <div className="divtablecvtitle">自</div>
              <div className="divtablecvbody">
                {v["from_date"]}
              </div>
              <div className="divtablecvtitle">至</div>
              <div className="divtablecvbody">
                {v["to_date"]}
              </div>
              <div className="divtablecvtitle">期間</div>
              <div className="divtablecvbody">{v["period"]}</div>
            </div>
            <div className="divcvtablerow">
              <div className="divtablecvtitle">概要</div>
              <div className="divtablecvbody">
                {v["title"]}
              </div>
              <div className="divtablecvtitle">役割</div>
              <div className="divtablecvbody">
                {v["role"]}
              </div>
            </div>
            <div className="divcvtablerow">
              <div className="divtablecvtitle">技能</div>
              <div className="divtablecvbody">
                {v["skill"]}
              </div>
              <div className="divtablecvtitle">チーム</div>
              <div className="divtablecvbody">
                {v["team"]}
              </div>
            </div>
            <div className="divcvtablerow">
              <div className="divtablecvtitle">詳細</div>
              <div className="divtablecvbody">
                {v["description"]}
              </div>
            </div>
          </div>
        );
      });
    return listCV;
}