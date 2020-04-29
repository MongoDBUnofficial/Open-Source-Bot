module.exports = {
    name: "dashcraftwelc",
    description: "A FAQ For the Dashcraft discord server.",
    run: async ( client,message, args) => {
message.delete()
message.channel.send("Welcome to Dashcrafts Nation mod team USF and Voramu!")

    }
}