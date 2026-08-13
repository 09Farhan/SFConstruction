"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");
    const contactMethod = formData.get("contactMethod");

    // In a real production app, we would validate here with Zod
    if (!name || !email || !message) {
      return { success: false, error: "Please fill out all required fields." };
    }

    // Simulate sending email/API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Here we would integrate with Resend, Sendgrid, or SMTP.
    // Example: await resend.emails.send({ ... })

    console.log("Form submitted successfully:", { name, email, phone, service, contactMethod, message });

    return { success: true, message: "Your message has been sent successfully! We will contact you soon." };
  } catch (error) {
    console.error("Form submission error", error);
    return { success: false, error: "Something went wrong. Please try again later or call us directly." };
  }
}
