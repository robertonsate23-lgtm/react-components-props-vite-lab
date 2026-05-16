import React from "react";  

function Article({title, date="January 1, 1970", preview, minutes}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{date} - {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;
//renders an article element that contains an h3 tag for the title, a small tag for the date and minutes, and a paragraph for the preview. 