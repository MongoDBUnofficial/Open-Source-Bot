
module.exports = {
    name: "addrole",
    category: "moderation",
    description: "Adds a role to a member.",
    usage: "c!addrole <user> <role>",
    run: async ( client,message, args) => {


          message.delete()
          var params = message.content.split(" ");
          var user;
          var role;
          if(params.length < 3)
          {
              message.reply("Usage: -role <user> <role>");
              return null;
          }

if (!message.author.hasPermission("MANAGE_ROLES")) {
    return message.reply("You don't have permissions to do this.")
}

          if(message.mentions.members.array().length > 0)
          {
              user = message.mentions.members.first();
          }
          else {
              message.reply("Add a user mention");
              return null;
          }
          if(message.mentions.roles.array().length > 0)
          {
              role = message.mentions.roles.first();
          }
          else
          {
              message.reply("Add a role mention");
              return null;
          }
          if(!user.roles.has(role.id))
          {
          user.addRole(role, "Role command executed by "+message.author.username)
              .then(mem =>
              {
                  message.channel.send("Role added successfully: "+role.name);
              })
              .catch(err =>
              {
                  message.channel.send("Error adding role: "+err.toString());
              });
          }
          else
          {
          user.removeRole(role, "Role command executed by "+message.author.username)
              .then(mem =>
              {
                  message.channel.send("Role removed successfully: "+role.name);
              })
              .catch(err =>
              {
                  message.channel.send("Error adding role: "+err.toString());
              });
          }

    }

}