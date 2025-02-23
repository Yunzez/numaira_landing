"use client";
import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  margin: 0;
  padding: 60px;
  max-width: none;
  font-family: Arial !important;
  text-align: left;
  
  @media print {
    margin: 0.5in;
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.div`
  font-family: Arial !important;
  font-size: 26px !important;
  color: #000000 !important;
  text-align: left;
  margin-bottom: 20px;
`;

const Subtitle = styled.div`
  font-family: Arial !important;
  color: #595959 !important;
  font-size: 14px !important;
  text-align: left;
  margin-bottom: 30px;
`;

const Heading1 = styled.div`
  font-family: Arial !important;
  font-size: 19px !important;
  color: #000000 !important;
  font-weight: bold;
  margin: 30px 0 15px 0;
`;

const Heading2 = styled.div`
  font-family: Arial !important;
  font-size: 17px !important;
  color: #000000 !important;
  font-weight: bold;
  margin: 25px 0 10px 0;
`;

const BodyText = styled.div`
  color: #595959 !important;
  font-size: 14px !important;
  font-family: Arial !important;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const Link = styled.a`
  color: #3030F1 !important;
  font-size: 14px !important;
  font-family: Arial !important;
  text-decoration: none;
  word-break: break-word !important;

  &:hover {
    text-decoration: underline;
  }
`;

const TableOfContents = styled.div`
  margin: 30px 0;
  line-height: 1.8;
`;

const TermsAndConditionsPage = () => {
  return (
    <SectionContainer>
      <Title>TERMS AND CONDITIONS</Title>
      <Subtitle>Last updated September 23, 2024</Subtitle>

      <Heading1>TABLE OF CONTENTS</Heading1>
      <TableOfContents>
        <BodyText>
          <Link href="#agreement">1. AGREEMENT TO OUR LEGAL TERMS</Link><br/>
          <Link href="#ip">2. INTELLECTUAL PROPERTY RIGHTS</Link><br/>
          <Link href="#userreps">3. USER REPRESENTATIONS</Link><br/>
          <Link href="#userreg">4. USER REGISTRATION</Link><br/>
          <Link href="#purchases">5. PURCHASES AND PAYMENT</Link><br/>
          <Link href="#subscriptions">6. SUBSCRIPTIONS</Link><br/>
          <Link href="#prohibited">7. PROHIBITED ACTIVITIES</Link><br/>
          <Link href="#ugc">8. USER GENERATED CONTRIBUTIONS</Link><br/>
          <Link href="#licence">9. CONTRIBUTION LICENCE</Link><br/>
          <Link href="#thirdparty">10. THIRD-PARTY WEBSITES AND CONTENT</Link><br/>
          <Link href="#management">11. SERVICES MANAGEMENT</Link><br/>
          <Link href="#privacy">12. PRIVACY POLICY</Link><br/>
          <Link href="#term">13. TERM AND TERMINATION</Link><br/>
          <Link href="#modifications">14. MODIFICATIONS AND INTERRUPTIONS</Link><br/>
          <Link href="#law">15. GOVERNING LAW</Link><br/>
          <Link href="#dispute">16. DISPUTE RESOLUTION</Link><br/>
          <Link href="#corrections">17. CORRECTIONS</Link><br/>
          <Link href="#disclaimer">18. DISCLAIMER</Link><br/>
          <Link href="#liability">19. LIMITATIONS OF LIABILITY</Link><br/>
          <Link href="#indemnification">20. INDEMNIFICATION</Link><br/>
          <Link href="#userdata">21. USER DATA</Link><br/>
          <Link href="#electronic">22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Link><br/>
          <Link href="#misc">23. MISCELLANEOUS</Link><br/>
          <Link href="#contact">24. CONTACT US</Link>
        </BodyText>
      </TableOfContents>

      <div id="agreement">
        <Heading1>1. AGREEMENT TO OUR LEGAL TERMS</Heading1>
        <BodyText>
          We are Numaira Technology Limited, doing business as Numaira (<strong>'Company'</strong>, <strong>'we'</strong>, <strong>'us'</strong>, or <strong>'our'</strong>), a company registered in Hong Kong at RM F 6/F MEGA CUBE NO.8 WANG, KWONG RD KLN BAY, HONG KONG, HONG KONG SAR.
        </BodyText>
        <BodyText>
          You can contact us by email at <Link href="mailto:frank@numaira.org">frank@numaira.org</Link> or by mail to RM F 6/F MEGA CUBE NO.8 WANG, KWONG RD KLN BAY, HONG KONG, HONG KONG SAR.
        </BodyText>
        <BodyText>
          These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and Numaira Technology Limited, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </BodyText>
        <BodyText>
          We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by email, as stated in the email message. By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.
        </BodyText>
        <BodyText>
          The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
        </BodyText>
        <BodyText>
          We recommend that you print a copy of these Legal Terms for your records.
        </BodyText>
      </div>

      <div id="ip">
        <Heading1>2. INTELLECTUAL PROPERTY RIGHTS</Heading1>
        <BodyText>
          We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos contained therein (the 'Marks').
        </BodyText>
        <BodyText>
          Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.
        </BodyText>
        <BodyText>
          The Content and Marks are provided in or through the Services 'AS IS' for your personal, non-commercial use or internal business purpose only.
        </BodyText>
        <BodyText>
          Subject to your compliance with these Legal Terms, including the 'PROHIBITED ACTIVITIES' section below, we grant you a non-exclusive, non-transferable, revocable licence to:
        </BodyText>
        <BodyText>
          <ul>
            <li>access the Services; and</li>
            <li>download or print a copy of any portion of the Content to which you have properly gained access.</li>
          </ul>
          solely for your personal, non-commercial use or internal business purpose.
        </BodyText>
        <BodyText>
          Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
        </BodyText>
        <BodyText>
          If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <Link href="mailto:frank@numaira.org">frank@numaira.org</Link>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
        </BodyText>
        <BodyText>
          We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
        </BodyText>
        <BodyText>
          Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
        </BodyText>
        <BodyText>
          By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ('Submissions'), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
        </BodyText>
        <BodyText>
          By sending us Submissions through any part of the Services you:
        </BodyText>
        <BodyText>
          <ul>
            <li>confirm that you have read and agree with our 'PROHIBITED ACTIVITIES' and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
            <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
            <li>warrant that any such Submission are original to you or that you have the necessary rights and licences to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and</li>
            <li>warrant and represent that your Submissions do not constitute confidential information.</li>
          </ul>
        </BodyText>
        <BodyText>
          You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.
        </BodyText>
      </div>

      <div id="userreps">
        <Heading1>3. USER REPRESENTATIONS</Heading1>
        <BodyText>
          By using the Services, you represent and warrant that:
        </BodyText>
        <BodyText>
          <ul>
            <li>all registration information you submit will be true, accurate, current, and complete;</li>
            <li>you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
            <li>you have the legal capacity and you agree to comply with these Legal Terms;</li>
            <li>you are not a minor in the jurisdiction in which you reside;</li>
            <li>you will not access the Services through automated or non-human means, whether through a bot, script or otherwise;</li>
            <li>you will not use the Services for any illegal or unauthorised purpose; and</li>
            <li>your use of the Services will not violate any applicable law or regulation.</li>
          </ul>
        </BodyText>
        <BodyText>
          If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
        </BodyText>
      </div>

      <div id="userreg">
        <Heading1>4. USER REGISTRATION</Heading1>
        <BodyText>
          You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
        </BodyText>
      </div>

      <div id="purchases">
        <Heading1>5. PURCHASES AND PAYMENT</Heading1>
        <BodyText>
          We accept the following forms of payment:
        </BodyText>
        <BodyText>
          <ul>
            <li>Visa</li>
            <li>Mastercard</li>
            <li>Wire transfer</li>
            <li>WeChat Pay</li>
            <li>WeChat Pay HK</li>
            <li>Alipay</li>
            <li>Alipay HK</li>
            <li>PayPal</li>
          </ul>
        </BodyText>
        <BodyText>
          You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
        </BodyText>
        <BodyText>
          You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorise us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
        </BodyText>
        <BodyText>
          We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgement, appear to be placed by dealers, resellers, or distributors.
        </BodyText>
      </div>

      <div id="subscriptions">
        <Heading1>6. SUBSCRIPTIONS</Heading1>
        <Heading2>Billing and Renewal</Heading2>
        <BodyText>
          Your subscription will continue and automatically renew unless cancelled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribed to the Services.
        </BodyText>
        <Heading2>Free Trial</Heading2>
        <BodyText>
          We offer a 60-day free trial to new users who register with the Services. The account will not be charged and the subscription will be suspended until upgraded to a paid version at the end of the free trial.
        </BodyText>
        <Heading2>Cancellation</Heading2>
        <BodyText>
          You can cancel your subscription at any time by logging into your account. Your cancellation will take effect at the end of the current paid term. If you have any questions or are unsatisfied with our Services, please email us at <Link href="mailto:frank@numaira.org">frank@numaira.org</Link>.
        </BodyText>
        <Heading2>Fee Changes</Heading2>
        <BodyText>
          We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
        </BodyText>
      </div>

      <div id="prohibited">
        <Heading1>7. PROHIBITED ACTIVITIES</Heading1>
        <BodyText>
          You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.
        </BodyText>
        <BodyText>
          As a user of the Services, you agree not to:
        </BodyText>
        <BodyText>
          <ul>
            <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Engage in unauthorised framing of or linking to the Services.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
            <li>Delete the copyright or other proprietary rights notice from any Content.</li>
            <li>Attempt to impersonate another user or person or use the username of another user.</li>
            <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ('gifs'), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as 'spyware' or 'passive collection mechanisms' or 'pcms').</li>
            <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
            <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
            <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
            <li>Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
            <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
            <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorised script or other software.</li>
            <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
            <li>Make any unauthorised use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretences.</li>
            <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavour or commercial enterprise.</li>
            <li>Sell or otherwise transfer your profile.</li>
          </ul>
        </BodyText>
      </div>

      <div id="ugc">
        <Heading1>8. USER GENERATED CONTRIBUTIONS</Heading1>
        <BodyText>
          The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, 'Contributions'). Contributions may be viewable by other users of the Services and through third-party websites.
        </BodyText>
        <BodyText>
          When you create or make available any Contributions, you thereby represent and warrant that:
        </BodyText>
        <BodyText>
          <ul>
            <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
            <li>You are the creator and owner of or have the necessary licences, rights, consents, releases, and permissions to use and to authorise us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
            <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.</li>
            <li>Your Contributions are not false, inaccurate, or misleading.</li>
            <li>Your Contributions are not unsolicited or unauthorised advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
            <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libellous, slanderous, or otherwise objectionable (as determined by us).</li>
            <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
            <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
            <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
            <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
            <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
            <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
            <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.</li>
          </ul>
        </BodyText>
        <BodyText>
          Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.
        </BodyText>
      </div>

      <div id="licence">
        <Heading1>9. CONTRIBUTION LICENCE</Heading1>
        <BodyText>
          You and Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
        </BodyText>
        <BodyText>
          By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
        </BodyText>
        <BodyText>
          We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
        </BodyText>
      </div>

      <div id="thirdparty">
        <Heading1>10. THIRD-PARTY WEBSITES AND CONTENT</Heading1>
        <BodyText>
          The Services may contain (or you may be sent via the Site) links to other websites ('Third-Party Websites') as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ('Third-Party Content'). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Legal Terms no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us blameless from any harm caused by your purchase of such products or services. Additionally, you shall hold us blameless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
        </BodyText>
      </div>

      <div id="management">
        <Heading1>11. SERVICES MANAGEMENT</Heading1>
        <BodyText>
          We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
        </BodyText>
      </div>

      <div id="privacy">
        <Heading1>12. PRIVACY POLICY</Heading1>
        <BodyText>
          We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States and Hong Kong. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States and Hong Kong, then through your continued use of the Services, you are transferring your data to the United States and Hong Kong, and you expressly consent to have your data transferred to and processed in the United States and Hong Kong.
        </BodyText>
      </div>

      <div id="term">
        <Heading1>13. TERM AND TERMINATION</Heading1>
        <BodyText>
          These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </BodyText>
        <BodyText>
          If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
        </BodyText>
      </div>

      <div id="modifications">
        <Heading1>14. MODIFICATIONS AND INTERRUPTIONS</Heading1>
        <BodyText>
          We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services.
        </BodyText>
        <BodyText>
          We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
        </BodyText>
      </div>

      <div id="law">
        <Heading1>15. GOVERNING LAW</Heading1>
        <BodyText>
          These Legal Terms shall be governed by and defined following the laws of Hong Kong. Numaira Technology Limited and yourself irrevocably consent that the courts of Hong Kong shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
        </BodyText>
      </div>

      <div id="dispute">
        <Heading1>16. DISPUTE RESOLUTION</Heading1>
        <Heading2>Informal Negotiations</Heading2>
        <BodyText>
          To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a 'Dispute' and collectively, the 'Disputes') brought by either you or us (individually, a 'Party' and collectively, the 'Parties'), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
        </BodyText>
        <Heading2>Binding Arbitration</Heading2>
        <BodyText>
          Any dispute arising out of or in connection with these Legal Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by the International Commercial Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146) according to the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The number of arbitrators shall be three (3). The seat, or legal place, or arbitration shall be Hong Kong, Hong Kong. The language of the proceedings shall be English. The governing law of these Legal Terms shall be substantive law of Hong Kong.
        </BodyText>
        <Heading2>Restrictions</Heading2>
        <BodyText>
          The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilise class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
        </BodyText>
        <Heading2>Exceptions to Informal Negotiations and Arbitration</Heading2>
        <BodyText>
          The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorised use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
        </BodyText>
      </div>

      <div id="corrections">
        <Heading1>17. CORRECTIONS</Heading1>
        <BodyText>
          There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
        </BodyText>
      </div>

      <div id="disclaimer">
        <Heading1>18. DISCLAIMER</Heading1>
        <BodyText>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
        </BodyText>
      </div>

      <div id="liability">
        <Heading1>19. LIMITATIONS OF LIABILITY</Heading1>
        <BodyText>
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </BodyText>
        <BodyText>
          NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE six (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING OR $15,000.00 USD.
        </BodyText>
        <BodyText>
          CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
        </BodyText>
      </div>

      <div id="indemnification">
        <Heading1>20. INDEMNIFICATION</Heading1>
        <BodyText>
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defence and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defence of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
        </BodyText>
      </div>

      <div id="userdata">
        <Heading1>21. USER DATA</Heading1>
        <BodyText>
          We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
        </BodyText>
      </div>

      <div id="electronic">
        <Heading1>22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</Heading1>
        <BodyText>
          Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
        </BodyText>
      </div>

      <div id="misc">
        <Heading1>23. MISCELLANEOUS</Heading1>
        <BodyText>
          These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defences you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
        </BodyText>
      </div>

      <div id="contact">
        <Heading1>24. CONTACT US</Heading1>
        <BodyText>
          In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
        </BodyText>
        <BodyText>
          <strong>Numaira Technology Limited</strong><br/>
          <strong>RM F 6/F MEGA CUBE NO.8 WANG</strong><br/>
          <strong>KWONG RD KLN BAY</strong><br/>
          <strong>HONG KONG, HONG KONG SAR</strong><br/>
          <strong>Hong Kong</strong><br/>
          <strong>Email: <Link href="mailto:frank@numaira.org">frank@numaira.org</Link></strong>
        </BodyText>
      </div>
    </SectionContainer>
  );
};

export default TermsAndConditionsPage;