import connectMongo from "../../utils/connectdb";

connectMongo();

export default async (req, res) => {
     res.json({test: 'test'})
}