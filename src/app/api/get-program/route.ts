import { NextResponse, NextRequest } from "next/server";
import { google } from "googleapis";

const credentials = {
  type: process.env.TYPE_PROGRAM,
  project_id: process.env.PROJECT_ID_PROGRAM,
  private_key_id: process.env.PRIVATE_KEY_ID_PROGRAM,
  private_key: process.env.PRIVATE_KEY_PROGRAM,
  client_email: process.env.CLIENT_EMAIL_PROGRAM,
  client_id: process.env.CLIENT_ID_PROGRAM,
  auth_uri: process.env.AUTH_URI_PROGRAM,
  token_uri: process.env.TOKEN_URI_PROGRAM,
  auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL_PROGRAM,
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL_PROGRAM,
  universe_domain: process.env.UNIVERSE_DOMAIN,
}

const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const spreadsheetId = "1BQnhJhjd31oZsO57S9OGHoWIICINyhkZ3O3aZtZezmY"; 

export const POST = async (request: NextRequest) => {
  try {
    const { name, company, email, phone } = await request.json();

    // Validate fields
    if (!name || !company || !email || !phone) {
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
        values: [[name, company, email, phone]],
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
