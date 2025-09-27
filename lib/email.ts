// Email configuration and utility functions
export interface EmailData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  deviceBrand: string;
  deviceModel: string;
  issueDescription: string;
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
    user: 'farhanrjcw389@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD || 'oymt efaz haej zhtu'
  }
};

import nodemailer from 'nodemailer';

export const sendEmail = async (data: EmailData) => {
  try {
    const transporter = nodemailer.createTransport(emailConfig);

    const mailOptions = {
      from: '"Fone Fixer" <admin@fonefixer.co.nz>',
      to: 'farhanrjcw389@gmail.com', // Change to desired recipient
      subject: 'New Service Booking Request',
      text: `
        <h1 className="text-2xl font-bold text-blue-800">New Service Booking Request</h1>

        <h2 className="text-lg font-semibold">Customer Details:</h2>
        Name: ${data.firstName} ${data.lastName}
        Phone: ${data.phone}
        Email: ${data.email}

        <h2 className="text-lg font-semibold">Device Information:</h2>
        Brand: ${data.deviceBrand}
        Model: ${data.deviceModel}
        Issue Description: ${data.issueDescription}

        <h2 className="text-lg font-semibold">Service Details:</h2>
        Preferred Date: ${data.serviceDate}
        Service Type: ${data.serviceType}
        Address: ${data.address}

        <p>This is a booking request from the Fone Fixer website.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email' };
  }
};