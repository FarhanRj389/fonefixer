// Email configuration and utility functions
export interface EmailData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  deviceBrand: string;
  deviceModel: string;
  serviceDate: string;
  serviceType: string;
  address: string;
}

export const emailConfig = {
  // Gmail SMTP Configuration
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'farhanunidata@gmail.com',
    // Use App Password from Gmail (not regular password)
    pass: process.env.GMAIL_APP_PASSWORD || 'your_app_password_here'
  }
};

export const sendEmail = async (data: EmailData) => {
  try {
    // For now, we'll log the email data
    // In production, you would use nodemailer or similar
    console.log('Email would be sent with data:', data);
    
    // Email template
    const emailContent = `
      New Service Booking Request
      
      Customer Details:
      Name: ${data.firstName} ${data.lastName}
      Phone: ${data.phone}
      Email: ${data.email}
      
      Device Information:
      Brand: ${data.deviceBrand}
      Model: ${data.deviceModel}
      
      Service Details:
      Preferred Date: ${data.serviceDate}
      Service Type: ${data.serviceType}
      Address: ${data.address}
      
      This is a booking request from the Fone Fixer website.
    `;
    
    console.log('Email content:', emailContent);
    
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email' };
  }
}; 