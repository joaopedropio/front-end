using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
namespace FrontEnd
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new Configuration();

            var web = WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseUrls(config.URL)
                .Build();

            web.Run();
        }
    }
}
