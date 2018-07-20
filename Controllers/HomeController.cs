using Microsoft.AspNetCore.Mvc;

namespace SocialMovie.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return RedirectToAction("Index", "MainMenu");
        }
    }
}
