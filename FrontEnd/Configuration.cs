using Microsoft.Extensions.Configuration;

namespace FrontEnd
{
    public class Configuration
    {
        public string Port { get; set; }
        public string Domain { get; set; }
        public string URL { get; set; }
        public string UserApiURL { get; set; }
        public string ContentApiURL { get; }

        public Configuration()
             : this(new ConfigurationBuilder().AddEnvironmentVariables().Build())
        {

        }

        public Configuration(IConfigurationRoot configuration)
        {
            this.Domain = configuration.GetValue<string>("API_DOMAIN") ?? "*";
            this.Port = configuration.GetValue<string>("API_PORT") ?? "80";
            this.URL = string.Format($"http://{this.Domain}:{this.Port}");
            this.UserApiURL = configuration.GetValue<string>("USER_API_URL");
            this.ContentApiURL = configuration.GetValue<string>("CONTENT_API_URL");
        }
    }
}
