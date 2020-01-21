console.log(window.btoa("858e948f80564e57a63738746ddf0000:e8917cf308f046d684acc633dfeeabeb"));
fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic ODU4ZTk0OGY4MDU2NGU1N2E2MzczODc0NmRkZjAwMDA6ZTg5MTdjZjMwOGYwNDZkNjg0YWNjNjMzZGZlZWFiZWI="     
    },
    body : "grant_type=client_credentials"
}).then(response => response.json())
    .then(result => {
        console.log(result);
    })