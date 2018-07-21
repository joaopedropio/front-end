using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using UserClientLib;

namespace FrontEnd.Controllers
{
    [Route("/account")]
    public class AccountController : Controller
    {
        private UserClient userClient;

        public AccountController(UserClient userClient)
        {
            this.userClient = userClient;
        }

        [Route("login")]
        [HttpGet]
        public IActionResult LoginIndex()
        {
            return View("Login");
        }

        [Route("login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromForm] string username, [FromForm] string password)
        {
            if(await userClient.IsUserPasswordCorrect(username, password))
            {
                return View();
            }
            return View();
        }

        [Route("register")]
        [HttpGet]
        public IActionResult RegisterIndex()
        {
            return View("Register");
        }

        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> Register([FromForm] string username, [FromForm] string password, [FromForm] string email)
        {
            try
            {
                var user = new UserModel(username, email, username);
                await userClient.PostUser(user, password);
                return View("Login");
            }
            catch (System.Exception)
            {
                throw;
            }
        }
    }
}