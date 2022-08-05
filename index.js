import express from 'express'
import session from 'express-session'
import { engine } from 'express-handlebars'
import fs from 'fs/promises'
import mongoose from "mongoose";
import orders from "./mongo/model/orders.js";

const connect = await mongoose.connect('mongodb://localhost:27017/orders');

console.log(await orders.find().lean());

const neworder = new orders()
neworder.name = ''
neworder.lastName= ''
neworder.adress= ''
neworder.number= ''
neworder.email= ''
neworder.id= ''

await neworder.save()


const app = express();
const file = './database.json'

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

//Nurodoma statiniu failu perdavimo kelias ir direktorija i kuria kreipiamasi
app.use('/public', express.static('public'))
//Norint priimti duomenis POST ir PUT metodais reikalinga ši eilutė
app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'labai slapta fraze',
    resave: true,
    saveUninitialized: false,
    cookie: { 
        maxAge: 6000000
    }
}))

app.get('/', (req, res) => {
    const options = {}

    if(req.query.status === '1') {
        options.message = 'Vartotojas sėkmingai išsaugotas'
        options.status = 'success'
    }

    res.render('login', options)
})

app.post('/', async (req, res) => {
    if(req.body.idIs === '')
        return res.render('login', { message: 'Neįvesti prisijungimo duomenys', status: 'danger' })

    try {
        const data = await fs.readFile(file, 'utf8')
        if(!JSON.parse(data).find(user => user.idIs === req.body.idIs)) 
            return res.render('login', { message: 'Neteisingi prisijungimo duomenys', status: 'danger' })

        req.session.loggedIn = true
        return res.redirect('/admin')
    } catch(error) {
        console.log(error)
        return res.render('login', { message: 'Duomenu bazės failas nerastas', status: 'danger' })
    }
})

//Formos atvaizdavimas
app.get('/register', async (req, res) => {
    res.render('register')
})

//Duomenu priemimas is formos
app.post('/register', async (req, res) => {
    if(
        JSON.stringify(req.body) != '{}' &&
        req.body.name !== '' &&
        req.body.lastName !== '' &&
        req.body.adress !== '' &&
        req.body.phone !== '' &&
        req.body.email !== '' &&
        req.body.idIs !== ''
    ) {
        try {
            let data = await fs.readFile(file, 'utf8')
            data = JSON.parse(data)
            // data[2] = 
            if(data.find(user => user.idIs === req.body.idIs))
                return res.render('register', { message: 'Toks vartotojas jau yra registruotas', status: 'danger' })

            data.push(req.body)
            await fs.writeFile( file, JSON.stringify(data, null, 4))
        } catch {
            await fs.writeFile( file, JSON.stringify([req.body], null, 4) )
        }

        //return res.render('register', {message: 'Vartotojas sėkmingai užregistruotas <a href="/">prisijunkite</a>', status: 'success'})
        return res.redirect('/?status=1')
    }
})
app.get('/admin',  async (req, res) => {
    const data = await fs.readFile(file, 'utf8')
    const users = JSON.parse(data)
    const options = { users }
    
    options.message = req.query.message
    options.status = req.query.status
    
    res.render('admin', options)
})

app.get('/delete/:id',   async (req, res) => {
    try {
        const data = await fs.readFile(file, 'utf8')
        let users = JSON.parse(data)
        users = users.filter((user, index) => index != req.params.id)
        await fs.writeFile(file, JSON.stringify(users, null, 4))
        res.redirect('/admin?message= duomenys sekmingai istrinti&status=success')
    } catch {
        res.redirect('/admin?message=nepavyko istrinti duomenu&status=danger')
    }
})

app.get('/edit/:id', async (req, res) => {
    const id = req.params.idIs
    try {
        const data = await fs.readFile(file, 'utf8')
        const user = JSON.parse(data).find((value, index) => index == id)
        res.render('edit', user)
    } catch {
        res.render('edit', { message: 'Nepavyko perskaityti failo', status: 'danger'})
    }
})

app.post('/edit/:id',  async (req, res) => {
    if(
        JSON.stringify(req.body) != '{}' &&
        JSON.stringify(req.body) != '{}' &&
        req.body.name !== '' &&
        req.body.lastName !== '' &&
        req.body.adress !== '' &&
        req.body.phone !== '' &&
        req.body.email !== '' &&
        req.body.idIs !== ''
    ) {
        try {
            let data = await fs.readFile(file, 'utf8')
            data = JSON.parse(data)
            data[req.params.id] = req.body
            await fs.writeFile( file, JSON.stringify(data, null, 4))
            res.redirect('/admin?message=Duomenys sekmingai pakeisti&status=success')
        } catch {
            res.redirect('/admin?message=Ivyko klaida&status=danger')
        }
    }
})
app.listen(3001);