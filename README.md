<img width="1552" alt="Снимок экрана 2021-08-20 в 11 14 41" src="https://user-images.githubusercontent.com/299118/130202611-78ee22a1-a4ba-46cb-8a15-bd4a185e3d92.png">

This is a personal site project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1) Clone the repo & install dependencies:

```bash
yarn
```

2) Open your Ghost installation, go to [Integrations](https://example.com/ghost/#/settings/integrations), create new called API (for example) and copy-paste keys to `.env` file:

![CleanShot 2023-04-29 at 02 35 56@2x](https://user-images.githubusercontent.com/299118/235269947-66a1b41b-19fc-46a1-a0d6-ddf3f27c5f1b.png)

```
NEXT_PUBLIC_GHOST_API=%API URL%
NEXT_PUBLIC_GHOST_API_KEY=%Content API key%
```

3) Create new page with `home` alias. You can leave it empty, but then it will be blank space before "Let's roll" button. Add HTML block:

<img width="1088" alt="CleanShot 2023-04-29 at 02 39 54@2x" src="https://user-images.githubusercontent.com/299118/235270186-7c5a7130-bdd7-4d81-a022-3eb4f4bad00a.png">

`h1` tag is for the bigger text, `h2` - for the small one.

4) Add `blog` page. You can leave it empty, you'll need it just for posts list.

5) Setup your navigation. This is how I made it

![CleanShot 2023-04-29 at 02 42 08@2x](https://user-images.githubusercontent.com/299118/235270358-1d8a4f8a-c664-4c7a-8a23-d6d37a55f4b9.png)

6) Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
