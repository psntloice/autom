const axios = require('axios');

// Safaricom Daraja API credentials
const consumerKey = 'Xa2gIgRqQDCRHNMGqdcjd4wI908HWUsT';
const consumerSecret = 'vcqcJNWAIDwhMwtF';

// Base64 encode consumer key and consumer secret
const auth = Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');

// Safaricom Daraja API endpoint
const darajaEndpoint = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

// Function to obtain OAuth access token
async function getAccessToken() {
    try {
        const response = await axios.get(darajaEndpoint, {
            headers: {
                Authorization: 'Basic ' + auth
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
}


// Function to initiate STK push
async function initiateSTKPush(accessToken) {
    const stkPushEndpoint = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
    function generateTimestamp() {
        const now = new Date();
        const year = now.getFullYear();
        const month = ('0' + (now.getMonth() + 1)).slice(-2); // Months are zero-based
        const day = ('0' + now.getDate()).slice(-2);
        const hours = ('0' + now.getHours()).slice(-2);
        const minutes = ('0' + now.getMinutes()).slice(-2);
        const seconds = ('0' + now.getSeconds()).slice(-2);
        return `${year}${month}${day}${hours}${minutes}${seconds}`;
    }
    function generatePassword(businessShortCode, passkey, timestamp) {
        const concatenatedString = businessShortCode + passkey + timestamp;
        const buffer = Buffer.from(concatenatedString, 'utf8');
        const password = buffer.toString('base64');
        return password;
    }
    


    // Example usage:
    const timestamp = generateTimestamp();
    const businessShortCode = '174379';
    const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
    const passwd = generatePassword(businessShortCode, passkey, timestamp);
    const payload = {
        BusinessShortCode: '174379',
        Password: passwd, // Generate this using Lipa Na M-PESA Online Payment API
        Timestamp: timestamp, // Format: YYYYMMDDHHMMSS
        TransactionType: 'CustomerPayBillOnline',
        Amount: '1',
        PartyA: '600997', // Format: 2547XXXXXXXX
        PartyB: '600000',
        PhoneNumber: '254701581799',
        CallBackURL: 'https://commportfolio.vercel.app/',
        AccountReference: 'YOUR_ACCOUNT_REFERENCE',
        TransactionDesc: 'YOUR_TRANSACTION_DESCRIPTION'
    };

    try {
        const response = await axios.post(stkPushEndpoint, payload, {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        });
        console.log('STK Push Response:', response.data);
    } catch (error) {
        console.error('Error initiating STK push:', error);
        throw error;
    }
}

// Main function to initiate the process
async function main() {
    try {
        const accessToken = await getAccessToken();
        await initiateSTKPush(accessToken);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the main function to start the process
main();
