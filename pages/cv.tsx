

const CarricurumVitaePage = ({ data }) => {
    return (
        <p>{data.speciality}</p>
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
