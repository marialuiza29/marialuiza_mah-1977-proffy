import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*app.post('/users', (request, response) => {
    console.log(request.body);
    const users = [
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 21}   
    ]
    return response.json(users)
});

app.delete('/users/:id', (request, response) => {
    console.log(request.params);
    const users = [
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 21}   
    ]
    return response.json(users)
});

app.get('/users', (request, response) => {
    console.log(request.query);
    const users = [
        { name: 'Diego', age: 25 },
        { name: 'Vini', age: 21}   
    ]
    return response.json(users)
});*/

//localhost:3333/users

app.listen(3333); //porta

