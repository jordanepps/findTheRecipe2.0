// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: 'John Doe',
    app: `${process.env.NEXT_PUBLIC_CLARIFAI_APP_ID}`,
  });
}
