"use server"
import Payment from '@/models/Payment'
import connectDb from '@/db/connectDb'
import User from '@/models/User'


export const initiatePayment = async (to_username, Paymentform) => {
    await connectDb()
     
    await Payment.create({ name: Paymentform.name, oid: "6dhdfbh34utr8dfj48ej", amount: Paymentform.amount, to_user: to_username, message: Paymentform.message})

}

export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username })
    let text = u.toObject({ flattenObjectIds: true })
    return text;
}
export const findAllPayments = async () => {
    await connectDb()
    //list of all the payment
    let paymentItem = await Payment.find({});
    let text = paymentItem.map((item) => item.toObject({ flattenObjectIds: true }));
    return text;
}
