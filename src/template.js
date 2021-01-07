const topHalf = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Members</title>
</head>
<body>
    <header class="d-flex justify-content-center align-items-center">
        <h1 class="text-white">My Team</h1>
    </header>
    <section id="members-list">`

const bottomHalf = `
    </section>
</body>
</html>`

module.exports = {
    topHalf: topHalf,
    bottomHalf: bottomHalf
}