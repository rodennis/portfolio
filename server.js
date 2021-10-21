const express = require('express');
const app = express()
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 8080

app.use(express.static('views'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Dev.rodneytodd@gmail.com',
            pass: 'Todd@123456789'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'rev.rltodd@gmail.com',
        subject: `Message from ${req.body.email}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
            res.send('error')
        }
        else {
            console.log('Email Sent!')
            res.send('success')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})