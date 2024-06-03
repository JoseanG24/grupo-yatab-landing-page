import { NextResponse, NextRequest } from "next/server";
import { google } from "googleapis";

const credentials = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
  universe_domain: process.env.UNIVERSE_DOMAIN,
}

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const spreadsheetId = "1Tt03EVfbBKL_31iIC82VNDbti7ZvIbIlYoXYqon5Q8c"; 

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, phone, comment } = await request.json();

    // Validate fields
    if (!name || !email || !phone || !comment) {
      return NextResponse.json({
        message: "Por favor compelete todos los campos",
      });
    }

    // Create client
    const authClient = (await auth.getClient()) as any;

    // Instance of Google Sheets API
    const googleSheets = google.sheets({ version: "v4", auth: authClient });

    // Get metadata about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
      auth: auth,
      spreadsheetId: spreadsheetId,
    });

    // Read rows from spreadsheet
    // const getRows = await googleSheets.spreadsheets.values.get({
    //     auth,
    //     spreadsheetId,
    //     range: 'hoja principal',
    // })

    // Upload data onto the spreadsheet
    await googleSheets.spreadsheets.values.append({
      spreadsheetId,
      range: "hoja principal!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, phone, comment]],
      },
    });

    return NextResponse.json({
      message: metaData.data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: "404",
      message: "There was an error",
    });
  }
};
