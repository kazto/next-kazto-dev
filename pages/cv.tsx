import { CurriculumVitaeData, ServerSideProps, CurriculumVitaeProps } from "../interfaces";
import { CVHeader } from "../components/CVHeader";
import { CVBody, getPeriod } from "../components/CVBody";

const CurriculumVitaePage = ({data, build_date}: CurriculumVitaeProps) => {
  const { curriculum_vitae } = data as CurriculumVitaeData;

  const listBase = CVHeader({data, build_date});
  const listCV = CVBody(curriculum_vitae.map((v) => {
    return {
      ...v,
      period: getPeriod(v.from_date, v.to_date)
    };
  }));

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
        {listCV.reverse()}
      </div>
    </div>
  );
};

export async function getServerSideProps(): Promise<ServerSideProps> {
  const res = await fetch(
    "https://raw.githubusercontent.com/kazto/curriculum-vitae/master/curriculum-vitae.json"
  );
  const data = await res.json();

  const resApi = await fetch(
    "https://api.github.com/repos/kazto/curriculum-vitae/branches/master"
  );
  const dataApi = await resApi.json();
  const build_date = dataApi["commit"]["commit"]["author"]["date"]
    .replace(/T.*$/, "")
    .replace("-", "/")
    .replace("-", "/");

  const props: ServerSideProps = {
    props: {
      data,
      build_date,
    },
  };

  return await props;
}

export default CurriculumVitaePage;
