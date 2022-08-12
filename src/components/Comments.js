import React, {useState, useEffect} from 'react';

function Comments(props) {

    const functionHandler = (data) => {
      data = data + " comments";
      props.passChildData(data);
    }

    const [comments, setComments] = useState([]);
    let c;
    let c1 = [];

    const commentsLink = props.link.substring(0, props.link.length - 1);
    // functionHandler(comments.length);

    useEffect(() => {
      fetch("https://www.reddit.com" + commentsLink + ".json").then(res => {
        if (res.status != 200) {
          console.log("ERROR!")
          return;
        }

        res.json().then(data => {
          if (data != null) {

            c = data[1]['data']['children'];

            if (c.length > 0) {
              for (var i = 0; i < c.length; i++) {

                if (c[i]['data'].hasOwnProperty('body')){
                  c1.push(c[i]['data']['body']);
                }

              }
            }

            setComments(c1);
            functionHandler(comments.length);

          }
        });

      })

    }, [comments]);

    return (
      <div className="comments">
        {
        (comments != null) ? comments.map( (comment, index) =>

        <div><p key={index}>{comment}</p><br></br></div>) : ''
        }
      </div>
    );
}

export default Comments;
