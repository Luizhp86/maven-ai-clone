// Netlify function to handle form submissions
exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the JSON body from the request
    const data = JSON.parse(event.body);

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'message'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'Missing required fields',
          fields: missingFields,
        }),
      };
    }

    // Here we would typically send an email or store in a database
    // For demonstration, we'll just log the data and return success
    console.log('Form submission received:', data);

    // In a real implementation, you would use a service like:
    // - SendGrid, Mailgun, or AWS SES for sending emails
    // - Airtable, Firebase, or your own database for storing submissions

    // You could also integrate with CRM systems like HubSpot or Salesforce

    // Return success response
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Form submitted successfully',
        data: data,
      }),
    };
  } catch (error) {
    console.error('Error processing form submission:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal Server Error',
        error: error.message,
      }),
    };
  }
};
