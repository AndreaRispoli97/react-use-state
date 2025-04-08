import { useState } from "react"
import languages from "../data/languages"

function CardFaq() {

    const [title, setTitle] = useState(null)


    return (
        <>
            {
                languages.map((language) => (

                    <div key={language.id}>
                        <button onClick={() => setTitle(language.id)} className="btn">
                            {language.title}
                        </button>

                    </div>

                ))
            }


            < div >
                {title === languages.id && (<p>{languages.description}</p>)}
            </div >
        </>
    )
}


export default CardFaq