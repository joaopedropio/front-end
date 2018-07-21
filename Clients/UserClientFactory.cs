using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserClientLib;

namespace FrontEnd.Clients
{
    public static class UserClientFactory
    {
        public static UserClient GetUserClientInstance()
        {
            var configs = new Configuration();
            return new UserClient(configs.UserApiURL);
        }
    }
}
