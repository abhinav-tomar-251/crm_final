const { afterRegistrationSuccess } = require('@/emailTemplate/emailVerfication');

const { Resend } = require('resend');

const sendbotmartzOffer = async ({ email, name }) => {
  const resend = new Resend(process.env.RESEND_API);

  const { data } = await resend.emails.send({
    from: 'hello@botmartzapp.com',
    to: email,
    subject: 'Customize botmartz ERP CRM or build your own SaaS',
    html: afterRegistrationSuccess({ name }),
  });

  return data;
};

module.exports = sendbotmartzOffer;
