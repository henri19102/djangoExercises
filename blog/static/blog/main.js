(function($)
{
    $(document).ready(function()
    {
        var $container = $("#jquery");
        var url = "../load";
        $container.load(url);
        var refreshId = setInterval(function()
        {
            $container.load(url);
        }, 1000);
    });
})(jQuery);