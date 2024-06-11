import db from '../../lib/mysql';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, service, message } = req.body;
    try {
      const query =
        'INSERT INTO submissions (firstname, lastname, email, phone, service, message) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [firstname, lastname, email, phone, service, message];
      const result = await db.query(query, values);
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
