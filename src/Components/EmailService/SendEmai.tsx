import emailjs from 'emailjs-com';

// Replace 'your_user_id' with your actual EmailJS User ID
const USER_ID = 'eOuUtCZwAoRYQO0SO';

// Initialize EmailJS SDK
emailjs.init(USER_ID);

export const sendEmail = async (templateId: string, templateParams: any) => {
  try {
    // Call the EmailJS SDK to send the email using the provided templateId and templateParams
    await emailjs.send('service_bf59u0j', templateId, templateParams);
  } catch (error) {
    throw new Error('Error sending email: ' + error);
  }
};
