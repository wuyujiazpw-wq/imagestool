import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ImageTool',
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="text-muted-foreground">Last updated: May 2026</p>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">1. Information We Collect</h2>
        <p className="text-muted-foreground leading-relaxed">
          We do not collect or store your personal identity information. Images you upload are
          processed by Cloudinary and are not stored on our servers. We do not retain copies
          of your original or processed images.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">2. Third-Party Services</h2>
        <p className="text-muted-foreground leading-relaxed">We use the following third-party services:</p>
        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
          <li><strong>Cloudinary</strong> — Image upload and processing. Uploaded images are transmitted to Cloudinary servers for temporary processing.</li>
          <li><strong>Google AdSense</strong> — Ad display. May use cookies and web beacons to serve personalized advertisements.</li>
          <li><strong>Google Analytics</strong> — Anonymous usage statistics to help us improve the service.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">3. Cookie Usage</h2>
        <p className="text-muted-foreground leading-relaxed">
          This website uses cookies to improve user experience and display relevant advertisements.
          You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">4. Data Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          All image uploads and processing are transmitted over HTTPS encryption. Uploaded images
          are automatically removed from temporary storage after processing is complete.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">5. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us through the website.
        </p>
      </section>
    </article>
  );
}
