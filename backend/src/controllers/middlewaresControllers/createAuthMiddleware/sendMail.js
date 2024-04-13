const { emailVerfication, passwordVerfication } = require('@/emailTemplate/emailVerfication');

const { Resend } = require('resend');

const sendMail = async ({
  email,
  name,
  link,
  botmartz_app_email,
  subject = 'Verify your email | botmartz',
  type = 'emailVerfication',
  emailToken,
}) => {
  const resend = new Resend(process.env.RESEND_API);

  const { data } = await resend.emails.send({
    from: botmartz_app_email,
    to: email,
    subject,
    html:
      type === 'emailVerfication'
        ? emailVerfication({ name, link, emailToken })
        : passwordVerfication({ name, link }),
  });

  return data;
};

module.exports = sendMail;
