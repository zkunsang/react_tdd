import { rest } from 'msw';

export const handlers = [
  rest.post('/post', (req, res, ctx) => {
    const { username } = req.body;

    console.log(req.body);
    console.log(username);

    return res(
      ctx.json({
        id: "123",
        username
      })
    )
  })
]