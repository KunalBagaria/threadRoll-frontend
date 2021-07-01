// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function(req, res) {
  return new Promise((resolve, reject) => {
    fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(json => {
      res.status(200).json({
        json: json
      })
      resolve()
    })
    .catch((err) => {
      res.json(err)
      res.status(405).end()
      return resolve()
    })
  })
}
