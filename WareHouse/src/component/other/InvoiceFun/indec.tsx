import React from 'react';
import { Alert } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';

const generatePDF = async (billList) => {
  // Function to generate HTML content from the billList
  const generateHTML = () => {
    let rows = '';
    let totalAmount = 0;

    billList.forEach(item => {
      const itemTotal = item.ItemPrice * item.ItemQuantity;
      totalAmount += itemTotal;
      rows += `
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.ItemName}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.ItemPrice}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${item.ItemQuantity}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${itemTotal}</td>
                </tr>
            `;
    });

    return `
            <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 10px; margin: 0; }
                        .invoice-box { width: 97%; margin: auto; border: 1px solid #ddd;marginTop:10px }
                        .invoice-title { font-size: 24px; margin-bottom: 20px; }
                        .invoice-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
                        table { width: 100%; border: 1px solid #ddd; border-collapse: collapse; }
                        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <div class="invoice-box">
                        <div class="invoice-title">Invoice</div>
                        <div class="invoice-header">
                            <div class="company-info">
                                <h3>Ware House Managment System </h3>
                                <p>Email: WareHouse.com</p>
                                <p>Phone: +92 315 6181137</p>
                            </div>
                            <div class="invoice-details">
                                <h3>Invoice #12345</h3>
                                <p>Date: ${new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rows}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="3" style="text-align: right;">Total Amount</td>
                                    <td>${totalAmount}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <p>Thank you for your business.</p>
                    </div>
                </body>
            </html>
        `;
  };

  const content = generateHTML();

  try {
    const options = {
      html: content,
      fileName: 'invoice_bill',
      directory: 'Documents', // Save to the default 'Documents' directory
    };

    const file = await RNHTMLtoPDF.convert(options);
    // Alert.alert('PDF Created', `PDF saved to ${file.filePath}`);
    sendPDF(file.filePath); // Call sendPDF after creation
  } catch (error) {
    console.error('Error generating PDF: ', error);
  }
};

// Function to send the generated PDF
const sendPDF = (filePath) => {
  const shareOptions = {
    title: 'Share PDF',
    url: `file://${filePath}`,
    social: Share.Social.WHATSAPP, // Directly share via WhatsApp
    message: 'Here is your invoice PDF.', // Optional message
  };
  
  Share.shareSingle(shareOptions)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

// Export the generatePDF function for use in other components
export default generatePDF;
