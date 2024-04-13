import express from 'express'
import { AllCustomerBookedData, BookRoom, BookedRoomData, CreateRoom, RoomDetail, customerBookingDetails } from '../Controllers/hall.Controller.js';

const router = express.Router()

router.get('/allroomdetails',RoomDetail)
router.post('/createroom', CreateRoom)
router.post('/bookingroom', BookRoom)
router.get('/bookedroomdata', BookedRoomData)
router.get('/allcustomerbookeddata', AllCustomerBookedData)
router.get('/customerbookingcount', customerBookingDetails)

export default router;