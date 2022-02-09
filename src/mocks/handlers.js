import { rest } from "msw";

const baseURL = "https://ci-drf-api.herokuapp.com/";
export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "id": 1,
        "owner": "testal",
        "created_at": "09 Nov 2021",
        "updated_at": "09 Nov 2021",
        "name": "",
        "content": "",
        "image": "https://res.cloudinary.com/dzh7nbsay/image/upload/v1/media/../default_profile_qdjgyp",
        "is_owner": false,
        "following_id": null,
        "posts_count": 2,
        "followers_count": 0,
        "following_count": 1
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];


