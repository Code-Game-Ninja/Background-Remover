export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Parse the incoming form data
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const buffer = Buffer.concat(chunks);

  // Forward the request to remove.bg
  const response = await fetch('https://api.remove.bg/v1.0/removebg', {
    method: 'POST',
    headers: {
      'X-Api-Key': process.env.API_KEY,
      ...req.headers, // Forward content-type and others
    },
    body: buffer,
  });

  // Forward the response
  res.status(response.status);
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  const data = await response.arrayBuffer();
  res.send(Buffer.from(data));
} 