using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace SocialMovie.Models
{
    public class EmailSettings
    {
        public int Port { get; set; }
        public string Password { get; set; }
        public string Server { get; set; }
        public string Login { get; set; }
        public string From {
            get
            {
                return Login;
            }
        }

        public void SendEmailTo(string emailAddress, string username, byte[] password, EmailSettings emailSettings)
        {
            string email = File.ReadAllText("Tools/email.html");
            string pass = Encoding.ASCII.GetString(password);

            email = email.Replace("{username}", username);
            email = email.Replace("{password}", pass);

            MailMessage mailMessage = new MailMessage
            {
                From = new MailAddress(emailSettings.From),
                Body = email,
                Subject = "Cadastro SocialMovie"
            };
            mailMessage.To.Add(emailAddress);
            mailMessage.IsBodyHtml = true;


            SmtpClient client = new SmtpClient(emailSettings.Server, emailSettings.Port)
            {
                UseDefaultCredentials = false,
                EnableSsl = true,
                Credentials = new NetworkCredential(emailSettings.Login, emailSettings.Password)
            };

            client.SendCompleted += (s, e) =>
            {
                client.Dispose();
                mailMessage.Dispose();
            };

            client.Send(mailMessage);
        }
    }
}
