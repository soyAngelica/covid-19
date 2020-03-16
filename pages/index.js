
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelect";


export default function Index() {
    return (
    <div>
        <Stats url={'https://covid19.mathdro.id/api'}> </Stats>
        <CountrySelector></CountrySelector>
    </div>

    )
}