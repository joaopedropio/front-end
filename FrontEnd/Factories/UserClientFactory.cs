using UserClientLib;

namespace FrontEnd.Factories
{
    public static class UserClientFactory
    {
        public static UserClient GetInstance()
        {
            var configs = new Configuration();
            return new UserClient(configs.UserApiURL);
        }
    }
}
