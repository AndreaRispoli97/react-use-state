import { useState } from "react"
import languages from "../data/languages"

function CardFaq() {



    return (

        languages.map((language) =>
            <button>
                {language.title}
            </button>
        )





    )
}



export default CardFaq