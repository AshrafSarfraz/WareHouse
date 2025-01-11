import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Alert,
  Text,
  Modal,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useRoute} from '@react-navigation/native';
import WebView from 'react-native-webview';
import Share from 'react-native-share';
import RenderHtml from 'react-native-render-html';
``
const Invoice = () => {
  const route = useRoute();
  const {billList} = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [htmlContent, setHtmlContent] = useState('');
  const {width} = useWindowDimensions();

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
                        body { font-family: Arial, sans-serif;  padding: 10px;  /* Add padding around the body */
                            margin: 0;  }
                        .invoice-box { width: 100%; margin: auto; padding: 50px;  /* Add padding to the invoice box */
                            border: 1px solid #ddd; }
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
                                <h3>Company Name</h3>
                                <p>Email: companyemail@example.com</p>
                                <p>Phone: +123456789</p>
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

  const handlePreviewInvoice = () => {
    const content = generateHTML();
    setHtmlContent(content);
    setIsModalVisible(true);
  };

  const createPDF = async () => {
    try {
      const options = {
        html: htmlContent,
        fileName: 'invoice_bill',
        directory: 'Documents', // Save to the default 'Documents' directory
      };

      const file = await RNHTMLtoPDF.convert(options);
      Alert.alert('PDF Created', `PDF saved to ${file.filePath}`);
      sendPDF(file.filePath); // Call sendPDF after creation
    } catch (error) {
      console.error('Error generating PDF: ', error);
    } finally {
      setIsModalVisible(false); // Close the modal after PDF generation
    }
  };

  const sendPDF = filePath => {
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

  return (
    <View style={styles.container}>
      <Button title="Preview Invoice" onPress={() => handlePreviewInvoice()} />

      {/* Modal for Invoice Preview */}
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContent}>
          <ScrollView>
            <Text>Invoice Preview</Text>
            <RenderHtml contentWidth={300} source={{html: htmlContent}} />
          </ScrollView>
          <Button title="Generate PDF" onPress={createPDF} />
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
});

export default Invoice;
