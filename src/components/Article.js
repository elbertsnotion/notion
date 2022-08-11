import React, { useState } from 'react';

import Comments from './Comments';
import Collapsible from 'react-collapsible';

function Article(props) {

    const [childData, setChildData] = useState("test");

    return (
        <article>
            <a href={ "https://reddit.com" + props.article.permalink } target="_blank" >
                <h3>{ props.article.title }</h3>
            </a>
            {/* <p>{ childData }</p> */}

            <Collapsible trigger={childData}>
                <Comments link={ props.article.permalink } passChildData={ setChildData }/>
            </Collapsible>
        </article>
    );
}

export default Article;
