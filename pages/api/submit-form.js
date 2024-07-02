import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, service, message } = req.body;

    const query = `
      INSERT INTO submissions (firstname, lastname, email, phone, service, message)
      VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [firstname, lastname, email, phone, service, message];

    try {
      const client = await pool.connect();
      const result = await client.query(query, values);
      client.release();
      console.log('Inserted data:', result);
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Failed to submit form.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
