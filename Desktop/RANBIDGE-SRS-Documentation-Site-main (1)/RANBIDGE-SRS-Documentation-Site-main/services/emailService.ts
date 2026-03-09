import emailjs from '@emailjs/browser';
import { SRSData } from '../types';

// EmailJS configuration - These should be set in environment variables
const EMAILJS_PUBLIC_KEY = process.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
const EMAILJS_SERVICE_ID = process.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendSRSDocumentEmail = async (
  srsContent: string,
  clientData: SRSData
): Promise<boolean> => {
  try {
    const emailParams = {
      to_email: 'ranbridgeserviceprivatelimited@gmail.com',
      client_name: clientData.client.clientName,
      company_name: clientData.client.companyName,
      project_type: clientData.client.projectType,
      email: clientData.client.email,
      phone: clientData.client.phone,
      srs_content: srsContent,
      subject: `New SRS Document - ${clientData.client.companyName} - ${clientData.client.projectType}`,
      generated_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Alternative: Simple email function using a backend API
export const sendSRSDocumentViaAPI = async (
  srsContent: string,
  clientData: SRSData
): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-srs-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ranbridgeserviceprivatelimited@gmail.com',
        subject: `New SRS Document - ${clientData.client.companyName} - ${clientData.client.projectType}`,
        clientData,
        srsContent,
      }),
    });

    if (response.ok) {
      console.log('Email sent successfully via API');
      return true;
    } else {
      console.error('Failed to send email via API');
      return false;
    }
  } catch (error) {
    console.error('Error sending email via API:', error);
    return false;
  }
};
