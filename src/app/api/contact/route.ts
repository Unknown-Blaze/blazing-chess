import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  studentName: string;
  contactNumber: string;
  contactRepresentative: string;
  elo: string;
  ageGroup: string;
}

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.studentName || !data.contactNumber || !data.contactRepresentative || !data.ageGroup) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Missing Telegram credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Format the message for Telegram
    const message = `
🎓 New Inquiry from Blazing Chess Academy

👤 Student Name: ${data.studentName}
📞 Contact Number: ${data.contactNumber}
🧑‍💼 Contact Representative: ${data.contactRepresentative}
♚ Current ELO (Online): ${data.elo || 'Not provided'}
🎂 Age Group: ${data.ageGroup}

Time: ${new Date().toLocaleString()}
    `.trim();

    // Send message via Telegram Bot API
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', await telegramResponse.text());
      return NextResponse.json(
        { error: 'Failed to send inquiry' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
