export default function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone, service, message } = req.body;
    // Handle the incoming form data as needed (e.g., store in database, send an email, etc.)
    console.log(
      'Received submission:',
      firstname,
      lastname,
      email,
      phone,
      service,
      message
    );
    res.status(200).json({ message: 'Form submitted successfully!' });
  } else {
    // Handle any other HTTP methods, or send a method not allowed status
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
