var _ = require("underscore");

module.exports = {
    name: "eval",
    category: "DEVELOPER ONLY",
    description: "[DEVELOPER ONLY]",
    run: async ( client,message, args) => {

        if(message.author.id !== 324593687369744385) return;

        var params = message.content.split(" ");
        params = _.rest(params, 1);
        var cmd = "";
        params.forEach(param =>
        {
            cmd = cmd + " " +param;
        });
        cmd.replace("require(", "");
        cmd.replace("exec(", "");
        var mstr = "";
        console.log(message.author.username+"#"+message.author.discriminator+" ran exec on: "+cmd);
        try
        {
            mstr = eval(cmd);
        }
        catch(e)
        {
            mstr = e;
        }
        if(mstr != "")
        {
            message.channel.send(mstr);
        }

    }
}