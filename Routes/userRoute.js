const express = require("express");
const router = express.Router();
const User = require("../Model/UserModel");

// CREATE NEW USER
router.post('/users', async (req, res) => {
    const { tagname } = req.body;
    console.log(tagname);
    try {
        const existingTagname = await User.findOne({ tagname: tagname });
        if (existingTagname) {
            res.status(409).json({ message: "Tagname already exist" });
            return;
        }
        const user = new User(req.body)
        await user.save();
        res.status(201).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
})

// CHECK EXISTING USER
router.get('/check-username/:tagname', async (req, res) => {
    const { tagname } = req.params;
    console.log(req.params);
    console.log(tagname, "On line 21");
    try {
        const user = await User.findOne({ tagname: tagname });
        if (user) {
            res.json({ isTaken: true });
        } else {
            res.json({ isTaken: false })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error finding user" })
    }
})

// GET ALL USER
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// GET SINGLE USER
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(400).json({ message: "User not found" });
        res.json(user);
    } catch (error) {

    }
})

module.exports = router;