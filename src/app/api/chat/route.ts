import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

// System prompt for construction-focused chatbot
const SYSTEM_PROMPT = `You are a helpful construction assistant for Gurukar Builderss, a construction company in Mysuru, India. 

Your expertise includes:
- Residential and commercial construction
- Cost estimation (per sq ft rates in India)
- Construction timelines and planning
- Building materials and their quality
- Construction permits and approvals
- Interior design and finishing
- Project management

Company context:
- Gurukar Builders offers packages from ₹1799/sqft (Basic) to ₹2300/sqft (Luxury)
- Services: Residential, Commercial, Renovation, Extensions, Interiors
- Located in Mysuru, Karnataka
- 10+ years experience, 100+ happy clients

Guidelines:
- Be helpful, professional, and concise
- Provide realistic cost estimates in Indian Rupees (₹)
- Suggest contacting Gurukar Builders for detailed quotes
- Focus on practical construction advice
- If you don't know something, recommend speaking with Gurukar Builders's experts

Keep responses under 150 words unless detailed explanation is needed.`;

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();

        if (!message || typeof message !== "string") {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }
        console.log("GEMINI_API_KEY", { GEMINI_API_KEY });
        // If no API key, return helpful fallback response
        if (!GEMINI_API_KEY) {
            const fallbackResponse = generateFallbackResponse(message);
            return NextResponse.json({ message: fallbackResponse });
        }

        // Call Gemini API (using v1beta with gemini-2.5-flash - the stable version)
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        console.log("Calling Gemini API...");
        
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: `${SYSTEM_PROMPT}\n\nUser: ${message}\n\nAssistant:` },
                        ],
                    },
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 500,
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_ONLY_HIGH",
                    },
                ],
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Gemini API error:", response.status, errorData);
            throw new Error(`Gemini API request failed: ${response.status}`);
        }

        const data = await response.json();
        const aiMessage =
            data.candidates?.[0]?.content?.parts?.[0]?.text ||
            "I apologize, I couldn't generate a response. Please try again.";

        return NextResponse.json({ message: aiMessage });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            { error: "Failed to process request" },
            { status: 500 }
        );
    }
}

// Fallback responses when API key is not available
function generateFallbackResponse(message: string): string {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("cost") || lowerMessage.includes("price") || lowerMessage.includes("budget")) {
        return "Gurukar Builderss offers packages ranging from ₹1,799/sqft (Basic) to ₹2,300/sqft (Luxury). The final cost depends on materials, finishes, and customization. For a detailed quote based on your requirements, please contact us at +91 88926 92007 or visit our Contact page.";
    }

    if (lowerMessage.includes("time") || lowerMessage.includes("duration") || lowerMessage.includes("how long")) {
        return "Construction timelines vary based on project size and complexity. Typically, a 1500-2000 sqft home takes 8-12 months from planning to completion. This includes design approval, foundation, structure, and finishing. Contact our team for a detailed timeline specific to your project.";
    }

    if (lowerMessage.includes("package") || lowerMessage.includes("plan")) {
        return "We offer 4 packages:\n• Basic (₹1,799/sqft): Frame structure, RKB blocks, Parryware fittings\n• Medium (₹1,950/sqft): Wire cut bricks, Jaquar fittings\n• Premium (₹2,150/sqft): Granite flooring, Veneer doors\n• Luxury (₹2,300/sqft): Full teak, Italian kitchen, premium finishes\n\nAll include quality materials and professional workmanship.";
    }

    if (lowerMessage.includes("material") || lowerMessage.includes("quality")) {
        return "We use premium materials: wire-cut bricks, branded fittings (Jaquar/Parryware), Astral/Ashirvad pipes, V-Guard/Polycab wiring, and vitrified tiles or granite flooring. All materials meet IS standards and come with warranties. Specific brands vary by package selected.";
    }

    if (lowerMessage.includes("approval") || lowerMessage.includes("permit")) {
        return "Gurukar Builders assists with all approvals including: BBMP/Panchayat plan approval, building permits, occupancy certificates, and utility connections. The approval process typically takes 2-4 weeks depending on location and local authorities. We handle documentation and follow-ups.";
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("call") || lowerMessage.includes("reach")) {
        return "You can reach Gurukar Builderss at:\n📞 +91 88926 92007\n📧 info@Gurukar Buildersconstructions.com\n📍 897/1, NS Road, Lakshmipuram, Mysuru - 570004\n\nOr submit your query through our Contact page for a prompt response!";
    }

    return "I'm here to help with construction queries! I can assist with:\n• Cost estimates & packages\n• Construction timelines\n• Materials & quality\n• Plan approvals\n• Project planning\n\nWhat would you like to know? For detailed consultation, call us at +91 88926 92007.";
}

