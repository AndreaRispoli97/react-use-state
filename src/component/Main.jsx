import CardFaq from "./Card"
import languages from "../data/languages"

function Main() {

    return (
        <div className="container">
            <div className="button">
                <CardFaq languages={languages} />
            </div>
        </div>
    )
}

export default Main