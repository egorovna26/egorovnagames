$(document).ready(function () {
    $("#copyright").html("Copyright &copy; " + new Date().getFullYear() + " " + "<a href='/'>EGOROVNAGAMES</a>");

    new Twitch.Player("twitch-embed", {
        channel: "egorovnagames"
    }).addEventListener(Twitch.Player.VIDEO_READY, function () {
        $("#twitch").removeClass("d-none");
    });
});