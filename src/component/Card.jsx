import { useState } from "react"
import languages from "../data/languages"

function CardFaq() {

    const [title, setTitle] = useState(null)


    return (

        languages.map((language) =>
            <>
                <div key={language.id}>
                    <button onClick={() => setTitle(language.id)}>
                        {language.title}
                    </button>
                    {title === language.id && (<p>{language.description}</p>)}

                </div>
            </>
        )


    )
}



export default CardFaq