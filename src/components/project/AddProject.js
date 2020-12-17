import React, { useState } from 'react';
import firebase from 'firebase';
import { db } from '../../firebase';

export default function AddProject() {
   const [comment, setComment] = useState('');

   const postComment = (event) => {
      event.preventDefault();
      db.collection('projects').add({
         text: comment,
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      console.log('comment post:', comment);
      setComment('');
   };

   return (
      <div>
         <form>
            <input
               type='text'
               placeholder='Add a comment..'
               value={comment}
               onChange={(e) => setComment(e.target.value)}
            ></input>
            <button disabled={!comment} type='submit' onClick={postComment}>
               Post
            </button>
         </form>
      </div>
   );
}
