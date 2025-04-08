import CardFaq from "./Card"
import languages from "../data/languages"

function Main() {

    return (
        <div>
            <CardFaq languages={languages} />
        </div>
    )
}

export default Main