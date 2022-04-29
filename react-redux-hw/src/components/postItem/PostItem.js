import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, editPost } from '../../redux/actions';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export const PostItem = ({ post }) => {
  let dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(post.name);

  return (
    <div>
      <div>
        <Card style={{ margin: 50, marginBottom: 0, padding: 10 }}>
          <div>
            {edit ? <input type='text' value={name} 
            onChange={
              (e) => setName(e.target.value)
            }
            /> : <h3>{post.name}</h3>}
          </div>
          <Button 
          onClick={() => {
            dispatch(editPost(
              {
                ...post,
                name: name
              }
            ));
            if (edit) {
              setName(post.name);
            }
            setEdit(!edit);
          }}
          size='small' 
          variant='contained' 
          color='primary'
          >
            {edit ? 'Update' : 'Edit'}
          </Button>
          <Button 
          onClick={() => dispatch(deletePost(post.id))}
          size='small' 
          variant='contained' 
          color='secondary'
          >
            Delete Post
          </Button>
        </Card>
      </div>
    </div>
  )
}
