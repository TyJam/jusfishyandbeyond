const data = await resend.emails.send({
  // THE KEY: Send FROM your verified agency domain
  from: 'Jus Fishy Leads <contact@tywebstudio.com>', 
  
  // THE DESTINATION: Your professional agency inbox
  to: ['contact@tywebstudio.com'], 
  
  subject: `CATERING INQUIRY: ${company}`,
  html: `
    <div style="font-family: sans-serif; border: 1px solid #1B4D3E; padding: 20px;">
      <h2 style="color: #1B4D3E;">New Lead for Jus Fishy</h2>
      <p><strong>Customer Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Catering Size:</strong> ${challenge}</p>
      <hr />
      <p><strong>Details:</strong> ${details}</p>
      <footer style="margin-top: 20px; font-size: 10px; color: #888;">
        Sent via TyWebStudio Revenue Engine
      </footer>
    </div>
  `
});