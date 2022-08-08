import React from 'react';

import Comment from './Comment';

function Article(props) {
    return (
        <article>
            <a href={ "https://reddit.com" + props.article.permalink } target="_blank" >
                <h3>{ props.article.title }</h3>
                <Comment link={ props.article.permalink }/>
            </a>
        </article>
    );
}

export default Article;
