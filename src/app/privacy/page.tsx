// src/app/privacy/page.tsx
'use client';

import { useT } from '@/components/LanguageProvider';

export default function PrivacyPage() {
  const { locale } = useT();

  if (locale === 'zh') {
    return (
      <article className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">隐私政策</h1>
        <p className="text-muted-foreground">最后更新：2026 年 5 月</p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">1. 信息收集</h2>
          <p className="text-muted-foreground leading-relaxed">
            我们不会收集或存储您的个人身份信息。您上传的图片由 Cloudinary 处理，
            我们不会在服务器上保存您的原始或处理后的图片副本。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2. 第三方服务</h2>
          <p className="text-muted-foreground leading-relaxed">我们使用以下第三方服务：</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li><strong>Cloudinary</strong> — 图片上传和处理。上传的图片会传输到 Cloudinary 服务器进行临时处理。</li>
            <li><strong>Google AdSense</strong> — 广告展示。可能使用 Cookie 和网络信标提供个性化广告。</li>
            <li><strong>Google Analytics</strong> — 匿名访问统计，帮助我们改进服务。</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3. Cookie 使用</h2>
          <p className="text-muted-foreground leading-relaxed">
            本网站使用 Cookie 改善用户体验和展示相关广告。您可以在浏览器设置中管理 Cookie 偏好。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4. 数据安全</h2>
          <p className="text-muted-foreground leading-relaxed">
            所有图片上传和处理均通过 HTTPS 加密传输。处理完成后，上传的图片会自动从临时存储中删除。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">5. 联系我们</h2>
          <p className="text-muted-foreground leading-relaxed">
            如果您对本隐私政策有任何疑问，请通过网站联系我们。
          </p>
        </section>
      </article>
    );
  }

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
