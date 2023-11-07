import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const { fullName, email, phone, projectDetails } = req.body;

        const msg = {
            to: 'contact@habibihouselabs.ae', // Change to your recipient
            from: 'contact@habibihouselabs.ae', // Change to your verified sender
            subject: 'Contact Form Submission',
            text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nProject Details: ${projectDetails}`,
        };

        try {
            await sgMail.send(msg);
            res.status(200).json({ status: 200, message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ status: 500, message: 'Oops! Something went wrong.' });
        }
    } else {
        res.status(405).end(); // Method not allowed
    }
}
