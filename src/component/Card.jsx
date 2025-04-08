import { useState } from "react"
import languages from "../data/languages"

function CardFaq() {

    const [title, setTitle] = useState(null)
    let currentElement = languages.find(language => language.id === title)

    return (
        <>
            {
                languages.map((language) => (


                    <button onClick={() => setTitle(language.id)} className="btn" key={language.id}>
                        {language.title}
                    </button>

                ))
            }


            < div >
                <h2>
                    {
                        currentElement ? currentElement.title : ''
                    }
                </h2>
                <p>
                    {
                        currentElement ? currentElement.description : ''
                    }
                </p>
                {/* {title === languages.id && (<p>{languages.description}</p>)} */}
            </div >
        </>
    )
}


export default CardFaq