using Microsoft.AspNetCore.Mvc;

namespace FrontEnd.Controllers
{
    public class PlayerController : Controller
    {
        public IActionResult Index()
        {
            return View("Player");
        }
    }
}