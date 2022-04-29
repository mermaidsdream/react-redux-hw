import React, { useState } from 'react';
import { addPost } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';

import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export const Form = () => {
  let [name, setName] = useState();
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        <input 
        onChange={(e) => setName(e.target.value)}
        value={name}
        type='text' 
        />
        <Button 
        onClick={() => {
          dispatch(
            addPost(
              {
                id: uuid(),
                name
              }
            )
          )
          setName('');
        }}
        size='small' 
        variant='contained' 
        color='primary'
        >
          <Typography variant='subtitle2'>
            Add Post
          </Typography>
        </Button>
      </div>
    </div>
  )
}
