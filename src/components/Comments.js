import React, {useState, useEffect} from 'react';

function Comments(props) {

    const [comments, setComments] = useState([]);
    let c;
    let c1 = [];

    const commentsLink = props.link.substring(0, props.link.length - 1);

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

            // loop through and ignore those with length 0
            // if (c.length > 0){
            //   for (var i = 0; i < c.length; i++) {
            //     // console.log(c[i]);

            //     if (c[i].hasOwnProperty('data')) {
            //       if (c[i]['data'].hasOwnProperty('body')){
            //         setComments(comments => [...comments, ...c[i]['data']['body']]);
            //         console.log(comments);
            //       } else {
            //         console.log(c[i]['data']);
            //       }
            //       // setComments(comments => [...comments, c[i]['data']['body']]);

            //     }
            //     // console.log(c[i]['data']['body']);
            //     // if (c[i]['data']){
            //     //   setComments(comments => [...comments, c[i]['data']['body']]);
            //     // }

            //   }
            // }

          }
        });
      })

    }, []);

    return (
      <div className="comments">
        {
        (comments != null) ? comments.map( (comment, index) => <p key={index}>{comment}</p>) : ''
        }
      </div>
    );
}

export default Comments;
