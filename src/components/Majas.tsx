import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Typography, Card, CardContent } from '@mui/material';

const Majas: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => dispatch({ type: 'SET_DATA', payload: response.data }))
      .catch(error => console.error(error));
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Home Page</Typography>
      {data.slice(0, 5).map((item: any) => (
        <Card key={item.id} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5">{item.title}</Typography>
            <Typography>{item.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Majas;
