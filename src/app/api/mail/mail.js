import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, phone, projectDetails } = req.body;

    const msg = {
      to: 'your-recipient@example.com', // Replace with the recipient's email
      from: email,
      subject: 'Contact Form Submission',
      text: `Full Name: ${fullName}\nPhone: ${phone}\nProject Details: ${projectDetails}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ status: 200, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
