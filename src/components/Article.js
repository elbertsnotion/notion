import React from 'react';

import Comments from './Comments';

function Article(props) {
    return (
        <article>
            <a href={ "https://reddit.com" + props.article.permalink } target="_blank" >
                <h3>{ props.article.title }</h3>
                <Comments link={ props.article.permalink }/>
            </a>
        </article>
    );
}

export default Article;
