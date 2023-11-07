import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { fullName, email, phone, projectDetails } = req.body;

            if (!fullName || !email || !phone) {
                return res.status(400).json({ error: 'Full Name, Email, and Phone are required.' });
            }

            // You can customize the email message here
            const msg = {
                to: 'contact@habibihouselabs.com', 
                from: 'contact@habibihouselabs.com',  
                subject: 'New Contact Form Submission',
                text: `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nProject Details: ${projectDetails}`,
            };

            // Send the email
            await sgMail.send(msg);

            return res.status(200).json({ status: 'Email sent successfully.' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
