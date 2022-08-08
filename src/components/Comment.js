import React, {useState, useEffect} from 'react';

function Comment(props) {


    const [comments, setComments] = useState("");

    const commentsLink = props.link.substring(0, props.link.length - 1);
    // console.log(commentsLink)

    fetch("https://www.reddit.com" + commentsLink + ".json").then(res => {
        if (res.status != 200) {
          console.log("ERROR!")
          return;
        }

        res.json().then(data => {
          if (data != null) {
            let datum = data[1].data.children;
            // for(let i = 0; i < datum.length; i++){
            //   setComments(current => [...current, datum[i]]);
            // }
            // console.log(data[1].data.children);
            // setComments(data);
            // console.log(comments);
          }
        });
      })

    return (
        <h1>{ comments[0] }</h1>
    );
}

export default Comment;
