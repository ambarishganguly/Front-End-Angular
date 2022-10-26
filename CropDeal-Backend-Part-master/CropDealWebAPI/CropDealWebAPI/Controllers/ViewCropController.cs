using CropDealWebAPI.Models;
using CropDealWebAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace CropDealWebAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ViewCropController : Controller

        
    {
        private readonly CropViewService _cropview;

        public ViewCropController(CropViewService cropview)
        {

            _cropview = cropview;

        }
        [Authorize(Roles = "Dealer")]

        [HttpGet]
        public List<ViewCrop> GetCrops()
        {
            return _cropview.CropsView();

        }
    }
}
