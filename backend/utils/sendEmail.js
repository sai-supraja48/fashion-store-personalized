const nodemailer =
require("nodemailer");


const sendEmail =
async (to, subject, text) => {

  try {

    const transporter =
      nodemailer.createTransport({

        service: "gmail",

        auth: {

          user:
            "yourgmail@gmail.com",

          pass:
            "your_app_password"

        }

      });


    const mailOptions = {

      from:
        "yourgmail@gmail.com",

      to,

      subject,

      text

    };


    await transporter.sendMail(
      mailOptions
    );

    console.log(
      "Email Sent Successfully"
    );

  } catch (error) {

    console.log(error);

  }
};

module.exports = sendEmail;