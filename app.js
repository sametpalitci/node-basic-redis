const redis = require('redis');
const client = redis.createClient();

client.on("error", (error) => {
    console.error(error);
})
// SET
client.set("user_name", "samet", (error, message) => {
    if (error) {
        console.error(error)
    }
    console.log("Message :", message);
});

//GET
client.get("user_name", (error, message) => {
    if (error) {
        console.error(error)
    }
    console.log("message :", message);
})

// del
client.del("user_name", (error, message) => {
    if (error) {
        console.error(error)
    }
    console.log("delete :", message);
})

//exists
client.exists("user_name", (error, message) => {
    if (error) {
        console.error(error)
    }
    console.log("message :", message);
})

//append
client.append("last_name", "palitci", (error, message) => {
    if (error) {
        console.error(error)
    }
    console.log("Append :", message);
})

client.on("message", (channel, message) => {
    console.log(`${channel} isimli kanala ${message} geldi.`);
});
client.publish("testtersamet", "hello world");
client.subscribe("testtersamet");
